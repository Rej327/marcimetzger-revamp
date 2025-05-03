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
		href: "https://github.com/your-username",
		label: "GitHub",
		icon: FaGithub,
		hoverColor: "group-hover:text-black font-semibold",
	},
	{
		href: "viber://chat?number=%2B1234567890",
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
		href: "skype:live:yourusername?chat",
		label: "Skype",
		icon: FaSkype,
		hoverColor: "group-hover:text-blue-500 font-semibold",
	},
	{
		href: "mailto:yourname@gmail.com",
		label: "Gmail",
		icon: FaEnvelope,
		hoverColor: "group-hover:text-red-500 font-semibold",
	},
	{
		href: "https://linkedin.com/in/your-username",
		label: "LinkedIn",
		icon: FaLinkedin,
		hoverColor: "group-hover:text-blue-700 font-semibold",
	},
];

const SocialLinks = () => {
	return (
		<div className="relative z-100 flex flex-wrap md:justify-evenly items-center gap-6 text-gray-700/40 md:w-[1200px] mt-10">
			{socialItems.map(({ href, label, icon: Icon, hoverColor }) => (
				<a
					key={label}
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					title={label}
					className="group flex items-center gap-2 text-4xl transition-colors"
				>
					<Icon className={`text-4xl transition-colors ${hoverColor}`} />
					<span className={`text-2xl transition-colors ${hoverColor}`}>
						{label}
					</span>
				</a>
			))}
		</div>
	);
};

export default SocialLinks;
