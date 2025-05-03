import React from "react";

interface GridLineProps {
	color: string;
}

export default function GridLine({ color }: GridLineProps) {
	return (
		<div
			className="absolute inset-0 m-auto z-0 hidden md:block"
			style={{
				width: "80vw",
				height: "100vh",
				borderRadius: "50%",
				backgroundImage: `
						linear-gradient(to right, ${color} 1px, transparent 1px),
						linear-gradient(to bottom, ${color} 1px, transparent 1px)
					`,
				backgroundSize: "140px 70px",
				mixBlendMode: "normal",
			}}
		></div>
	);
}
