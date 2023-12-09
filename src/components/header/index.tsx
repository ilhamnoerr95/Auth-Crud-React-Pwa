import { Button, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();

	const logout = () => {
		localStorage.removeItem("token");
		navigate("/");
	};
	return (
		<nav
			style={{ display: "flex", flexDirection: "row", justifyContent: "end" }}
		>
			<Space>
				<Button type="link">
					<Link to="/home">HOME</Link>
				</Button>
				<Button type="link">
					<Link to="/home/filter">FILTER</Link>
				</Button>
				<Button onClick={logout}>Log out</Button>
			</Space>
		</nav>
	);
};

export default Header;
