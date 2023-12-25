import React, { useState } from 'react'
import * as ProductService from '../services/ProductService'
import { Button, Form, Input, InputNumber } from 'antd';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../components/Loading';
const AdminUpdate = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
        };
    
      const fetchGetDetailsProduct = async (context) => {
        console.log(context)
        const id = context?.queryKey && context?.queryKey[1]
        if(id) {
            const res = await ProductService.getDetailsProduct(id)
            return res.data
        }
        
    }
const { isLoading, data: productDetails } = useQuery(['product-details', id], fetchGetDetailsProduct, { enabled : !!id})

      const onFinish = (value) => {
        console.log(value.product);
        ProductService.updateProduct(id,
            {
                name:value.product.name,
                rating:value.product.rating,
                price: Number(value.product.price) ,
                size:value.product.size.split(','),
                image:value.product.image.split(','),
                type:value.product.type,
                description:value.product.description,
            }
        )
      };
  return (<>

    <div>AdminUpdate</div>
    <Loading isLoading={isLoading}>
        
    <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    initialValues={{
        product: {
          name: productDetails?.name,
          rating: productDetails?.rating,
          price: Number(productDetails?.price),
          size: productDetails?.size?.map((s) => s?.size) || [],
          image: productDetails?.size?.map((s) => s?.image) || [],
          type: productDetails?.type?.map((s) => s) || [],
          description: productDetails?.description,
        },
      }}
    style={{
      maxWidth: 600,
    }}>

    <Form.Item
      name={['product', 'name']}
      label="Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input ></Input>
    </Form.Item>

    <Form.Item
      name={['product', 'rating']}
      label="rating"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    
    <Form.Item
      name={['product', 'price']}
      label="Price"
      rules={[
        {
          type: 'number',
          min: 0,
          max: 99,
          required: true,
        },
      ]}
    >
      <InputNumber />
    </Form.Item>

    <Form.Item
      name={['product', 'size']}
      label="Size"
      rules={[
        {
            // type:'array',
          required: true,
        },
      ]}
      value='1'
    >
      <Input />
    </Form.Item>

    <Form.Item
      name={['product', 'image']}
      label="image"
      rules={[
        {
            // type:'array',
          required: true,
        },
      ]}
    >
      <Input.TextArea />
    </Form.Item>

    <Form.Item
      name={['product', 'type']}
      label="type"
      rules={[
        {
            // type:'array',
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      name={['product', 'description']}
      label="description"
      rules={[
        {
            // type:'array',
          required: true,
        },
      ]}
    >
      <Input.TextArea />
    </Form.Item>

    

    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
    
  </Form></Loading>
  </>)
}

export default AdminUpdate