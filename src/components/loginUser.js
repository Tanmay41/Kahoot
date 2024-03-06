import axios from "axios";
import queryString from "query-string";
import apiUrl from "./apiUrl";

async function loginUser({ username, password }) {
	const endPoint = "login";
	const queryParams = queryString.stringify({ username, password });
	const url = `${apiUrl}${endPoint}?${queryParams}`;
	try {
		const response = await axios.post(url);
		console.log(response);
		return response.data;
	} catch (error) {
		console.error("Error during registration:", error);
		return "err";
	}
}

export default loginUser;
