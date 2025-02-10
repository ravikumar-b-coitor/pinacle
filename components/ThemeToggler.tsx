'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ThemeToggler() {
	const { theme, setTheme, resolvedTheme } = useTheme(); // Using theme and resolvedTheme from ThemeProvider
	const [themeMode, setThemeMode] = useState('System'); // Local state for active mode (Light, Dark, System)

	useEffect(() => {
		// Sync themeMode state with resolvedTheme
		if (resolvedTheme === 'dark') {
			setThemeMode('Dark');
		} else if (resolvedTheme === 'light') {
			setThemeMode('Light');
		} else {
			setThemeMode('System');
		}
	}, [resolvedTheme]);

	return (
		<div className="min-h-screen w-full bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark flex flex-col items-center justify-center">
			{/* Display the selected theme */}
			<p className="mb-4">
				Current Theme: <strong>{themeMode} Mode</strong>
			</p>

			{/* Grid of icons */}
			<div className="border rounded-full p-2 grid grid-cols-3 gap-1 mt-4">
				<div
					onClick={() => {
						setTheme('light'); // Use ThemeProvider's setTheme to switch to Light mode
					}}
					className={`icon-wrapper ${theme === 'light' ? 'bg-gray-200' : ''} p-2 rounded-full cursor-pointer`}
				>
					<Sun className="h-[1.2rem] w-[1.2rem]" />
				</div>
				<div
					onClick={() => {
						setTheme('dark'); // Use ThemeProvider's setTheme to switch to Dark mode
					}}
					className={`icon-wrapper ${theme === 'dark' ? 'bg-gray-800' : ''} p-2 rounded-full cursor-pointer`}
				>
					<Moon className="h-[1.2rem] w-[1.2rem]" />
				</div>
				<div
					onClick={() => {
						setTheme('system'); // Use ThemeProvider's setTheme to respect system preference
					}}
					className={`icon-wrapper ${theme === 'system' ? 'bg-gray-800' : ''} p-2 rounded-full cursor-pointer`}
				>
					<Monitor className="h-[1.2rem] w-[1.2rem]" />
				</div>
			</div>
		</div>
	);
};