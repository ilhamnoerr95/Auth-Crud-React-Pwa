import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useMyNavigation = () => {
	const navigate = useNavigate();

	const home = useCallback(() => {
		navigate("/home");
	}, [navigate]);

	const back = useCallback(() => {
		navigate("/");
	}, [navigate]);

	return {
		back,
		home,
	};
};
