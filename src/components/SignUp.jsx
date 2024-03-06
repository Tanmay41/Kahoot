import React, { useState } from "react";
import registerUser from "./registerUser";

function SignUp() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const result = await registerUser({ username, password });
		if (result === "OK") {
			window.location.href = "/login";
		} else if (result === "Change the username") {
			alert("This username is already taken. Please try another one.");
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
				<h1 className="text-5xl font-bold m-7">Sign up</h1>
				<input
					type="text"
					onChange={(e) => setUsername(e.target.value)}
					placeholder="Create Username"
					className="block w-full mx-auto text-sm py-2 px-3 rounded my-14 border-gray-400 border-2"
				/>
				<input
					type="text"
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Create Password"
					className="block w-full mx-auto text-sm py-2 px-3 rounded my-14 border-gray-400 border-2"
				/>
				<button className="font-bold py-2 px-4 rounded border block mx-auto w-1/2 my-14 bg-[#6366F1]">
					Register
				</button>
				<em className=" block my-14">
					already a user? <br />
					<a className="text-blue-500" href="/Login">
						click here
					</a>{" "}
					to login
				</em>
			</form>
		</div>
	);
}

export default SignUp;
