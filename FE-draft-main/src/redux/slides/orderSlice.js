import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  orderItems: [],
  orderItemsSelected: [],
  totalQuantity:0,
  shippingAddress: {
  },
  paymentMethod: '',
  itemsPrice: 0,
  shippingPrice: 0,
  taxPrice: 0,
  totalPrice: 0,
  user: '',
  isPaid: false,
  paidAt: '',
  isDelivered: false,
  deliveredAt: '',
  isSucessOrder: false,
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrderProduct: (state, action) => {
      const {orderItem} = action.payload
      const itemOrder = state?.orderItems?.find((item) => item?.product === orderItem.product)
      if(itemOrder){
        // if(itemOrder.amount <= itemOrder.countInstock) {
          itemOrder.amount += orderItem?.amount
          state.isSucessOrder = true
          state.isErrorOrder = false
          state.totalQuantity+=orderItem?.amount
          state.itemsPrice+=orderItem?.amount*orderItem?.price
        // }
      }else {
        state.orderItems.push(orderItem)
        state.totalQuantity+=orderItem?.amount
        state.itemsPrice+=orderItem?.amount*orderItem?.price
      }
    },
    resetOrder: (state) => {
      state.isSucessOrder = false
      state.totalQuantity=0
      state.itemsPrice=0
    },
    increaseAmount: (state, action) => {
      const {idProduct} = action.payload
      const itemOrder = state?.orderItems?.find((item) => item?.product === idProduct)
      const itemOrderSelected = state?.orderItemsSelected?.find((item) => item?.product === idProduct)
      const oldamount=itemOrder.amount
      itemOrder.amount++;
      if(itemOrderSelected) {
        itemOrderSelected.amount++;
      }
      state.totalQuantity++
      state.itemsPrice+=(itemOrder.amount-oldamount)*itemOrder.price
    },
    decreaseAmount: (state, action) => {
      const {idProduct} = action.payload
      const itemOrder = state?.orderItems?.find((item) => item?.product === idProduct)
      const itemOrderSelected = state?.orderItemsSelected?.find((item) => item?.product === idProduct)
      const oldamount=itemOrder.amount
      itemOrder.amount--;
      if(itemOrderSelected) {
        itemOrderSelected.amount--;
      }
      state.totalQuantity--
      state.itemsPrice-=(oldamount-itemOrder.amount)*itemOrder.price
    },
    removeOrderProduct: (state, action) => {
      const {idProduct} = action.payload
      const removed = state?.orderItems?.find((item) => item?.product === idProduct)
      const itemOrder = state?.orderItems?.filter((item) => item.product !== idProduct)
      const itemOrderSeleted = state?.orderItemsSelected?.filter((item) => item.product !== idProduct)
      console.log("remove",{idProduct,itemOrder})
      state.orderItems = itemOrder;
      state.orderItemsSelected = itemOrderSeleted;
      state.totalQuantity-=removed?.amount
      state.itemsPrice-=removed?.amount*removed.price
    },
    removeAllOrderProduct: (state, action) => {
      // const {listChecked} = action.payload
      
      // const itemOrders = state?.orderItems?.filter((item) => !listChecked.includes(item.product))
      // const itemOrdersSelected = state?.orderItems?.filter((item) => !listChecked.includes(item.product))
      state.totalQuantity=0
      state.orderItems = []
      state.orderItemsSelected = []
      state.itemsPrice=0
    },
    selectedOrder: (state, action) => {
      const {listChecked} = action.payload
      const orderSelected = []
      state.orderItems.forEach((order) => {
        if(listChecked.includes(order.product)){
          orderSelected.push(order)
        };
      });
      state.orderItemsSelected = orderSelected
    }
  },
})

// Action creators are generated for each case reducer function
export const { addOrderProduct,increaseAmount,decreaseAmount,removeOrderProduct,removeAllOrderProduct, selectedOrder,resetOrder } = orderSlice.actions

export default orderSlice.reducer