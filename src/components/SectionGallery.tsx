"use client";

import Carousel from "@/components/ui/carousel";
import { motion } from "motion/react";
import { AuroraBackground } from "./ui/auroraBackground";
export function SectionGallery() {
	const slideData = [
		{
			title: "Location",
			button: "Explore",
			src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4460%20Roseworthy-52.jpg-SMALL.JPG/:/rs=w:984,h:655",
		},
		{
			title: "Places",
			button: "Explore",
			src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-54.jpg-SMALL.JPG/:/rs=w:984,h:655",
		},
		{
			title: "Recidence",
			button: "Explore",
			src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-41.jpg-SMALL.JPG/:/rs=w:984,h:656",
		},
		{
			title: "Interior",
			button: "Explore",
			src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-14.jpg-SMALL.JPG/:/cr=t:0%25,l:0.05%25,w:99.9%25,h:99.9%25/rs=w:984,h:655",
		},
	];
	return (
		<div className="relative overflow-hidden w-full h-full py-20">
			<AuroraBackground>
				<motion.div
					initial={{ opacity: 0.0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className="relative flex flex-col gap-4 items-center justify-center px-4"
				>
					<h2 className="sectionHead text-white mb-10">Gallery</h2>
					<Carousel slides={slideData} />
				</motion.div>
			</AuroraBackground>
		</div>
	);
}
