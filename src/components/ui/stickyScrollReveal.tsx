"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
	content,
	contentClassName,
}: {
	content: {
		title: string;
		description: string;
		content?: React.ReactNode;
	}[];
	contentClassName?: string;
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [activeCard, setActiveCard] = useState(0);

	const { scrollYProgress } = useScroll({
		container: containerRef,
		offset: ["start start", "end start"],
	});

	const cardLength = content.length;

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		const breakpoints = content.map((_, i) => i / cardLength);
		const closest = breakpoints.reduce(
			(acc, point, index) =>
				Math.abs(latest - point) < Math.abs(latest - breakpoints[acc])
					? index
					: acc,
			0
		);
		setActiveCard(Math.min(closest, cardLength - 1));
	});

	const backgroundColors = ["#0f172a", "#000000", "#171717"];
	const gradients = [
		"linear-gradient(to bottom right, #06b6d4, #10b981)",
		"linear-gradient(to bottom right, #ec4899, #6366f1)",
		"linear-gradient(to bottom right, #f97316, #eab308)",
	];
	const [bgGradient, setBgGradient] = useState(gradients[0]);

	useEffect(() => {
		setBgGradient(gradients[activeCard % gradients.length]);
	}, [activeCard]);

	return (
		<motion.div
			animate={{
				backgroundColor:
					backgroundColors[activeCard % backgroundColors.length],
			}}
			className="relative h-[400px] md:h-[520px] overflow-hidden rounded-md"
		>
			<h2 className="sectionHead text-center text-[2rem] text-white mt-10 mb-10 md:mb-0">Get it Sold</h2>
			<div
				ref={containerRef}
				className="h-full overflow-y-scroll scroll-smooth snap-y snap-mandatory md:px-36"
				style={{ maxHeight: "520px" }}
			>
				{content.map((item, index) => (
					<motion.div
						key={index}
						className="md:flex h-[520px] w-full snap-start items-center justify-evenly gap-10 px-6 text-left transition-opacity duration-500 md:pb-20"
						initial={{ opacity: 0 }}
						animate={{ opacity: activeCard === index ? 1 : 0.3 }}
					>
						{/* Left side - text content */}
						<div className="max-w-xl text-white">
							<h2 className="text-3xl tracking-wider">{item.title}</h2>
							<p className="mt-6 text-lg text-slate-300">
								{item.description}
							</p>
						</div>

						{/* Right side - image or content */}
						<div
							className={cn(
								"hidden md:block h-[320px] w-[600px] rounded-2xl object-cover overflow-hidden bg-white shadow-xl",
								contentClassName
							)}
						>
							{item.content ?? null}
						</div>
					</motion.div>
				))}
			</div>

			{/* Hide scrollbar visually but keep scroll behavior */}
			<style jsx>{`
				div::-webkit-scrollbar {
					display: none;
				}
				div {
					-ms-overflow-style: none;
					scrollbar-width: none;
				}
			`}</style>
		</motion.div>
	);
};
