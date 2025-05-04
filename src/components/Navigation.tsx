"use client";
import {
	Navbar,
	NavBody,
	NavItems,
	MobileNav,
	NavbarLogo,
	NavbarButton,
	MobileNavHeader,
	MobileNavToggle,
	MobileNavMenu,
} from "@/components/ui/resizableNavbar";
import { useState } from "react";

interface NavigationProps {
	children: React.ReactNode;
}

export function Navigation({ children }: NavigationProps) {
	const navItems = [
		{
			name: "Training",
			link: "#certificates",
		},
		{
			name: "Stack",
			link: "#stack",
		},
		{
			name: "Experience",
			link: "#experience",
		},
		{
			name: "Resume",
			link: "#resume",
		},
	];

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<div className="relative w-full bg-[#E5E4E0]">
			<Navbar>
				{/* Desktop Navigation */}
				<NavBody>
					<NavbarLogo />
					<NavItems items={navItems} />
					<div className="flex items-center gap-4">
						<NavbarButton
							variant="secondary"
							className="bg-white text-[#0B2B1C] dark:bg-[#0B2B1C] dark:text-white"
							onClick={() => window.open("tel:+639052433069")}
						>
							Call me
						</NavbarButton>
						<NavbarButton
							href="/JeffersonResurreccion-resume.pdf"
							download
							variant="primary"
							className="bg-[#0B2B1C] text-white"
						>
							Download CV
						</NavbarButton>
					</div>
				</NavBody>

				{/* Mobile Navigation */}
				<MobileNav>
					<MobileNavHeader>
						<NavbarLogo />
						<MobileNavToggle
							isOpen={isMobileMenuOpen}
							onClick={() =>
								setIsMobileMenuOpen(!isMobileMenuOpen)
							}
						/>
					</MobileNavHeader>

					<MobileNavMenu
						isOpen={isMobileMenuOpen}
						onClose={() => setIsMobileMenuOpen(false)}
					>
						{navItems.map((item, idx) => (
							<a
								key={`mobile-link-${idx}`}
								href={item.link}
								onClick={() => setIsMobileMenuOpen(false)}
								className="relative text-neutral-600 dark:text-neutral-300"
							>
								<span className="block text-base">
									{item.name}
								</span>
							</a>
						))}
						<div className="flex w-full flex-col gap-4">
							<NavbarButton
								variant="secondary"
								className="bg-[#E5E4E0] text-[#0B2B1C]"
								onClick={() => window.open("tel:+639052433069")}
							>
								Call me
							</NavbarButton>
							<NavbarButton
								href="/JeffersonResurreccion-resume.pdf"
								download
								variant="primary"
								className="bg-[#0B2B1C] text-white"
							>
								Download CV
							</NavbarButton>
						</div>
					</MobileNavMenu>
				</MobileNav>
			</Navbar>
			{children}
		</div>
	);
}
