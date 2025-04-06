import React from "react";

export default function Map() {
	return (
		<div className="w-full mt-4 h-[400px] rounded-lg overflow-hidden shadow">
			<iframe
				title="Google Map - Ridge Realty Group"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10476.726578746552!2d-115.994301!3d36.2143391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8d0916d1c4e37%3A0x99d8bc9f3c2e3b08!2s3190%20NV-160%20%23F%2C%20Pahrump%2C%20NV%2089048%2C%20USA!5e0!3m2!1sen!2sph!4v1712371320263!5m2!1sen!2sph"
				width="100%"
				height="100%"
				style={{ border: 0 }}
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	);
}
