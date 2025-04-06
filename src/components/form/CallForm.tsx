import React from "react";
import CallFormTwo from "./CallFormTwo";

export default function CallForm() {
	return (
		<div className="grid grid-cols-2">
			<div className="max-w-sm mt-10 text-black">
				<form className="space-y-4">
					<div>
						<label htmlFor="name" className="block text-sm mb-1">
							<p>Name</p>
						</label>
						<input
							type="text"
							id="name"
							name="name"
							className="w-full bg-transparent border-b border-black outline-none px-1 py-1 text-sm transition-all duration-300"
						/>
					</div>

					<div>
						<label htmlFor="email" className="block text-sm mb-1">
							<p>Email</p>
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="w-full bg-transparent border-b border-black outline-none px-1 py-1 text-sm transition-all duration-300"
						/>
						<p className="text-red-500 mt-2 text-xs">
							Please enter a valid email address.
						</p>
					</div>

					<div>
						<label htmlFor="message" className="block text-sm mb-1">
							<p>Message</p>
						</label>
						<textarea
							id="message"
							name="message"
							rows={4}
							className="w-full bg-transparent border-b border-black outline-none px-1 py-1 text-sm transition-all duration-300"
						></textarea>
					</div>

					<button
						type="submit"
						className="bg-blue-600 w-full text-white text-sm px-4 py-1.5 rounded hover:bg-blue-700 transition duration-300"
					>
						Send
					</button>
				</form>
			</div>
			<div>
				<CallFormTwo />
			</div>
		</div>
	);
}
