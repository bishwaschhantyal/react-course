import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./Layout.jsx";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import {
	Home,
	About,
	Contact,
	User,
	GitHub,
	Me,
	You,
} from "./components/index.js";
import { loadGitHubData } from "./components/GitHub/GitHub.jsx";

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <Layout />,
// 		children: [
// 			{ path: "", element: <Home /> },
// 			{ path: "about", element: <About /> },
// 			{ path: "contact", element: <Contact /> },
// 		],
// 	},
// ]);

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />}>
				<Route path="me" element={<Me />}>
					<Route path="you" element={<You />} />
				</Route>

				<Route path="you" element={<You />} />
			</Route>
			<Route path="contact" element={<Contact />} />
			<Route path="user/:userid" element={<User />} />
			<Route loader={loadGitHubData} path="github" element={<GitHub />} />
		</Route>,
	),
);
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
