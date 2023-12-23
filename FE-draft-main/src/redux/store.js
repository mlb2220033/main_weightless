import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import cartReducer from "./cartRedux";
// import userReducer from "./userRedux";
import counterSlice from "./slides/counterSlide";
import productReducer from './slides/productSlice'
import counterReducer from './slides/userSlide'
import userReducer from './slides/userSlide'
import orderReducer from './slides/orderSlice'
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
//   serialize: false,
//   // blacklist:['product']
// };

// const rootReducer = combineReducers({product:productReducer, user: userReducer, order: orderReducer });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // export const store = configureStore({
// //   reducer: persistedReducer,
// //   middleware: (getDefaultMiddleware) =>
// //     getDefaultMiddleware({
// //       serializableCheck: {
// //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// //       },
// //     }),
// // });

export const store = configureStore({
  reducer:{
    counter: counterReducer,
    //reducer: persistedReducer,
    // product:productReducer,
    user: userReducer,
    // order:orderReducer
  }
})

export const persistor = persistStore(store);