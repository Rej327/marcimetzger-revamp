"use client";

import React, { useState } from "react";
import { Timeline } from "./ui/timelime";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import {
	CymablSheeshImageData,
	CymablSheeshStack,
	DisasterGuardImageData,
	DisasterGuardStackData,
	DiscoverCatanauanImageData,
	DiscoverCatanauanStackData,
	ecImmunizationAppStackData,
	ecImmunizationImageData,
	EventCenterImageData,
	EventCenterStack,
} from "@/constants/ProjectData";
import Image from "next/image";
import { Lens } from "./ui/lens";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { FaYoutube } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { div } from "framer-motion/client";

export function SectionProjects() {
	const [hovering, setHovering] = useState(false);

	const data = [
		{
			title: "2024",
			content: (
				<div>
					{/* EC Immunization App */}
					<div className="text-neutral-700 space-y-3 border-b-1">
						<p style={{}}>Early Childhood Immunization App</p>
						<p>Project Duration: Interminttenly 3 months</p>
						<div className="flex flex-row gap-2">
							<p>Technolgy:</p>
							<div className="flex flex-row w-full">
								<AnimatedTooltip
									items={ecImmunizationAppStackData}
								/>
							</div>
						</div>
						<ul className="mb-5 leading-8">
							<li>
								<span className="font-bold">Features:</span>
								<ul className="list-disc list-inside pl-10 marker:text-[#0B2B1C]">
									<li>Online/Offline Mode</li>
									<li>Vaccination schedules</li>
									<li>Appointment scheduling</li>
									<li>Notifications and reminders</li>
									<li>Messaging system</li>
									<li>Profile management</li>
									<li>Remarks and notes</li>
									<li>Vaccination status tracking</li>
									<li>
										Implemented features such as:
										<ul className="list-decimal list-inside pl-10 marker:text-neutral-700">
											<li>
												Displays a comprehensive view of
												upcoming and overdue vaccines
												for each baby, with detailed
												descriptions and expected dates.
												Users can quickly identify
												vaccinations that require
												immediate attention.
											</li>
											<li>
												Ensures app functionality even
												when offline by caching data
												locally using AsyncStorage.
												Syncs with Firebase Firestore
												when the app reconnects,
												maintaining seamless user
												access.
											</li>
											<li>
												Utilizes the Expo push
												notification service to send
												timely reminders and updates.
												Notifications are tailored to
												users' schedules and roles, with
												admins excluded from receiving
												unnecessary alerts.
											</li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
						<Lens hovering={hovering} setHovering={setHovering}>
							<div className="grid grid-cols-2 gap-4">
								{ecImmunizationImageData.map((image, i) => (
									<Image
										key={i}
										loading="lazy"
										src={image.src}
										alt="ec-immunization-image"
										width={950}
										height={100}
										className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
									/>
								))}
							</div>
						</Lens>
						<ul className="flex gap-10 text-lg font-light mx-auto w-fit my-10">
							<Link
								href="https://github.com/Rej327/EC-Immunization.git"
								target="_blank"
								className="flex gap-2 items-center group"
							>
								<IoCodeSlash className="group-hover:grayscale-100 text-green-500 group-hover:scale-115" />
								<li className="tracking-wider underline underline-offset-4 group-hover:no-underline group-hover:grayscale-100 group-hover:font-semibold duration-150">
									Code
								</li>
							</Link>
							<Link
								href="https://youtu.be/squHep56Y88"
								target="_blank"
								className="flex gap-2 items-center group"
							>
								<FaYoutube className="group-hover:grayscale-100 text-red-500 group-hover:scale-115" />
								<li className="tracking-wider underline underline-offset-4 group-hover:no-underline group-hover:grayscale-100 group-hover:font-semibold duration-150">
									Demo
								</li>
							</Link>
						</ul>
					</div>

					{/* Event Center Web */}
					<div className="text-neutral-700 space-y-3 mt-10 border-b-1">
						<p>Event Center</p>
						<p>Project Duration: 1 day</p>
						<div className="flex flex-row gap-2">
							<p>Technolgy:</p>
							<div className="flex flex-row w-full">
								<AnimatedTooltip items={EventCenterStack} />
							</div>
						</div>
						<ul className="mb-5 leading-8">
							<li>
								<span className="font-bold">Features:</span>
								<ul className="list-disc list-inside pl-10 marker:text-[#0B2B1C]">
									<li>Contact Information and Support</li>
									<li>Event Details</li>
									<li>Package Details</li>
									<li>Coordinator Information</li>
									<li>Static Data Retrieval</li>
									<li>Contact Form Function</li>
								</ul>
							</li>
						</ul>
						<Lens hovering={hovering} setHovering={setHovering}>
							<div className="grid grid-cols-2 gap-4">
								{EventCenterImageData.map((image, i) => (
									<Image
										key={i}
										loading="lazy"
										src={image.src}
										alt="ec-immunization-image"
										width={950}
										height={100}
										className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
									/>
								))}
							</div>
						</Lens>
						<ul className="flex gap-10 text-lg font-light mx-auto w-fit my-10">
							<Link
								href="https://www.youtube.com/watch?v=2kIZ46cFErs"
								target="_blank"
								className="flex gap-2 items-center group"
							>
								<FaYoutube className="group-hover:grayscale-100 text-red-500 group-hover:scale-115" />
								<li className="tracking-wider underline underline-offset-4 group-hover:no-underline group-hover:grayscale-100 group-hover:font-semibold duration-150">
									Demo
								</li>
							</Link>
						</ul>
					</div>

					{/* Cymbal Sheesh Web */}
					<div className="text-neutral-700 space-y-3 mt-10 border-b-1">
						<p>Cymbal Sheesh</p>
						<p>Project Duration: 1 day</p>
						<div className="flex flex-row gap-2">
							<p>Technolgy:</p>
							<div className="flex flex-row w-full">
								<AnimatedTooltip items={CymablSheeshStack} />
							</div>
						</div>
						<ul className="mb-5 leading-8">
							<li>
								<span className="font-bold">Features:</span>
								<ul className="list-disc list-inside pl-10 marker:text-[#0B2B1C]">
									<li>Add to Cart Function</li>
									<li>Data Collection for Filtering Items</li>
									<li>Filter Function</li>
									<li>Search Function</li>
									<li>Cart Total Price Calculation</li>
									<li>Subscription Function</li>
								</ul>
							</li>
						</ul>
						<Lens hovering={hovering} setHovering={setHovering}>
							<div className="grid grid-cols-2 gap-4">
								{CymablSheeshImageData.map((image, i) => (
									<Image
										key={i}
										loading="lazy"
										src={image.src}
										alt="ec-immunization-image"
										width={950}
										height={100}
										className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
									/>
								))}
							</div>
						</Lens>
						<ul className="flex gap-10 text-lg font-light mx-auto w-fit my-10">
							<Link
								href="https://www.youtube.com/watch?v=8ZtEUIp5WXs"
								target="_blank"
								className="flex gap-2 items-center group"
							>
								<FaYoutube className="group-hover:grayscale-100 text-red-500 group-hover:scale-115" />
								<li className="tracking-wider underline underline-offset-4 group-hover:no-underline group-hover:grayscale-100 group-hover:font-semibold duration-150">
									Demo
								</li>
							</Link>
						</ul>
					</div>
				</div>
			),
		},
		{
			title: "2023",
			content: (
				<div>
					{/* EC Immunization App */}
					<div className="text-neutral-700 space-y-3 border-b-1">
						<p>Discover Catanauan</p>
						<p>Project Duration: Intermittently 2 months</p>
						<div className="flex flex-row gap-2">
							<p>Technolgy:</p>
							<div className="flex flex-row w-full">
								<AnimatedTooltip
									items={DiscoverCatanauanStackData}
								/>
							</div>
						</div>
						<ul className="mb-5 leading-8">
							<li>
								<span className="font-bold">Features:</span>
								<ul className="list-disc list-inside pl-10 marker:text-[#0B2B1C]">
									<li>Static data retrieval</li>
									<li>English to Tagalog translation</li>
									<li>
										Comprehensive information integration
									</li>
									<li>Pricing and operating hours display</li>
									<li>
										Location detection with a quick
										direction guide to Google Maps
									</li>
									<li>
										Implemented features such as:
										<ul className="list-decimal list-inside pl-10 marker:text-neutral-700">
											<li>
												Integrated comprehensive
												information about Catanauan,
												encompassing details on resorts,
												restaurants, hotels,waterfalls,
												transportation options, as well
												as traveler guides for Getting
												Around, Cultural Insights, and
												Getting Here, facilitating
												seamless trip planning for
												users.
											</li>
											<li>
												Utilized modern web development
												technologies to create a
												responsive and accessible web
												application.
											</li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
						<Lens hovering={hovering} setHovering={setHovering}>
							<div className="grid grid-cols-2 gap-4">
								{DiscoverCatanauanImageData.map((image, i) => (
									<Image
										key={i}
										loading="lazy"
										src={image.src}
										alt="ec-immunization-image"
										width={950}
										height={100}
										className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
									/>
								))}
							</div>
						</Lens>
						<ul className="flex gap-10 text-lg font-light mx-auto w-fit my-10">
							<Link
								href="https://github.com/Rej327/DiscoverCatanauan"
								target="_blank"
								className="flex gap-2 items-center group"
							>
								<IoCodeSlash className="group-hover:grayscale-100 text-green-500 group-hover:scale-115" />
								<li className="tracking-wider underline underline-offset-4 group-hover:no-underline group-hover:grayscale-100 group-hover:font-semibold duration-150">
									Code
								</li>
							</Link>
							<Link
								href="https://discovercatanauan.netlify.app/"
								target="_blank"
								className="flex gap-2 items-center group"
							>
								<GoDotFill className="group-hover:grayscale-100 text-blue-500 group-hover:scale-115" />
								<li className="tracking-wider underline underline-offset-4 group-hover:no-underline group-hover:grayscale-100 group-hover:font-semibold duration-150">
									Demo
								</li>
							</Link>
						</ul>
					</div>
					{/* Capstone Disaster Guard*/}
					<div className="text-neutral-700 space-y-3 border-b-1">
						<p>Village88 Capstone: Disaster Guard</p>
						<p>Project Duration: 1 week</p>
						<div className="flex flex-row gap-2">
							<p>Technolgy:</p>
							<div className="flex flex-row w-full">
								<AnimatedTooltip
									items={DisasterGuardStackData}
								/>
							</div>
						</div>
						<ul className="mb-5 leading-8">
							<li>
								<span className="font-bold">Features:</span>
								<ul className="list-disc list-inside pl-10 marker:text-[#0B2B1C]">
									<li>Quick Preparation Guide</li>
									<li>
										Call Emergency Hotline Based on Selected
										Location
									</li>
									<li>
										Notification System and Forum with
										Relative Time Reference
									</li>
									<li>Weather Detection</li>
									<li>Quick Send Messages Form</li>
									<li>
										User Authorization and Authentication
									</li>
									<li>
										Recent Disaster News in Philippines and
										Worldwide
									</li>
									<li>
										Implemented features such as:
										<ul className="list-decimal list-inside pl-10 marker:text-neutral-700">
											<li>
												Developed DisasterGuard, a
												web-based app for disaster
												preparedness and response.
											</li>
											<li>
												Employed ExpressJS and Socket.io
												for server development.
											</li>
											<li>
												Integrated real-time data
												sources including WeatherBit API
												and NASA API
											</li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
						<Lens hovering={hovering} setHovering={setHovering}>
							<div className="grid grid-cols-2 gap-4">
								{DisasterGuardImageData.map((image, i) => (
									<Image
										key={i}
										loading="lazy"
										src={image.src}
										alt="ec-immunization-image"
										width={950}
										height={100}
										className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
									/>
								))}
							</div>
						</Lens>
						<ul className="flex gap-10 text-lg font-light mx-auto w-fit my-10">
							<Link
								href="https://github.com/Rej327/DisasterGuard"
								target="_blank"
								className="flex gap-2 items-center group"
							>
								<IoCodeSlash className="group-hover:grayscale-100 text-green-500 group-hover:scale-115" />
								<li className="tracking-wider underline underline-offset-4 group-hover:no-underline group-hover:grayscale-100 group-hover:font-semibold duration-150">
									Code
								</li>
							</Link>
							<Link
								href="https://youtu.be/AwME3Hi0B88"
								target="_blank"
								className="flex gap-2 items-center group"
							>
								<FaYoutube className="group-hover:grayscale-100 text-red-500 group-hover:scale-115" />
								<li className="tracking-wider underline underline-offset-4 group-hover:no-underline group-hover:grayscale-100 group-hover:font-semibold duration-150">
									Demo
								</li>
							</Link>
						</ul>
					</div>
				</div>
			),
		},
	];
	return (
		<div id="experience" className="relative w-full overflow-clip">
			<Timeline data={data} />
		</div>
	);
}
