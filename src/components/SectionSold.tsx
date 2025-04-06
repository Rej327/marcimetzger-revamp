"use client";
import React from "react";
import { StickyScroll } from "../components/ui/stickyScrollReveal";
import Image from "next/image";

const content = [
	{
		title: "Top Residential Sales Last 5 Years",
		description:
			"We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.",
		content: (
      <div className="flex h-full w-full items-center justify-center text-white">
      <Image
        src="https://img1.wsimg.com/isteam/stock/3395/:/cr=t:11.02%25,l:0%25,w:100%25,h:77.95%25/rs=w:600,h:300,cg:true"
        width={600}
        height={320}
        className="h-full w-full object-cover"
        alt="Top Residential Sales Last 5 Years"
      />
    </div>
		),
	},
	{
		title: "Don't Just List it...",
		description:
			"See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
		content: (
			<div className="flex h-full w-full items-center justify-center text-white">
				<Image
					src="https://img1.wsimg.com/isteam/stock/107927/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"
					width={600}
					height={320}
					className="h-full w-full object-cover"
					alt="Don't Just List it..."
				/>
			</div>
		),
	},
	{
		title: "Guide to Buyers",
		description:
			"Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
		content: (
			<div className="flex h-full w-full items-center justify-center text-white">
				<Image
					src="https://img1.wsimg.com/isteam/stock/771/:/cr=t:5.36%25,l:1.76%25,w:96.47%25,h:89.29%25/rs=w:600,h:300,cg:true,m"
					width={600}
					height={320}
					className="h-full w-full object-cover"
					alt="Guide to Buyers"
				/>
			</div>
		),
	},
];
export function SectionSold() {
	return (
		<div className="w-full py-4">
			<StickyScroll content={content} />
		</div>
	);
}
