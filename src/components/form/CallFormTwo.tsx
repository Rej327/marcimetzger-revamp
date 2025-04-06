import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import dayjs from "dayjs";

const daysOfWeek = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const timeOptions = ["08:00 a.m. - 7:00 p.m."];

export default function CallFormTwo() {
	const phoneNumber = "12069196886";

	const todayIndex = dayjs().day(); // 0 (Sun) - 6 (Sat)
	const today = daysOfWeek[todayIndex];

	const [selectedDay, setSelectedDay] = useState(today);
	const [openTime, setOpenTime] = useState("08:00 a.m.");
	const [closeTime, setCloseTime] = useState("07:00 p.m.");

	const isToday = selectedDay === today;

	return (
		<div className="mx-auto bg-white text-black  p-6 rounded-lg space-y-6">
			{/* WhatsApp Button */}
			<a
				href={`https://wa.me/${phoneNumber}`}
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition"
			>
				<FaWhatsapp size={22} />
				<span>
					<p>Message on WhatsApp</p>
				</span>
			</a>

			{/* Contact Details */}
			<div className="space-y-6">
				<h2 className="text-xl font-semibold">
					Marci Metzger - THE RIDGE REALTY GROUP
				</h2>
				<p>
					3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
				</p>
				<p className="font-semibold text-orange-900">(206) 919-6886</p>
			</div>

			{/* Office Hours */}
			<div>
				<h3 className="font-semibold mb-2 text-base">Office Hours</h3>
				<div className="flex flex-col sm:flex-row sm:items-center gap-3">
					<select
						value={selectedDay}
						onChange={(e) => setSelectedDay(e.target.value)}
						className="border border-gray-300 rounded px-2 py-1 text-sm"
					>
						{daysOfWeek.map((day) => (
							<option key={day} value={day}>
								{isToday && day === today
									? "Open Today"
									: `Open ${day}`}
							</option>
						))}
					</select>

					{/* Time Range Select */}
					<div className="flex items-center gap-2">
						<select
							value={openTime}
							onChange={(e) => setOpenTime(e.target.value)}
							className="border border-gray-300 rounded px-2 py-1 text-sm"
						>
							{timeOptions.map((time) => (
								<option key={time} value={time}>
									{time}
								</option>
							))}
						</select>
					</div>
				</div>
				<p className="mt-4 text-sm italic text-gray-600">
					Appointments outside office hours available upon request.
					Just call!
				</p>
			</div>
		</div>
	);
}
