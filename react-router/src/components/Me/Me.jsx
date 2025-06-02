import React, { use } from "react";
import { Outlet, useLocation } from "react-router-dom";

function Me() {
	const location = useLocation();
	const isBaseAboutRoute = location.pathname === "/about/me";
	return (
		<div className="text-red-500">
			{isBaseAboutRoute && <p>Me</p>}
			<Outlet />
		</div>
	);
}

export default Me;
