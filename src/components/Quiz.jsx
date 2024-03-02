import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Timer from "./Timer";
import quizData from "./quizData";

const Quiz = () => {
	const { quizID } = useParams();
	const [questionIndex, setQuestionIndex] = useState(0);
	const [marks, setMarks] = useState(0);

	let quizToPresent = {};
	for (let i = 0; i < quizData.length; i++) {
		if ((quizData[i].id = quizID)) {
			quizToPresent = quizData[i];
			break;
		}
	}

	const [options, setOptions] = useState(
		quizToPresent.Questions[questionIndex].Answer
	);
	const [correctAnswer, setCorrectAnswer] = useState(
		quizToPresent.Questions[questionIndex].Answer[
			quizToPresent.Questions[questionIndex].CorrectAnswer
		]
	);

	const onAnswer = (e) => {
		if (e.target.innerHTML === correctAnswer) {
			setMarks((prevMarks) => prevMarks + 5);
		} else if (e.target.innerHTML !== correctAnswer) {
			setMarks((prevMarks) => prevMarks - 3);
		}

		nextQuestion();
	};

	const [optionInputs, setoptionInputs] = useState(
		options.map((item, index) => {
			return (
				<button
					key={index}
					className="bg-gray-50 border-2 border-black rounded h-14 mx-5 text-2xl"
					onClick={onAnswer}
				>
					{item}
				</button>
			);
		})
	);

	function nextQuestion() {
		if (questionIndex <= options.length) {
			setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
		}

		setOptions(quizToPresent.Questions[questionIndex].Answer);
		setoptionInputs(
			options.map((item, index) => {
				return (
					<button
						key={index}
						className="bg-gray-50 border-2 border-black rounded h-14 mx-5 text-2xl"
						onClick={onAnswer}
					>
						{item}
					</button>
				);
			})
		);
		setCorrectAnswer(
			quizToPresent.Questions[questionIndex].Answer[
				quizToPresent.Questions[questionIndex].CorrectAnswer
			]
		);
	}

	return (
		<section className="w-full h-[90vh] flex justify-center items-center">
			<div className="bg-gray-200 lg:w-2/3 sm:w-10/12 h-auto">
				<div className="flex items-center justify-normal sm:flex-col lg:flex-row h-1/4">
					<div className="w-full flex items-center">
						<h1 className="text-4xl font-bold mx-8">
							{quizToPresent.Title}
						</h1>
					</div>
					<div className="w-full flex justify-center">
						<Timer />
					</div>
				</div>

				<hr className="bg-gray-500 w-[90%] h-[2px] mx-auto my-3" />

				<div className="w-full h-auto my-5 mx-8">
					<h1 className="font-bold text-3xl">
						{quizToPresent.Questions[questionIndex].Question}
						<p className="text-gray-400 text-sm">
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
	);
};

export default Quiz;
