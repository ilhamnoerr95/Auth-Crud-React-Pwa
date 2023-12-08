import { PayloadAuth } from "Types/payload";
import { apiLogin } from "../api";
import { QKeys } from "../types/qkeys.types";

export const mutationLogin = () => ({
	mutationKey: [QKeys.LOGIN],

	mutationFn: async (payload: PayloadAuth) => {
		const { data } = payload;

		const url = process.env.REACT_APP_API_AUTH + "/login";

		const response = await apiLogin(data, url as string);

		return response;
	},
});

export default mutationLogin;
