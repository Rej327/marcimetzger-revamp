import { BsMicrosoftTeams } from "react-icons/bs";
import {
	FaGithub,
	FaViber,
	FaWhatsapp,
	FaSkype,
	FaEnvelope,
	FaLinkedin,
} from "react-icons/fa";

const socialItems = [
	{
		href: "https://github.com/rej327",
		label: "GitHub",
		icon: FaGithub,
		hoverColor: "group-hover:text-black font-semibold",
	},
	{
		href: "viber://chat?number=%2B639502433069",
		label: "Viber",
		icon: FaViber,
		hoverColor: "group-hover:text-purple-600 font-semibold",
	},
	{
		href: "https://wa.me/639502433069",
		label: "WhatsApp",
		icon: FaWhatsapp,
		hoverColor: "group-hover:text-green-500 font-semibold",
	},
	{
		href: "https://teams.microsoft.com/l/chat/0/0?users=resujeff27@gmail.com",
		label: "MS Teams",
		icon: BsMicrosoftTeams,
		hoverColor: "group-hover:text-indigo-500 font-semibold",
	},
	{
		href: "mailto:resujeff27@gmail.com",
		label: "Gmail",
		icon: FaEnvelope,
		hoverColor: "group-hover:text-red-500 font-semibold",
	},
	{
		href: "https://www.linkedin.com/in/jeffersonrsrrccn/",
		label: "LinkedIn",
		icon: FaLinkedin,
		hoverColor: "group-hover:text-blue-700 font-semibold",
	},
];

const SocialLinks = () => {
	return (
		<div className="relative z-100 flex flex-wrap justify-center md:justify-evenly items-center gap-6 text-gray-700/40 md:w-[1200px] mt-10">
			{socialItems.map(({ href, label, icon: Icon, hoverColor }) => (
				<a
					key={label}
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					title={label}
					className="group flex items-center  gap-2 text-sm md:text-4xl transition-colors"
				>
					<Icon
						className={`text-lg md:text-4xl transition-colors ${hoverColor}`}
					/>
					<span
						className={`text-lg md:text-2xl transition-colors ${hoverColor}`}
					>
						{label}
					</span>
				</a>
			))}
		</div>
	);
};

export default SocialLinks;
