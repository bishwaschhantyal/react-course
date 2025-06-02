import React from "react";
import { useContext } from "react";
import UserContext from "../Context/UserContext";

export default function Profile() {
	const { user } = useContext(UserContext);

	if (!user) return <p>Please Login</p>;
	return <div>Profile name: {user.username}</div>;
}
