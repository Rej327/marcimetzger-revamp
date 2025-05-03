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
import { me, profile } from "../../../public/assets";
import { ContainerTextFlip } from "./containerTextFlip";
import HeroCard from "../HeroCard";

import More from "../button/More";

export const Header = () => {
	return (
		<div
			className="relative bg-cover bg-center bg-no-repeat"
			style={{
				backgroundImage: `url('../../../public/assets/img/gridLine.png')`,
			}} // replace with your actual image path
		>
			{/* <div className="bg-black/50 w-full h-full absolute inset-0 z-0" />{" "} */}
			{/* Optional: dark overlay */}
			<motion.div
				initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
				animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
				transition={{
					duration: 0.5,
					delay: 0.1,
					ease: "easeInOut",
				}}
				className="relative z-10 md:px-[22rem] mx-auto py-4 md:pt-10 md:flex md:flex-row-reverse justify-between items-center px-4 w-full left-0 top-0"
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
		</div>
	);
};

export const ProductCard = ({
	product,
	translate,
}: {
	product: {
		title: string;
		link: string;
		thumbnail: string;
	};
	translate: MotionValue<number>;
}) => {
	return (
		<motion.div
			style={{
				x: translate,
			}}
			whileHover={{
				y: -20,
			}}
			key={product.title}
			className="group/product w-[5rem] h-[5rem] md:h-[10rem] md:w-[10rem] relative shrink-0 "
		>
			<Link
				href={product.link}
				className="block group-hover/product:shadow-2xl "
			>
				<Image
					src={product.thumbnail}
					height="100"
					width="100"
					className="object-contain object-left-top absolute h-full w-full inset-0"
					alt={product.title}
				/>
			</Link>
			<div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
			<h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white cardHead">
				{product.title}
			</h2>
		</motion.div>
	);
};
