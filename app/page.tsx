'use client'

import ThemeToggler from "@/components/ThemeToggler";

function Footer() {
	return (
		<div>

		</div>
	)
};

export default function App() {
	return (
		<div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark h-screen flex flex-col justify-center items-center">
			<div className="flex justify-center items-center">
				<ThemeToggler />
			</div>
			<h1 className="text-3xl font-bold pt-10">
				Hi 👋, I am Ravikumar!
			</h1>
			<Footer />
		</div>
	);
};