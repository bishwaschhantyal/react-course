import { use } from "react";
import { useParams } from "react-router";
function User() {
	const { userid } = useParams();
	return (
		<div className="text-center p-5 bg-gray-500 text-2xl text-amber-50">
			User: {userid}
		</div>
	);
}

export default User;
