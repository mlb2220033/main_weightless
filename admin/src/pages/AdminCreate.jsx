import React, { useState } from 'react'
import { createProduct } from '../services/ProductService';
import { Button, Form, Input, InputNumber } from 'antd';


const AdminCreate = () => {
    const[Item,setItem]=useState({})
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
        };

    const onFinish = (value) => {
        console.log(value.product);
        createProduct(
            {
                name:value.product.name,
                rating:value.product.rating,
                price: Number(value.product.price) ,
                size:value.product.size.split(','),
                image:value.product.image.split(','),
                type:value.product.type.split(','),
                description:value.product.description,
            }
        )
      };
  return (<>
    <div>AdminCreate</div>
    <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
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
      value='1'
    >
      <Input />
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
      <Input />
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
    
  </Form>

  </>)
}

export default AdminCreate