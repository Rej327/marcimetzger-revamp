"use client";
import React from "react";
import {
	motion,
	useScroll,
	useTransform,
	useSpring,
	MotionValue,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { gridLine, me, profile } from "../../../public/assets";
import { ContainerTextFlip } from "./containerTextFlip";
import HeroCard from "../HeroCard";
import More from "../button/More";
import SocialLinks from "./socialLinks";
import GridLine from "./gridline";
import CenterGradient from "./centergradient";

export const Header = () => {
	return (
		<div id="top" className="relative overflow-hidden">
			<GridLine color="rgba(0, 0, 0, 0.05)" />
			<CenterGradient />
			<motion.div
				initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
				animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
				transition={{
					duration: 0.5,
					delay: 0.1,
					ease: "easeInOut",
				}}
				className="relative z-10 md:px-[22rem] mx-auto py-4 md:pt-10 md:flex md:flex-row-reverse justify-between items-center px-4 w-full"
			>
				<HeroCard image={me} text="" />
				<div>
					<h1 className="mt-10 w-fit mx-auto text-center md:text-left md:mx-0 md:mt-0 text-2xl md:text-6xl font-bold name">
						Jefferson R.
						<span className="flex items-center justify-center gap-0 my-4">
							<ContainerTextFlip
								words={["Web", "App", "Front-End"]}
							/>
							Developer
						</span>
					</h1>
					<p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200 text-justify">
						Hi! I’m Jefferson Resurreccion, 26 years old, a Web/App
						Developer with two years of freelance experience
						specializing in modern JavaScript frameworks,
						particularly React.js, Next.js, and React Native.
					</p>
					<div className="mt-4">
						<More />
					</div>
				</div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
				animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
				transition={{
					duration: 0.5,
					delay: 0.1,
					ease: "easeInOut",
				}}
				className="relative z-10 md:px-[22rem] mx-auto py-4 md:pt-10 md:flex md:flex-row-reverse justify-between items-center px-4 w-full"
			>
				<SocialLinks />
			</motion.div>
		</div>
	);
};
