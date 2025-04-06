import React from "react";

export default function SectionSocial() {
	return (
		<div className="h-[35vmin] flex flex-col items-center justify-evenly bg-[#171717]">
			<h2 className="sectionHead text-white text-center">Social media</h2>
			<div className="bg-[#171717]  flex items-center justify-center">
				<div className="flex flex-wrap justify-center mx-auto gap-10 items-center max-w-[1400px]">
					{/* Facebook Button */}
					<a className="btn btn-icon btn-facebook" href="#">
						<i className="fa fa-facebook"></i>
						<span>Facebook</span>
					</a>

					{/* Instagram Button */}
					<a className="btn btn-icon btn-instagram" href="#">
						<i className="fa fa-instagram"></i>
						<span>Instagram</span>
					</a>

					{/* LinkedIn Button */}
					<a className="btn btn-icon btn-linkedin" href="#">
						<i className="fa fa-linkedin"></i>
						<span>LinkedIn</span>
					</a>

					{/* Yelp Button */}
					<a className="btn btn-icon btn-yelp" href="#">
						<i className="fa fa-yelp"></i>
						<span>Yelp</span>
					</a>
				</div>
			</div>
		</div>
	);
}
