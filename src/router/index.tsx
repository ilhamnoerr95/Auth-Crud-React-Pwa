import { Routes, Route } from "react-router-dom";
import Login from "../pages/login.tsx";

function Router() {
	return (
		<Routes>
			<Route path="/" element={<Login />}></Route>
			<Route path="/test" element={<h1>test 2</h1>}></Route>
		</Routes>
	);
}

export default Router;
