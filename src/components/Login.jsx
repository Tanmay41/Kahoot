import React, { useState } from "react";
import loginUser from "./loginUser";

function Login({ setIsLoggedIn }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const result = await loginUser({ username, password });
		if (result === "OK") {
			const user = { username: username, password: password };
			setIsLoggedIn(true, user);
			window.location.href = "/";
		} else if (result === "wrong cred") {
			alert("Wrong Username or Password");
		} else {
			alert(`Error: ${result}`);
		}
	};

	return (
		<div className="container w-[90vh] h-[100vh] mx-auto">
			<form
				onSubmit={handleSubmit}
				className="bg-blue px-3 my-32 m-auto text-black border-black border-2 rounded"
			>
				<h1 className="text-5xl font-bold m-7">Log In</h1>
				<input
					type="text"
					onChange={(e) => setUsername(e.target.value)}
					placeholder="Username"
					className="block w-full mx-auto text-sm py-2 px-3 rounded my-14 border-gray-400 border-2"
				/>
				<input
					type="password"
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
					className="block w-full mx-auto text-sm py-2 px-3 rounded my-14 border-gray-400 border-2"
				/>
				<button className="font-bold py-2 px-4 rounded border block mx-auto w-1/2 my-14 bg-[#6366F1]">
					Login
				</button>
				<em className=" block my-14">
					don't have an account? <br />
					<a className="text-blue-500" href="/SignUp">
						click here
					</a>{" "}
					to register
				</em>
			</form>
		</div>
	);
}

export default Login;
