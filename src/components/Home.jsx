import React from "react";
import QuizCard from "./QuizCard";

function Home() {
	return (
		<div>
			<section className="grid sm:grid-cols-1 lg:grid-cols-3 gap-y-20 my-20 mx-9">
				<QuizCard
					Title="Quiz 1"
					Description="This is the first quiz."
				/>
			</section>
		</div>
	);
}

export default Home;
