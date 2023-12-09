import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";

const FilterPage = () => {
	const token = localStorage.getItem("token");
	const navigate = useNavigate();

	useEffect(() => {
		if (!token) {
			navigate("/");
		}
	}, [token, navigate]);

	return (
		<div className="wrapper">
			<Header />
			<h1>FILTER</h1>;
		</div>
	);
};

export default FilterPage;
