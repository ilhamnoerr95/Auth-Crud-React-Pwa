import { Button, Form, Input, Space } from "antd";
import React from "react";

import { useMyNavigation } from "src/libs/utlis";

type FieldType = {
	username?: string;
	password?: string;
	remember?: string;
};
const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};

const Login = () => {
	const [form] = Form.useForm();
	const { back } = useMyNavigation();

	return (
		<div className="wrapper">
			<h1 style={{ textAlign: "center" }}>REGISTER</h1>
			<Form form={form} {...layout} style={{ maxWidth: 600 }}>
				<Form.Item<FieldType>
					label="Username"
					name="username"
					rules={[{ required: true, message: "Please input your username!" }]}
				>
					<Input />
				</Form.Item>

				<Form.Item<FieldType>
					label="Password"
					name="password"
					rules={[{ required: true, message: "Please input your password!" }]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Space>
						<Button type="primary" htmlType="submit">
							Register
						</Button>

						<Button onClick={back}>Back</Button>
					</Space>
				</Form.Item>
			</Form>
		</div>
	);
};

export default Login;
