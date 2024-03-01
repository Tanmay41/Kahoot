import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

function App() {
	return (
		<div>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
