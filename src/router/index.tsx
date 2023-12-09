import { Routes, Route } from "react-router-dom";
import Login from "../pages/login.tsx";
import Register from "../pages/register.tsx";
import NotFound from "../pages/notFound.tsx";
import Home from "../pages/home.tsx";
import FilterPage from "../pages/filter.tsx";

function Router() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/home">
				<Route index element={<Home />} />
				<Route path="filter" element={<FilterPage />} />
			</Route>

			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default Router;
