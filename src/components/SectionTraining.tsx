import React from "react";
import SectionCertificate from "./SectionCertificate";
import { GrCertificate } from "react-icons/gr";
import { BiSolidCertification } from "react-icons/bi";

export default function SectionTraining() {
	return (
		<div className="relative h-auto py-10">
			<div className="mx-auto px-4 py-2 mt-10 rounded-full border-1 border-[#E5E4E0]  flex gap-2 w-fit items-center shadow-sm">
				<GrCertificate className="text-[#134b31]" />
				<h2 className="uppercase text-center text-sm text-[#134b31] font-semibold tracking-wider">
					Training Attended & Certificates
				</h2>
			</div>
			<div className="max-w-[700px] mx-auto">
				<h3 className="text-center capitalize text-4xl  tracking-wide leading-snug font-bold text-[#134b31] mt-10">
					4 months of intensive, hands-on full-stack training—turning
					code into real-world solutions
				</h3>
				<p
					style={{ lineHeight: "2rem" }}
					className="text-center mt-5 text-[#134b31]"
				>
					Gained 210+ hands-on experiences from a 4-month intensive
					full-stack training, sharpening my ability to build
					real-world web applications with confidence and consistency.
				</p>
			</div>
			<div className="my-10">
				<BiSolidCertification className="text-center mx-auto text-2xl text-[#134b31] mb-10" />
				<SectionCertificate />
			</div>
		</div>
	);
}
