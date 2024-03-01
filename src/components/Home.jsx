import React from "react";
import quizData from "./quizData";
import QuizCard from "./QuizCard";

function Home() {
	const Cards = quizData.map((data) => {
		return (
			<QuizCard
				key={data.id}
				id={data.id}
				Title={data.Title}
				Description={data.Description}
			/>
		);
	});

	return (
		<div>
			<section className="grid sm:grid-cols-1 lg:grid-cols-3 gap-y-20 my-20 mx-9">
				{Cards}
			</section>
		</div>
	);
}

export default Home;
