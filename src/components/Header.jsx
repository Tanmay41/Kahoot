import React from "react";

function Header({ logOut }) {
	return (
		<header className="text-gray-600 body-font">
			<div className="container mx-auto flex flex-wrap p-5 justify-between flex-col md:flex-row items-center">
				<a
					href="/"
					className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
						viewBox="0 0 24 24"
					>
						<path d="M 100 100 a 50 50 0 1 0 0 0"></path>
					</svg>
					<span className="ml-3 text-xl">Kahoot!</span>
				</a>
				<button
					onClick={logOut}
					className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 relative left-0"
				>
					Log Out
					<svg
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						className="w-4 h-4 ml-1"
						viewBox="0 0 24 24"
					>
						<path d="M5 12h14M12 5l7 7-7 7"></path>
					</svg>
				</button>
			</div>
		</header>
	);
}

export default Header;
