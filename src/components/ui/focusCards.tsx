"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
	({
		card,
		index,
		hovered,
		setHovered,
	}: {
		card: any;
		index: number;
		hovered: number | null;
		setHovered: React.Dispatch<React.SetStateAction<number | null>>;
	}) => (
		<div
			onMouseEnter={() => setHovered(index)}
			onMouseLeave={() => setHovered(null)}
			className={cn(
				"relative overflow-hidden h-28 w-28 mx-auto transition-all duration-300 ease-out my-4 cursor-zoom-in", // Smaller size
				hovered !== null && hovered !== index && "blur-sm scale-[0.78]"
			)}
		>
			<Image
				src={card.src}
				alt={card.title}
				fill
				className="object-cover absolute inset-0"
			/>
			<div
				className={cn(
					"absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300",
					hovered === index ? "opacity-100" : "opacity-0"
				)}
			>
				<div
					className={cn(
						"text-sm p-2 shadow-2xl text-center font-medium text-black",
						hovered === index && "opacity-100"
					)}
				>
					{card.title}
				</div>
			</div>
		</div>
	)
);

Card.displayName = "Card";

type Card = {
	title: string;
	src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
	const [hovered, setHovered] = useState<number | null>(null);

	return (
		<div className="md:flex flex-wrap justify-betweeng px-4 items-center max-w-5xl mx-auto mt-20 mb-8 md:px-8 w-full">
			{cards.map((card, index) => (
				<Card
					key={card.title}
					card={card}
					index={index}
					hovered={hovered}
					setHovered={setHovered}
				/>
			))}
		</div>
	);
}
