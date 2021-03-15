import React, { useState } from 'react'
import * as emailjs from 'emailjs-com'
import { Row, Form, Input, Button } from 'antd';

import styled from 'styled-components';
import theme from '../../style/theme.js';


export default function Email() {

    const layout = { 
        layout: 'vertical',
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
    };

    const {TextArea} = Input;

    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = (e) => {
        //e.preventDefault()

        const templateParams = {
            from_name: values.email,
            to_name: 'kha031821@gmail.com',
            subject: values.subject,
            message_html: values.message,
        }
        emailjs.send(
            'service_y4ugltb',
            'template_p569at3',
            templateParams,
            'user_n0SSYhsFRoQQCDYb9SpUY'
        )
        resetForm()
    }

    const resetForm = () => {
        setValues({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }
    return (
        <Container theme={theme}>
            <Form {...layout} onFinish={handleSubmit}>
                <Form.Item
                    label='Email'
                    rules={[{
                        required: true, message: 'Please input your email'
                    }]}
                >
                    <Input
                        type="email"
                        name="email"
                        value={values.email}
                        className="text-primary"
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                </Form.Item>
                <Form.Item
                    label='Name'
                    rules={[{
                        required: true, message: 'Please input your name'
                    }]}
                >
                    <Input
                        type="text"
                        name="name"
                        value={values.name}
                        className="text-primary"
                        onChange={handleChange}
                        placeholder="Name"
                    />
                </Form.Item>
                <Form.Item
                    label='Subject'
                    rules={[{
                        required: true, message: 'Please input your subject'
                    }]}
                >
                    <Input
                        type="text"
                        name="subject"
                        className="text-primary"
                        value={values.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                    />
                </Form.Item>
                <Form.Item
                    label='Message'
                    rules={[{
                        required: true, message: 'Please input your message'
                    }]}
                >
                    <TextArea rows={8}
                        type="textarea"
                        name="message"
                        className="text-primary"
                        value={values.message}
                        onChange={handleChange}
                        placeholder={"Message"}
                    />
                </Form.Item>
                <CustomItem theme={theme}>
                    <Button variant="primary" htmlType="submit">
                        Submit
                    </Button>
                </CustomItem>
            </Form>
        </Container>
    )

}

const Container = styled.div`
  width: 100%;
  margin: 5% 10%;
  height: fit-content;
  align-items: center;

  @media ${(props) => props.theme.mobile}{
      margin: 0;
  }
`;

styled(Form)`
 width: 100%;
`

styled(Form.Item)`
text-align: left;
`
styled.label`
text-align:left;
`
const CustomItem = styled(Form.Item)`
  text-align: center;
`