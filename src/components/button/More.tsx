import React from "react";
import "./more.css";
import { FaArrowDown } from "react-icons/fa";

export default function More() {
	// Scroll the page down by a fixed amount (e.g., 500px)
	const scrollDown = () => {
		window.scrollBy({
			top: window.innerHeight, // Scroll by one full screen height
			behavior: "smooth", // Smooth scroll effect
		});
	};

	return (
		<button className="buttonMore" onClick={scrollDown}>
			<FaArrowDown className="arrow text-[#E5E4E0]" />
		</button>
	);
}
