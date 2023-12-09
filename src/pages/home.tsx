import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// antd
import { Button, Form, Input } from "antd";

// db
import db from "../firebase";
import {
	onSnapshot,
	collection,
	addDoc,
	doc,
	setDoc,
	deleteDoc,
} from "firebase/firestore";

// components
import Header from "../components/header";

interface Data {
	value: string;
	name: string;
	id: string;
}

const Dot = (props: { color: string }) => {
	const style = {
		height: 20,
		width: 20,
		margin: "0 10px",
		backgroundColor: props.color,
		borderRadius: "50%",
		display: "inline-block",
	};
	return <span style={style}></span>;
};

const Home: React.FC = () => {
	const navigate = useNavigate();
	const [form] = Form.useForm();

	const token = localStorage.getItem("token");
	const [colors, setColor] = useState<[]>([]);
	const [create, setCreate] = useState<boolean>(false);

	useEffect(() => {
		if (!token) {
			navigate("/");
		}
	}, [token, navigate]);

	// hooks
	useEffect(
		() =>
			onSnapshot(collection(db, "colors"), (snapshot: any) => {
				setColor(
					snapshot.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))
				);
			}),

		[]
	);

	// * create function
	const createNew = async (data: any) => {
		const collectionRef = collection(db, "colors");
		const payload = { name: data.name, value: data.value };
		await addDoc(collectionRef, payload);

		setCreate(false);
		form.resetFields();
	};

	// * edit function
	const editColors = async (id: string) => {
		const name = prompt("Enter your name");
		const value = prompt("Enter your value");

		const payload = { name, value };

		const docRef = doc(db, "colors", id);
		await setDoc(docRef, payload);
	};

	// * delet function
	const deleteColors = async (id: string) => {
		const docRef = doc(db, "colors", id);

		await deleteDoc(docRef);
	};
	return (
		<div className="wrapper">
			<Header />
			<div>
				<Button onClick={() => setCreate(true)}>New</Button>
				{create && (
					<>
						<Form form={form} style={{ margin: "1rem 0" }} onFinish={createNew}>
							<Form.Item wrapperCol={{ offset: 20 }}>
								<Button type="link" onClick={() => setCreate(false)}>
									X
								</Button>
							</Form.Item>
							<Form.Item name="name">
								<Input placeholder="input name"></Input>
							</Form.Item>
							<Form.Item name="value">
								<Input placeholder="input value"></Input>
							</Form.Item>
							<Form.Item wrapperCol={{ offset: 8 }}>
								<Button type="primary" htmlType="submit">
									Submit
								</Button>
							</Form.Item>
						</Form>
					</>
				)}
				<ul className="main-crud">
					{colors
						? colors.map((data: Data, index: number) => (
								<li key={index}>
									<Button type="link" onClick={() => editColors(data.id)}>
										Edit
									</Button>
									<Button type="link" onClick={() => deleteColors(data.id)}>
										Delete
									</Button>
									<Dot color={data.name} /> {data.value}
								</li>
						  ))
						: "LOADING ..."}
				</ul>
			</div>
			<style>{`
				.main-crud {
					list-style-type: none;
				}
				li {
					display: flex;
					flex-direction: row;
					align-items: center;
				}
			`}</style>
		</div>
	);
};

export default Home;
