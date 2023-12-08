import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useMyNavigation = () => {
	const navigate = useNavigate();

	const back = useCallback(() => {
		navigate("/");
	}, [navigate]);

	return {
		back,
	};
};
