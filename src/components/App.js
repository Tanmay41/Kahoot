import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Quiz from "./Quiz";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<Routes>
					<Route index element={<Home />} />
					<Route path="quiz">
						<Route path=":quizID" element={<Quiz />} />
					</Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
