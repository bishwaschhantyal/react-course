import { useState, useCallback, useEffect, useRef } from "react";

function App() {
	const [len, setLen] = useState(8);
	const [numAllowed, setNumAllowed] = useState(false);
	const [charAllowed, setCharAllowed] = useState(false);
	const [password, setPassword] = useState("");

	const passRef = useRef(null);

	const passwordGenerator = useCallback(() => {
		let pass = "",
			str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

		if (numAllowed) str += "0123456789";
		if (charAllowed) str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

		for (let i = 0; i < len; i++) {
			let randomChar = Math.floor(Math.random() * str.length + 1);
			pass += str.charAt(randomChar);
		}
		setPassword(pass);
	}, [len, numAllowed, charAllowed, setPassword]);

	const copyPassToClip = useCallback(() => {
		passRef.current?.select();
		passRef.current?.setSelectionRange(0, len);
		window.navigator.clipboard.writeText(password);
	}, [password]);
	useEffect(() => {
		passwordGenerator();
	}, [len, numAllowed, charAllowed, passwordGenerator]);
	return (
		<>
			<h1 className="text-2xl font-bold text-center">Password Generator</h1>
			<div className="max-w-md m-auto my-1 bg-[#111] p-6 rounded-md space-y-10">
				<div className="h-10 bg-amber-50 flex rounded-md">
					<input
						type="text"
						value={password}
						placeholder="Random password"
						className="text-amber-500 w-80 px-1 outline-none"
						readOnly
						ref={passRef}
					/>
					<button
						className="bg-blue-600 w-20 rounded-r-md cursor-pointer hover:bg-blue-800"
						onClick={copyPassToClip}>
						copy
					</button>
				</div>

				<div className="flex w-full text-amber-500 gap-3">
					<div className="w-full flex items-center justify-between">
						<input
							type="range"
							min={6}
							max={100}
							className="w-30"
							onChange={(e) => {
								setLen(e.target.value);
							}}
						/>
						<p>Length {len}</p>
					</div>

					<div className="flex items-center justify-center gap-1">
						<input
							type="checkbox"
							defaultChecked={numAllowed}
							id="numInput"
							onChange={() => {
								setNumAllowed(!numAllowed);
							}}
						/>
						<p>Numbers</p>
					</div>

					<div className="flex items-center justify-center gap-1">
						<input
							type="checkbox"
							defaultChecked={charAllowed}
							id="charInput"
							onChange={() => {
								setCharAllowed((prev) => !prev);
							}}
						/>
						<p>Characters</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
