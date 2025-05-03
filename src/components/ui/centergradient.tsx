import React from "react";

export default function CenterGradient() {
	return (
		<div>
			<div
				className="absolute inset-0 z-10 -top-40 pointer-events-none"
				style={{
					background:
						"radial-gradient(circle at center, rgba(255,255,255,0.7) 5%, transparent 30%)",
					width: "100%",
					height: "100vh",
				}}
			></div>
		</div>
	);
}
