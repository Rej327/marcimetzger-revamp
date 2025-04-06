import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";
import Image from "next/image";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface HeroCardProps {
	image: string | StaticImport;
	text: string;
}

export default function HeroCard({ image, text }: HeroCardProps) {
	return (
		<CardContainer className="inter-var">
			<CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
				<CardItem translateZ="100" className="w-full mt-4">
					<Image
						src={image}
						alt="Marci Metzger"
						className="mx-auto md:w-80vw md:h-80vh object-cover rounded-full group-hover/card:shadow-xl"
						sizes="(max-width: 768px) 50vw, 25vw"
					/>
				</CardItem>
				<CardItem
					translateZ="50"
					className="text-xl my-4 font-bold mx-auto text-neutral-600 dark:text-white"
				>
					{text}
				</CardItem>
				<CardItem
					translateZ={20}
					className="cursor-pointer px-4 py-2 rounded-xl mx-auto bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
				>
					Call (+206-919-6886)
				</CardItem>
			</CardBody>
		</CardContainer>
	);
}
