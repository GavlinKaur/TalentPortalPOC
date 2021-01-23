import React, { useState, useEffect } from 'react';
import { Form, Input, InputNumber, Button, Select, } from 'antd';
import { connect } from 'react-redux';
import { newEmployee } from "../../actions/employeeActions";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const NewEmployeeForm = (props) => {
    const [visible, setVisible] = useState();
    const onFinish = (values) => {
        // console.log(values.user.firstName);
        let params = {} ;
        Object.keys(values.user).forEach(key => {
           if(values.user[key]) {
               params[key] = values.user[key];
           }
        });


        const test = props.dispatch(newEmployee(params));
        props.onSave(params);
        // console.log("test" + test);

    };


    useEffect(() => {
        setVisible(props.ifVisible);
    }, [props.ifVisible])

    return (

        <Form {...layout} name="nest-messages" label="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item
                name={['user', 'first_name']}
                label="First Name"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input name="first_name"/>
            </Form.Item>
            <Form.Item
                name={['user', 'last_name']}
                label="Last Name"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input name="last_name"/>
            </Form.Item>
            <Form.Item
                name={['user', 'emailId']}
                label="Email"
                rules={[
                    {
                        type: 'email',
                    },
                ]}
            >
                <Input name="emailId"/>
            </Form.Item>
            <Form.Item name={['user', 'gender']} label="Gender">
                <Select data-testid="gender">
                    <Select.Option value="male">Male</Select.Option>
                    <Select.Option value="female">Female</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item
                name={['user', 'age']}
                label="Age"
                rules={[
                    {
                        type: 'number',
                        min: 0,
                        max: 99,
                    },
                ]}
            >
                <InputNumber name="age"/>
            </Form.Item>

            <Form.Item name={['user', 'address']} label="Address">
                <Input.TextArea name ="address"/>
            </Form.Item>

            <Form.Item name={['user', 'country']} label="Country">
                <Select>
                    <Select.Option value="India">India</Select.Option>
                    <Select.Option value="US">USA</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
        </Button>
            </Form.Item>
        </Form>

    );
};

export default connect()(NewEmployeeForm);