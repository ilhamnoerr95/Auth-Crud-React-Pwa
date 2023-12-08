import { Link, useNavigate } from "react-router-dom";

// antd
import { Button, Form, Input, message } from "antd";

// queries
import mutationLogin from "../queries/login";
import { useMutation } from "@tanstack/react-query";

// libs
import { useMyNavigation } from "src/libs/utlis";
import { useEffect } from "react";

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
	const { home } = useMyNavigation();

	const token = localStorage.getItem("token");
	const navigate = useNavigate();

	const postLogin = useMutation({
		...mutationLogin(),
		onSuccess: (res: any) => {
			if (res.error) {
				message.error(res.error);
			} else {
				localStorage.setItem("token", res.token);
				message.success("Login successful!");

				// if sukses redirect to home
				home();
			}
		},
		onError: (err: any) => {
			console.log(err);
			message.error(err);
		},
	});

	const onFinsih = (values: any) => {
		console.log(values);
		postLogin.mutate({ data: values });
	};

	// hook
	useEffect(() => {
		if (token) {
			navigate("/home");
		}
	}, [token, navigate]);

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
					<Button
						type="primary"
						htmlType="submit"
						loading={postLogin.isPending}
					>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default Login;
