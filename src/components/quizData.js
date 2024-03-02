const quizData = [
	{
		id: 1,
		Title: "Quiz 1",
		Description: "This is the first Quiz.",
		Questions: [
			{
				Question: "What is the capital of Australia?",
				Answer: ["Sydney", "Canberra", "Melbourne", "Brisbane"],
				CorrectAnswer: 1,
			},
			{
				Question:
					"Which planet in our solar system is closest to the sun?",
				Answer: ["Mercury", "Mars", "Venus", "Sun"],
				CorrectAnswer: 0,
			},
		],
	},
	{
		id: 2,
		Title: "Quiz 2",
		Description:
			"This is the second Quiz. It contains questions about planets and their properties.",
		Questions: [
			{
				Question: "How many moons does Jupiter have?",
				Answer: ["12", "53", "79", "31"],
				CorrectAnswer: 0,
			},
			{
				Question: "Which is the largest planet in our solar system?",
				Answer: ["Jupiter", "Saturn", "Earth", "Mars"],
				CorrectAnswer: 0,
			},
		],
	},
	{
		id: 3,
		Title: "Quiz 3",
		Description: "Another quiz with miscellaneous questions.",
		Questions: [
			{
				Question: "What is the capital of Japan?",
				Answer: ["Tokyo", "Seoul", "Beijing", "Bangkok"],
				CorrectAnswer: 0,
			},
			{
				Question: "Who developed the theory of relativity?",
				Answer: [
					"Isaac Newton",
					"Albert Einstein",
					"Galileo Galilei",
					"Stephen Hawking",
				],
				CorrectAnswer: 0,
			},
		],
	},
];

export default quizData;
