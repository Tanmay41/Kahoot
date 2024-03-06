import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Header from "./Header";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import Quiz from "./Quiz";

function App() {
	const [cookies, setCookie] = useCookies(["user"]);

	const setIsLoggedIn = (correct, user) => {
		if (correct) setCookie("user", user);
	};

	const logOut = () => {
		setCookie("user", null);
	};

	return (
		<BrowserRouter>
			<div>
				<Header logOut={logOut} />
				<Routes>
					<Route
						index
						element={
							cookies.user ? <Home /> : <Navigate to="/Login" />
						}
					/>
					<Route path="quiz">
						<Route
							path=":quizID"
							element={
								cookies.user ? (
									<Quiz />
								) : (
									<Navigate to="/Login" />
								)
							}
						/>
					</Route>
					<Route
						path="Login"
						element={<Login setIsLoggedIn={setIsLoggedIn} />}
					/>
					<Route path="SignUp" element={<SignUp />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
