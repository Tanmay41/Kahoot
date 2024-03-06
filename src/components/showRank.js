import axios from "axios";
import queryString from "query-string";
import apiUrl from "./apiUrl";

async function showRank({ quizID }) {
	const endPoint = "showRank";
	const queryParams = queryString.stringify({ quizID });
	const url = `${apiUrl}${endPoint}?${queryParams}`;
	try {
		const response = await axios.post(url);
		return response.data.rows;
	} catch (error) {
		console.error("Error during registration:", error);
		return "err";
	}
}

export default showRank;
