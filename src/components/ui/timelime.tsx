"use client";
import {
	useMotionValueEvent,
	useScroll,
	useTransform,
	motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineWork } from "react-icons/md";

interface TimelineEntry {
	title: string;
	content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
	const ref = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setHeight(rect.height);
		}
	}, [ref]);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start 10%", "end 50%"],
	});

	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

	return (
		<div className="w-full bg-white md:px-10" ref={containerRef}>
			<div className="pt-20">
				<div className="mx-auto px-4 py-2 rounded-full border-1 border-[#E5E4E0]  flex gap-2 w-fit items-center shadow-sm">
					<MdOutlineWork className="text-[#134b31]" />
					<h2 className="uppercase text-center text-sm text-[#134b31] font-semibold tracking-wider">
						Projects & Experiences
					</h2>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
				<h2 className="text-center capitalize text-4xl  tracking-wide leading-snug font-bold text-[#134b31] mt-10">
					Experience from my journey
				</h2>
				<p
					style={{ lineHeight: "2rem" }}
					className="text-center mt-5 text-[#134b31]"
				>
					Over the past 2 years as a freelancer, I’ve had the chance
					to collaborate with two clients on real-world projects. This
					timeline also highlights my capstone project from intensive
					training—each step shaping my journey in tech.
				</p>
			</div>

			<div ref={ref} className="relative max-w-7xl mx-auto pt-10 pb-20">
				{data.map((item, index) => (
					<div
						key={index}
						className="flex justify-start pt-10 md:gap-10"
					>
						<div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
							<div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center">
								<div className="h-4 w-4 rounded-full bg-[#134B31] border border-[#0B2B1C]p-2" />
							</div>
							<h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-[#134B31]">
								{item.title}
							</h3>
						</div>

						<div className="relative pl-20 pr-4 md:pl-4 w-full">
							<h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-[#134B31]">
								{item.title}
							</h3>
							{item.content}{" "}
						</div>
					</div>
				))}
				<div
					style={{
						height: height + "px",
					}}
					className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
				>
					<motion.div
						style={{
							height: heightTransform,
							opacity: opacityTransform,
						}}
						className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t via[#66f0e4 from-[#447c78] to-transparent from-[0%] via-[10%] rounded-full"
					/>
				</div>
			</div>
		</div>
	);
};
