import { useContext } from "react";
import { useState } from "react";
import UserContext from "../Context/UserContext";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { setUser } = useContext(UserContext);

	const handleLogin = (e) => {
		e.preventDefault();
		setUser({ username, password });
	};
	return (
		<>
			<div>Login</div>
			<input
				type="text"
				placeholder="Username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleLogin}>Login</button>
		</>
	);
}
