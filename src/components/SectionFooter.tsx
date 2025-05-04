import Link from "next/link";
import React from "react";
import { BsMicrosoftTeams } from "react-icons/bs";
import {
	FaEnvelope,
	FaGithub,
	FaLinkedin,
	FaViber,
	FaWhatsapp,
} from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdOutlineAddIcCall } from "react-icons/md";

export default function SectionFooter() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-[#111C1D] text-[#E5E4E0] px-6 py-10 border-t border-[#1a2a2b]">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
				{/* Branding & Role */}
				<div className="flex flex-col items-center md:items-start space-y-5">
					<h2 className="text-xl font-semibold text-[#E5E4E0] tracking-wide">
						Jefferson R.
					</h2>
					<p
						style={{
							fontSize: "0.875rem",
							color: "#E5E4E0",
							fontWeight: "300",
							lineHeight: "2",
						}}
					>
						Passionate Web Developer
					</p>
					<a
						href="mailto:resujeff27@gmail.com"
						className="text-md text-[#E5E4E0] hover:underline underline-offset-4 flex gap-2 items-center"
					>
						<IoMailUnreadOutline className="text-[#E5E4E0] text-xl" />
						resujeff27@gmail.com
					</a>
					<a
						href="tel:+639502433069"
						className="text-md text-[#E5E4E0] hover:underline underline-offset-4 flex gap-2 items-center"
					>
						<MdOutlineAddIcCall className="text-[#E5E4E0] text-xl" />
						(+63) 950 243 3069
					</a>
				</div>

				{/* Navigation */}
				<div className="flex flex-col space-y-5">
					<h3 className="text-md font-semibold text-[#E5E4E0]">
						Section
					</h3>
					<nav className="flex flex-col space-y-5">
						<a
							href="#certificates"
							className="text-md text-[#E5E4E0] hover:underline underline-offset-4"
						>
							Training & Certificates
						</a>
						<a
							href="#stack"
							className="text-md text-[#E5E4E0] hover:underline underline-offset-4"
						>
							Technology Stack
						</a>
						<a
							href="#experience"
							className="text-md text-[#E5E4E0] hover:underline underline-offset-4"
						>
							Projects & Experience
						</a>

						<a
							href="#resume"
							className="text-md text-[#E5E4E0] hover:underline underline-offset-4"
						>
							Resume
						</a>
					</nav>
				</div>

				{/* Social & Portfolios */}
				<div className="flex flex-col space-y-5">
					<h3 className="text-md font-semibold text-[#E5E4E0]">
						Portfolios
					</h3>
					<div className="flex flex-col space-y-5">
						<a
							href="https://jeffersonr.netlify.app/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-md text-[#E5E4E0] hover:underline underline-offset-4"
						>
							Portfolio v1
						</a>
						<a
							href="https://jeffersonr-V2.vercel.app/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-md text-[#E5E4E0] hover:underline underline-offset-4"
						>
							Portfolio v2
						</a>
					</div>
				</div>
			</div>

			{/* Back to Top */}
			<div className="mt-8 text-center">
				<a
					href="#top"
					className="text-md text-[#E5E4E0] hover:underline underline-offset-4 transition"
				>
					↑ Back to Top
				</a>
			</div>

			{/* Copyright */}
			<div className="max-w-6xl mx-auto mt-10 flex justify-between items-center">
				<p
					style={{
						fontSize: ".9rem",
						color: "#E5E4E0",
						fontWeight: "300",
					}}
				>
					© {currentYear} Jefferson Resurreccion. All rights reserved.
				</p>
				<div className="flex space-x-4">
					{socialItems.map(({ href, icon: Icon, hoverColor }) => (
						<Link
							key={href}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Icon
								className={`text-xl text-[#E5E4E0] transition-colors ${hoverColor}`}
							/>
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
}
const socialItems = [
	{
		href: "https://github.com/rej327",
		icon: FaGithub,
		hoverColor: "hover:text-black font-semibold",
	},
	{
		href: "viber://chat?number=%2B639502433069",
		icon: FaViber,
		hoverColor: "hover:text-purple-600 font-semibold",
	},
	{
		href: "https://wa.me/639502433069",
		icon: FaWhatsapp,
		hoverColor: "hover:text-green-500 font-semibold",
	},
	{
		href: "https://teams.microsoft.com/l/chat/0/0?users=resujeff27@gmail.com",
		icon: BsMicrosoftTeams,
		hoverColor: "hover:text-indigo-500 font-semibold",
	},
	{
		href: "mailto:resujeff27@gmail.com",
		icon: FaEnvelope,
		hoverColor: "hover:text-red-500 font-semibold",
	},
	{
		href: "https://www.linkedin.com/in/jeffersonrsrrccn/",
		icon: FaLinkedin,
		hoverColor: "hover:text-blue-700 font-semibold",
	},
];
