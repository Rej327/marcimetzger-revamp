import React from "react";

export default function SectionFooter() {
	return (
		<footer className="bg-[#111111] text-white text-center py-6 relative border-t border-[#111111]">
			{/* Top Center Triangle Arrow */}
			<div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-[#111111]" />

			<p className="text-sm">
				Copyright © 2023 <strong>Marci METZGER Homes</strong> - All Rights Reserved
			</p>
		</footer>
	);
}
