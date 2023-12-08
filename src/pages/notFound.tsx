import { Button } from "antd";
import { useMyNavigation } from "src/libs/utlis";

const NotFound = () => {
	const { back } = useMyNavigation();

	return (
		<div className="wrapper" style={{ textAlign: "center" }}>
			<h1>PAGE NOT FOUND</h1>
			<div>
				<Button onClick={back} type="primary">
					Back to Home
				</Button>
			</div>
		</div>
	);
};

export default NotFound;
