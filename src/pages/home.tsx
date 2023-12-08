import { Button } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
	const navigate = useNavigate();
	const token = localStorage.getItem("token");

	useEffect(() => {
		if (!token) {
			navigate("/");
		}
	}, [token, navigate]);

	const logout = () => {
		localStorage.removeItem("token");
		navigate("/");
	};

	return (
		<div className="wrapper-main">
			<h1>HOME</h1>
			<Button onClick={logout}>Log out</Button>
		</div>
	);
};

export default Home;
