import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import Timer from "./Timer";
import quizData from "./quizData";
import recordRun from "./recordRun";
import showRank from "./showRank";

function Quiz() {
	// eslint-disable-next-line
	const [cookies, setCookie] = useCookies(["user"]);

	const { quizID } = useParams();
	const [questionIndex, setQuestionIndex] = useState(0);
	const [marks, setMarks] = useState(0);
	const [timeTaken, setTimeTaken] = useState([]);
	const [summary, setSummary] = useState();
	const [table, setTable] = useState();
	var correct = false;

	let quizToPresent = {};
	for (let i = 0; i <= quizData.length - 1; i++) {
		// eslint-disable-next-line
		if (quizData[i].id == quizID) {
			quizToPresent = quizData[i];
			break;
		}
	}

	const options = quizToPresent.Questions[questionIndex].Answer;
	const correctAnswer =
		quizToPresent.Questions[questionIndex].Answer[
			quizToPresent.Questions[questionIndex].CorrectAnswer
		];

	const onAnswer = (e) => {
		if (e.target.innerHTML === correctAnswer) {
			setMarks((prevMarks) => prevMarks + 4);
			correct = true;
		} else if (e.target.value === "ShowResult") {
			showSummary();
		} else if (e.target.innerHTML !== correctAnswer) {
			setMarks((prevMarks) => prevMarks - 1);
			correct = false;
		}
		nextQuestion();
	};

	async function showSummary() {
		setSummary(
			timeTaken.map((item, index) => {
				const data = `You took ${item}s on Question no. ${index + 1}`;

				return <li key={index}>{data}</li>;
			})
		);

		var score = 0;

		if (correct) {
			score = Math.floor(
				((marks + 4) / (quizToPresent.Questions.length * 4)) * 100
			);
		} else {
			score = Math.floor(
				((marks - 1) / (quizToPresent.Questions.length * 4)) * 100
			);
		}

		let sum = 0;
		for (let i = 0; i < timeTaken.length; i++) {
			sum += parseInt(timeTaken[i], 10);
		}

		const data = {
			username: cookies.user.username,
			score: score,
			totalTime: sum,
			quizID: parseInt(quizID, 10),
		};

		const responce = recordRun(data);

		if (responce === "err") {
			alert("there was an error, pleast attempt the quiz again");
		}

		const rank = await showRank({ quizID: quizID });

		setTable(
			rank.map((item, index) => {
				return (
					<tr
						key={index}
						className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
					>
						<th
							scope="row"
							className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							{index + 1}
						</th>
						<td className="px-6 py-4">{item.username}</td>
						<td className="px-6 py-4">{item.score}</td>
					</tr>
				);
			})
		);

		document.getElementById("table").classList.remove("hidden");

		document.getElementById("showResult").classList.add("hidden");
		document.getElementById("summary").classList.remove("hidden");
	}

	const optionInputs = options.map((item, index) => {
		return (
			<button
				key={index}
				className="bg-gray-50 border-2 border-black rounded h-14 mx-5 text-2xl"
				onClick={onAnswer}
			>
				{item}
			</button>
		);
	});

	function updateTimeTaken() {
		const elapsedTimeInputValue =
			document.getElementById("elapsedTime").value;

		setTimeTaken([...timeTaken, elapsedTimeInputValue]);
	}

	async function nextQuestion() {
		updateTimeTaken();
		if (questionIndex < quizToPresent.Questions.length - 1) {
			setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
		} else {
			updateTimeTaken();
			showResult();
		}
	}

	async function showResult() {
		document.getElementById("section").classList.remove("flex");
		document.getElementById("section").classList.add("hidden");

		document.getElementById("result").classList.remove("hidden");
		document.getElementById("result").classList.add("flex");
	}

	return (
		<div>
			<section
				id="section"
				className="w-full h-[90vh] flex justify-center items-center"
			>
				<div className="bg-gray-200 lg:w-2/3 sm:w-10/12 h-auto">
					<div className="flex items-center justify-normal sm:flex-col lg:flex-row h-1/4">
						<div className="w-full flex items-center">
							<h1 className="text-4xl font-bold mx-8">
								{quizToPresent.Title}
							</h1>
						</div>
						<div
							id="timerContainer"
							className="w-full flex justify-center"
						>
							<Timer
								onComplete={nextQuestion}
								trigger={questionIndex}
							/>
						</div>
					</div>

					<hr className="bg-gray-500 w-[90%] h-[2px] mx-auto my-3" />

					<div className="w-full h-auto my-5 mx-8">
						<h1 className="font-bold text-3xl">
							{quizToPresent.Questions[questionIndex].Question}
							<p className="text-gray-400 text-xl">
								{questionIndex +
									1 +
									"/" +
									quizToPresent.Questions.length}
							</p>
						</h1>
					</div>

					<div className="grid sm:grid-cols-1 lg:grid-cols-2 sm:gap-7 lg:gap-10 my-16">
						{optionInputs}
					</div>
				</div>
			</section>

			<section
				id="result"
				className="h-[90vh] w-full items-center justify-center hidden"
			>
				<div className="h-auto bg-gray-200 sm:w-10/12 lg:w-2/3">
					<div className="flex h-1/4 items-center justify-normal sm:flex-col lg:flex-row">
						<div className="flex w-full items-center">
							<h1 className="mx-8 text-4xl font-bold">Results</h1>
						</div>
					</div>

					<hr className="mx-auto my-3 h-[2px] w-[90%] bg-gray-500" />

					<div className="mx-8 my-5 h-auto w-full flex justify-normal items-center">
						<h1 className="text-3xl font-bold">
							You have scored {marks}/
							{quizToPresent.Questions.length * 4}
							<p id="comment" className="text-sm text-gray-400">
								<button
									id="showResult"
									value="ShowResult"
									onClick={onAnswer}
								>
									Click Here to record your attempt and show
									your rank
								</button>
							</p>
							<ul id="summary" className="hidden my-7 text-xl">
								{summary}
							</ul>
						</h1>

						<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
							<table
								id="table"
								className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 hidden"
							>
								<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
									<tr>
										<th scope="col" className="px-6 py-3">
											Rank
										</th>
										<th scope="col" className="px-6 py-3">
											Name
										</th>
										<th scope="col" className="px-6 py-3">
											Score
										</th>
									</tr>
								</thead>
								<tbody>{table}</tbody>
							</table>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Quiz;
