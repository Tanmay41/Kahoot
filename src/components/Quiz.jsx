import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Timer from "./Timer";
import quizData from "./quizData";

function Quiz() {
	const { quizID } = useParams();
	const [questionIndex, setQuestionIndex] = useState(0);
	const [marks, setMarks] = useState(0);

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
			setMarks((prevMarks) => prevMarks + 5);
		} else if (e.target.innerHTML !== correctAnswer) {
			setMarks((prevMarks) => prevMarks - 3);
		}

		nextQuestion();
	};

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

	function nextQuestion() {
		if (questionIndex < quizToPresent.Questions.length - 1) {
			setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
		} else {
			showResult();
		}
	}

	function showResult() {
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
							<Timer onComplete={nextQuestion} />
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
						<div className="flex w-full justify-center">
							<Timer />
						</div>
					</div>

					<hr className="mx-auto my-3 h-[2px] w-[90%] bg-gray-500" />

					<div className="mx-8 my-5 h-auto w-full flex justify-normal items-center">
						<h1 className="text-3xl font-bold">
							You have scored {marks}/
							{quizToPresent.Questions.length * 5}
							<p id="comment" className="text-sm text-gray-400">
								<a href="/">Click Here to go to home page</a>
							</p>
						</h1>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Quiz;
