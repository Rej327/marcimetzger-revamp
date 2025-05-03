"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";
import {
	capstoneCert,
	feCert,
	jsCert,
	phpCert,
	webCert,
} from "../../../public/assets";

export default function ExpandableCardDemo() {
	const [active, setActive] = useState<
		(typeof cards)[number] | boolean | null
	>(null);
	const ref = useRef<HTMLDivElement>(null);
	const id = useId();

	useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				setActive(false);
			}
		}

		if (active && typeof active === "object") {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [active]);

	useOutsideClick(ref as React.RefObject<HTMLDivElement>, () =>
		setActive(null)
	);

	return (
		<>
			<AnimatePresence>
				{active && typeof active === "object" && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black/80 h-full w-full z-10"
					/>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{active && typeof active === "object" ? (
					<div className="fixed inset-0  grid place-items-center z-[100]">
						<motion.button
							key={`button-${active.title}-${id}`}
							layout
							initial={{
								opacity: 0,
							}}
							animate={{
								opacity: 1,
							}}
							exit={{
								opacity: 0,
								transition: {
									duration: 0.05,
								},
							}}
							className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
							onClick={() => setActive(null)}
						>
							<CloseIcon />
						</motion.button>
						<motion.div
							layoutId={`card-${active.title}-${id}`}
							ref={ref}
							className="w-full max-w-[700px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-y-scroll [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
						>
							<motion.div
								layoutId={`image-${active.title}-${id}`}
							>
								<Image
									width={700}
									height={700}
									src={active.src}
									alt={active.title}
									className="w-full h-80 lg:h-auto sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
								/>
							</motion.div>

							<div>
								<div className="flex justify-between items-start p-4">
									<div className="">
										<motion.h3
											layoutId={`title-${active.title}-${id}`}
											className="font-bold text-neutral-700 dark:text-neutral-200"
										>
											{active.title}
										</motion.h3>
										<motion.p
											layoutId={`description-${active.description}-${id}`}
											className="text-neutral-600 dark:text-neutral-400"
											style={{
												fontSize: ".9rem",
												fontStyle: "italic",
											}}
										>
											{active.description}
										</motion.p>
									</div>

									{/* <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a> */}
								</div>
								<div className="pt-4 relative px-4">
									<motion.div
										layout
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										className="text-neutral-600 text-xs h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
									>
										{typeof active.content === "function"
											? active.content()
											: active.content}
									</motion.div>
								</div>
							</div>
						</motion.div>
					</div>
				) : null}
			</AnimatePresence>
			<ul className="max-w-[1200px] mx-auto w-full gap-4">
				{cards.map((card, index) => (
					<motion.div
						layoutId={`card-${card.title}-${id}`}
						key={`card-${card.title}-${id}`}
						onClick={() => setActive(card)}
						className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
					>
						<div className="flex gap-4 flex-col items-center md:flex-row ">
							<motion.div layoutId={`image-${card.title}-${id}`}>
								<Image
									width={700}
									height={700}
									src={card.src}
									alt={card.title}
									className="h-80 w-80 md:h-20 md:w-20 rounded-lg object-cover object-top"
								/>
							</motion.div>
							<div className="">
								<motion.h3
									layoutId={`title-${card.title}-${id}`}
									className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
								>
									{card.title}
								</motion.h3>
								<motion.p
									layoutId={`description-${card.description}-${id}`}
									className="text-neutral-600 max-w-[950px] dark:text-neutral-400 text-center md:text-left"
									style={{
										fontSize: ".8rem",
										fontStyle: "italic",
									}}
								>
									{card.description}
								</motion.p>
							</div>
						</div>
						<motion.button
							layoutId={`button-${card.title}-${id}`}
							className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
						>
							{card.ctaText}
						</motion.button>
					</motion.div>
				))}
			</ul>
		</>
	);
}

export const CloseIcon = () => {
	return (
		<motion.svg
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			exit={{
				opacity: 0,
				transition: {
					duration: 0.05,
				},
			}}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="h-4 w-4 text-black"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M18 6l-12 12" />
			<path d="M6 6l12 12" />
		</motion.svg>
	);
};

