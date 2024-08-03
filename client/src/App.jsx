import "./App.css";
import React from "react";
import Router from "./router/router";
import { inject } from "@vercel/analytics";

function App() {
	inject();
	return (
		<>
			<React.StrictMode>
				<Router />
			</React.StrictMode>
		</>
	);
}

export default App;
