import React from "react";
import { FaRegFileCode } from "react-icons/fa6";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { img } from "framer-motion/client";
import GridLine from "./ui/gridline";
import { html } from "../../public/assets";
import { backend, frontend, others } from "@/constants/stack";

export default function SectionStack() {
	return (
		<div className="relative h-auto py-10 overflow-hidden">
			<GridLine color="rgba(146, 146, 146, 0.116)" />
			<div className="mx-auto px-4 py-2 mt-10 rounded-full border-1 bg-black/40 border-[#e5e4e05e]  flex gap-2 w-fit items-center shadow-sm">
				<FaRegFileCode className="text-white" />
				<h2 className="uppercase text-center text-sm text-white font-semibold tracking-wider">
					Technology Stacks
				</h2>
			</div>

			<div className="max-w-[700px] mx-auto">
				<h3 className="text-center capitalize text-4xl tracking-wide leading-snug font-bold text-[#E5E4E0] mt-10">
					Real-world experience with cutting-edge technologies
				</h3>

				<p
					style={{ lineHeight: "2rem", color: "#E5E4E0" }}
					className="text-center mt-5"
				>
					Through personal projects, hands-on assessments, and
					project-based challenges, I gained proficiency in modern web
					development technologies
				</p>
			</div>
			<div className="space-y-10 mt-10">
				<InfiniteMovingCards
					items={frontend}
					direction="right"
					speed="normal"
				/>
				<InfiniteMovingCards
					items={backend}
					direction="left"
					speed="normal"
				/>
				<InfiniteMovingCards
					items={others}
					direction="right"
					speed="normal"
				/>
			</div>
		</div>
	);
}