const cards = [
	{
		title: "Web Fundamentals Track",
		description:
			"The Web, HTML, CSS, Responsive Web Design (RWD), Git & GitHub, jQuery, SQL Queries, and Database Design",
		src: webCert,
		ctaText: "View",
		ctaLink: "",
		content: () => {
			return (
				<p
					style={{
						fontSize: "1rem",
						lineHeight: "1.5rem",
						textAlign: "justify",
					}}
				>
					Attended an in-depth training program focused on the
					foundational technologies of modern web development. Gained
					practical experience in building responsive and
					well-structured websites using HTML and CSS, implementing
					adaptive layouts with Responsive Web Design techniques, and
					enhancing interactivity with jQuery. Learned effective
					version control practices using Git and GitHub, and
					developed a strong understanding of relational databases
					through hands-on practice with SQL queries and database
					schema design. This training established a solid groundwork
					for front-end and back-end web development.
				</p>
			);
		},
	},
	{
		title: "Advanced PHP Track",
		description:
			"Core PHP, PHP with Form Data, PHP with MySQL, OOP Fundamentals & Advanced Concepts, CodeIgniter, AJAX, CodeIgniter with ORM",
		src: phpCert,
		ctaText: "View",
		ctaLink: "",
		content: () => {
			return (
				<p
					style={{
						fontSize: "1rem",
						lineHeight: "1.5rem",
						textAlign: "justify",
					}}
				>
					Completed an intensive training program focused on advanced
					PHP development. Strengthened foundational PHP skills and
					gained hands-on experience handling form data and
					integrating PHP with MySQL for dynamic, data-driven
					applications. Developed a strong understanding of
					Object-Oriented Programming (OOP) principles, including
					classes, inheritance, encapsulation, and more advanced
					patterns. Explored full-stack development using the
					CodeIgniter framework, with practical exposure to both its
					core features and advanced usage in combination with
					Object-Relational Mapping (ORM). Also learned how to build
					seamless, interactive user experiences using AJAX in a PHP
					environment.
				</p>
			);
		},
	},
	{
		title: "Advanced JavaScript Track",
		description:
			"JavaScript Fundamentals, JavaScript OOP, Advanced JavaScript, Node.js, Express.js, Socket.io, JavaScript Frameworks, Docker & Containerization, Test-Driven Development (TDD), Advanced Git, Continuous Integration (CI)",
		src: jsCert,
		ctaText: "View",
		ctaLink: "",
		content: () => {
			return (
				<p
					style={{
						fontSize: "1rem",
						lineHeight: "1.5rem",
						textAlign: "justify",
					}}
				>
					Completed an intensive training program covering advanced
					JavaScript concepts and modern full-stack development
					practices. Strengthened core JavaScript skills, including
					object-oriented programming and advanced language features.
					Built scalable server-side applications using Node.js and
					Express.js, and implemented real-time communication with
					Socket.io. Gained exposure to front-end frameworks and honed
					best practices through Test-Driven Development (TDD). The
					program also covered modern DevOps tools and practices, such
					as Docker for containerization, advanced Git workflows, and
					Continuous Integration (CI), preparing for efficient
					collaboration and deployment in professional development
					environments.
				</p>
			);
		},
	},

	{
		title: "Front-End Development Training",
		description:
			"React.js, React with Redux, WordPress Integration, React.js + WordPress Headless CMS",
		src: feCert,
		ctaText: "View",
		ctaLink: "",
		content: () => {
			return (
				<p
					style={{
						fontSize: "1rem",
						lineHeight: "1.5rem",
						textAlign: "justify",
					}}
				>
					Completed a focused training program on front-end
					development using modern tools and frameworks. Gained
					hands-on experience building dynamic user interfaces with
					React.js and managing complex application state using Redux.
					Explored WordPress both as a traditional CMS and as a
					headless backend, integrating it with React.js to create
					decoupled front-end applications powered by WordPress APIs.
					This training enhanced skills in building scalable,
					responsive, and content-driven web applications using
					industry-standard technologies.
				</p>
			);
		},
	},
	{
		title: "Capstone Project – Intensive Development Challenge",
		description: "Completed as part of final training assessment",
		src: capstoneCert,
		ctaText: "View",
		ctaLink: "",
		content: () => {
			return (
				<p
					style={{
						fontSize: "1rem",
						lineHeight: "1.5rem",
						textAlign: "justify",
					}}
				>
					Successfully developed a full-stack capstone project within
					one week, meeting the requirement of delivering at least
					three Minimum Viable Product (MVP) features. This challenge
					tested and demonstrated rapid development skills, effective
					time management, and the ability to apply both front-end and
					back-end knowledge under tight deadlines. The project
					showcased real-world application development, including
					feature planning, responsive UI design, data handling, and
					user interaction, reflecting readiness for fast-paced,
					production-level work environments.
				</p>
			);
		},
	},
	{
		title: "Full-Stack Web Development Training – Village 88",
		description:
			"Duration: January 8, 2024 – April 29, 2024 | 5x a Week | Includes Code Reviews",
		src: capstoneCert,
		ctaText: "View",
		ctaLink: "",
		content: () => {
			return (
				<p
					style={{
						fontSize: "1rem",
						lineHeight: "1.5rem",
						textAlign: "justify",
					}}
				>
					Completed an intensive full-stack web development training
					program at Village 88, designed to simulate a real-world
					development workflow. The training was conducted five days a
					week and emphasized hands-on coding exercises, regular code
					reviews, and collaborative learning. Gained strong
					proficiency in both front-end and back-end development, with
					a focus on clean, maintainable code, version control,
					debugging, and performance optimization. The program's
					structured feedback and mentorship approach significantly
					improved problem-solving skills, code quality, and readiness
					for professional software development environments.
				</p>
			);
		},
	},
];
