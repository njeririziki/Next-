import React from 'react'
import styles from '../../styles/Landing.module.scss'
import {Form,Input,Button} from 'antd'
import Security from '../../public/security.svg'

const Contact = () => {
    const onFinish = (values) => {
        console.log(values);
      };
    return ( 
        <div className={styles.root}>
            <div className={styles.scard}>

            <Security className={styles.svg} />
            </div>
            <div className={styles.fcard}>
        <div    className={styles.form} >
                    <p> Contact us </p>
     <Form name="contact form" onFinish={onFinish} >
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
     
      <Form.Item name= 'introduction' label="Message">
        <Input.TextArea />
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit"
        >
          Send
        </Button>
      </Form.Item>
    </Form>
    </div>
            </div>

        </div>
     );
}
 
export default Contact;