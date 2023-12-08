export const apiLogin = async (data: any, link: string) => {
	const response = await fetch(link, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	return response.json();
};

export default apiLogin;
