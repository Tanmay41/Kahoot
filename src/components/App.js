import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<Routes>
					<Route index element={<Home />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
