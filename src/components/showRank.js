import axios from "axios";
import queryString from "query-string";
import apiUrl from "./apiUrl";

async function showRank({ quizID }) {
	const endPoint = "showRank";
	const queryParams = queryString.stringify({ quizID: quizID });
	const url = `${apiUrl}${endPoint}?${queryParams}`;
	console.log(url);
	try {
		const response = await axios.post(url);
		console.log(response.data.rows);
		return response.data.rows;
	} catch (error) {
		console.error("Error during registration:", error);
		return "err";
	}
}

export default showRank;
