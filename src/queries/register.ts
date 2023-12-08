import { PayloadAuth } from "Types/payload";
import { apiRegister } from "../api";
import { QKeys } from "../types/qkeys.types";

export const mutationRegister = () => ({
	mutationKey: [QKeys.REGISTER],

	mutationFn: async (payload: PayloadAuth) => {
		const { data } = payload;

		const url = "https://reqres.in/api/register";

		const response = await apiRegister(data, url as string);

		return response;
	},
});

export default mutationRegister;
