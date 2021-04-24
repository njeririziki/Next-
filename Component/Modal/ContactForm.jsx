import React, { useState } from 'react';
import { Form, Row, Col, Input,Modal, Button } from 'antd';


const ContactModal = ({visible,onCancel}) => {

    const [form] = Form.useForm();
    const onCreate = (values) => {
        console.log('Received values of form: ', values);
        setVisible(false);
      };

    return ( 
        <Modal
        visible={visible}
        title="Contact Us"
        okText="Send"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        <Form
          form={form}
          layout="vertical"
          name="contact_form"
       
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: 'Please fill this field',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email"
             rules={[
                {
                  required: true,
                  message: 'Please enter your email address',
                },
              ]}>
            <Input type='email' />
          </Form.Item>
          <Form.Item name="tell" label="Phone Number">
            <Input type='email' />
          </Form.Item>
          <Form.Item name="message" label="Message"
             rules={[
                {
                  required: true,
                  message: 'Please fill this field',
                },
              ]}>
            <Input type='textarea' />
          </Form.Item>
        </Form>
      </Modal>
     );
}
 
export default ContactModal;