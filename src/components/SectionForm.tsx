import React from "react";
import { SectionTabs } from "./SectionTabs";

export default function SectionForm() {
	return (
		<div className="relative bg-fixed bg-cover bg-center bg-no-repeat py-20 text-white"
			style={{
				backgroundImage:
					"url('https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
			}}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black/50 bg-opacity-60 z-0"></div>

			{/* Content */}
			<div className="relative z-10">
				<h2 className="sectionHead text-center text-2xl text-white mb-10">
					Service Inquiry
				</h2>
				<SectionTabs />
			</div>
		</div>
	);
}
