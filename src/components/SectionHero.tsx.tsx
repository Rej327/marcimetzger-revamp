"use client";
import React from "react";
import { HeroParallax } from "./ui/heroParallax";
import { techStack } from "@/constants/stack";

export function SectionHero() {
	return (
		<>
			<HeroParallax products={techStack} />
		</>
	);
}
