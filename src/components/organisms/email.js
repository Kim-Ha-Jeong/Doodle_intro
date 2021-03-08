import React, { useState } from 'react'
import * as emailjs from 'emailjs-com'
import { Row, Form, Input, Button } from 'antd';

import styled from "styled-components";

export default function Email() {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
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
        e.preventDefault()

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
        <Container>
            <Form {...layout} onSubmit={handleSubmit}>
                <Form.Item
                    label='Email address'
                >
                    <Input
                        type="email"
                        name="email"
                        value={values.email}
                        className="text-primary"
                        onChange={handleChange}
                        placeholder="Enter email"
                    />
                </Form.Item>
                <Form.Item
                    label='Name'
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
                    label='Subject'>
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
                    label='Message'>
                    <TextArea rows={8}
                        type="textarea"
                        name="message"
                        className="text-primary"
                        value={values.message}
                        onChange={handleChange}
                        placeholder={"Message"}
                    />
                </Form.Item>
                <Form.Item>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Container>
    )

}

const Container = styled.div`
  width: 80%;
  height: fit-content;
  align-items: center;
`;

styled(Form)`
 width: 100%;
`

styled(Form.Item)`
text-align: center;
`