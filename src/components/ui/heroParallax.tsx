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
import { profile } from "../../../public/assets";
import { ContainerTextFlip } from "./containerTextFlip";
import HeroCard from "../HeroCard";

export const HeroParallax = ({
	products,
}: {
	products: {
		title: string;
		link: string;
		thumbnail: string;
	}[];
}) => {
	const firstRow = products.slice(0, 5);
	const secondRow = products.slice(5, 10);
	const thirdRow = products.slice(10, 15);
	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

	const translateX = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, 1000]),
		springConfig
	);
	const translateXReverse = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, -1000]),
		springConfig
	);
	const rotateX = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [15, 0]),
		springConfig
	);
	const opacity = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
		springConfig
	);
	const rotateZ = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [20, 0]),
		springConfig
	);
	const translateY = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
		springConfig
	);
	const headingOpacity = useSpring(
		useTransform(scrollYProgress, [0, 50], [0, 90]),
		springConfig
	);
	return (
		<div
			ref={ref}
			className="h-[300vh] overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
		>
			<Header />
			<motion.div
				style={{
					rotateX,
					rotateZ,
					translateY,
					opacity,
				}}
				className=""
			>
				<motion.h2
					className="text-center mb-20 text-2xl top-0 sectionHead text-black"
					style={{ opacity: headingOpacity }}
				>
					GET YOUR DREAM HOUSE
				</motion.h2>
				<motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
					{firstRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateX}
							key={product.title}
						/>
					))}
				</motion.div>
				<motion.div className="flex flex-row mb-20 space-x-20 ">
					{secondRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateXReverse}
							key={product.title}
						/>
					))}
				</motion.div>
				<motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
					{thirdRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateX}
							key={product.title}
						/>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
};

export const Header = () => {
	return (
		<motion.div
			initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
			animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
			transition={{
				duration: 0.5,
				delay: 0.1,
				ease: "easeInOut",
			}}
			className="z-50 bg-white/0 max-w-7xl relative mx-auto py-4 md:pt-40 md:flex md:flex-row-reverse justify-between items-center px-4 w-full left-0 top-0"
		>
			<HeroCard image={profile} text="REALTOR FOR NEARLY 3 DECADES!" />
			<div>
				<h1 className="mt-10 w-fit mx-auto text-center md:text-left md:mx-0 md:mt-0  text-2xl md:text-6xl font-bold dark:text-white">
					MARCI METZGER
					<ContainerTextFlip
						words={[
							"the ridge reality group",
							"the pahrump realtor",
						]}
					/>
				</h1>
				<p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200 text-justify">
					Marci was a REALTOR, then licensed Broker, in Washington
					State. Now, she is enjoying the sunshine, and helping
					clients in Southern Nevada. Having helped buyers and sellers
					in many markets since 1995, she is a wealth of knowledge.
				</p>
			</div>
		</motion.div>
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
			className="group/product h-96 w-[30rem] relative shrink-0"
		>
			<Link
				href={product.link}
				className="block group-hover/product:shadow-2xl "
			>
				<Image
					src={product.thumbnail}
					height="600"
					width="600"
					className="object-cover object-left-top absolute h-full w-full inset-0"
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
