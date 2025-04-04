import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Link, Route, Routes } from "react-router";

import About from "./About.jsx";
import Home from "./Home.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<div className="antialiased">
			<HashRouter>
				<header className="flex items-center sticky top-0 z-10 w-full p-2 bg-gray-50 border-b border-b-indigo-100">
					<h1 className="text-lg sm:text-2xl md:text-3xl font-light ml-[5vw] mr-2 text-neutral-900 font-ubuntu">
						nitgc-comb
					</h1>
					<div className="text-xl mx-4 my-2 space-x-4">
						<Link
							to="/"
							className="hover:text-indigo-400 hover:underline underline-offset-8 decoration-indigo-400 duration-200 font-ubuntu"
						>
							Home
						</Link>
						<Link
							to="/about"
							className="hover:text-indigo-400 hover:underline underline-offset-8 decoration-indigo-400 duration-200 font-ubuntu"
						>
							About
						</Link>
					</div>
				</header>
				<div className="w-full text-6xl lg:text-8xl flex justify-center items-center font-bold bg-gradient-to-br from-indigo-300 to-red-300 text-white font-roboto inset-shadow-sm shadow-black animate-hue-rotate">
					<h2 className="py-8 px-4">
						<p>Welcome to</p>
						<p>NITGC Computer Club</p>
					</h2>
				</div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</HashRouter>
		</div>
	</StrictMode>,
);
