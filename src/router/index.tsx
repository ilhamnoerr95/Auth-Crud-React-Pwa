import { Routes, Route } from "react-router-dom";
import Login from "../pages/login.tsx";
import Register from "../pages/register.tsx";
import NotFound from "../pages/notFound.tsx";
import Home from "../pages/home.tsx";

function Router() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/home" element={<Home />} />

			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default Router;
