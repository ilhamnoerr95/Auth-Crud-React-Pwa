import React, { useLayoutEffect } from "react";

const Home: React.FC = () => {
	const token = localStorage.get("token");

	useLayoutEffect(() => {
		if (!token) {
		}
	}, [token]);
	return <h1>HOME</h1>;
};

export default Home;
