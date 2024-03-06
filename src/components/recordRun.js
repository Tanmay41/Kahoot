import axios from "axios";
import queryString from "query-string";
import apiUrl from "./apiUrl";

async function recordRun({ username, score, totalTime, quizID }) {
	console.log(username, score, totalTime, quizID);
	const endPoint = "recordRun";
	const queryParams = queryString.stringify({
		username,
		score,
		totalTime,
		quizID,
	});
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

export default recordRun;
