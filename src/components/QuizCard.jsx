import React from "react";

function QuizCard({ id, Title, Description }) {
	const action = `/quiz/${id}`;

	const onSubmit = (e) => {
		// eslint-disable-next-line no-restricted-globals
		if (!confirm("Do you want to take this quiz?")) {
			e.preventDefault();
		}
	};

	return (
		<form className="lg:w-4/6 lg:mx-auto" action={action}>
			<h1 className="text-3xl font-bold">{Title}</h1>
			<p className="mt-5 text-base leading-6 text-gray-500 dark:text-gray-400">
				{Description}
			</p>
			<button
				onClick={onSubmit}
				className="flex mt-5 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg items-center"
			>
				Start Quiz
				<svg
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					className="w-4 h-4 ml-2"
					viewBox="0 0 24 24"
				>
					<path d="M5 12h14M12 5l7 7-7 7"></path>
				</svg>
			</button>
		</form>
	);
}

export default QuizCard;
