import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
	// const [data, setData] = useState([]);
	// useEffect(() => {
	// 	fetch("https://api.github.com/users/bishwaschhantyal")
	// 		.then((res) => res.json())
	// 		.then((data) => setData(data));
	// }, []);
	const data = useLoaderData();
	return (
		<div className="text-center p-5 bg-gray-500 text-2xl text-amber-50">
			GitHub Followers: {data.followers}
			<img src={data.avatar_url} alt="Git hub image" width={300} />
		</div>
	);
}

export default GitHub;

export const loadGitHubData = async () => {
	const res = await fetch("https://api.github.com/users/bishwaschhantyal");

	return res.json();
};
