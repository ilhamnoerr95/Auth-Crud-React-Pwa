import { Button, Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import mutationLogin from "../queries/login";
import { useMutation } from "@tanstack/react-query";

type FieldType = {
	email?: string;
	password?: string;
};

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};

const Login = () => {
	const [form] = Form.useForm();
	const postLogin = useMutation({
		...mutationLogin(),
		onSuccess: (res: any) => {
			console.log(res);
			if (res.error) {
				message.error(res.error);
			} else {
				message.success("Login successful!");
			}
		},
		onError: (err: any) => {
			console.log(err);
			message.error(err);
		},
	});

	const onFinsih = (values: any) => {
		postLogin.mutate({ data: values });
	};

	return (
		<div className="wrapper">
			<h1 style={{ textAlign: "center" }}>LOGIN</h1>
			<Form
				form={form}
				{...layout}
				style={{ maxWidth: 600 }}
				onFinish={onFinsih}
			>
				<Form.Item<FieldType>
					label="Email"
					name="email"
					rules={[{ required: true, message: "Please input your email!" }]}
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
				<Form.Item wrapperCol={{ offset: 8 }}>
					<Link to="/register">Register</Link>
				</Form.Item>
				<Form.Item wrapperCol={{ offset: 8 }}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default Login;
