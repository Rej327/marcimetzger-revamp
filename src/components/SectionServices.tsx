import { img } from "framer-motion/client";
import { HoverEffect } from "./ui/cardHoverEffect";

export function SectionServices() {
	return (
		<div className="max-w-[1400px] mx-auto px-8">
			<h2 className="sectionHead text-black text-center mb-5">Our Services</h2>
			<HoverEffect items={projects} />
		</div>
	);
}
export const projects = [
	{
		title: "Real Estate Done Right",
		description:
			"Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
		image: "https://img1.wsimg.com/isteam/stock/12792/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365",
	},
	{
		title: "Commercial & Residential",
		description:
			"Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
		image: "https://img1.wsimg.com/isteam/stock/43920/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365",
	},
	{
		title: "Rely on Expertise",
		description:
			"If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
		image: "https://img1.wsimg.com/isteam/stock/kayaJdA/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365",
	},
];
