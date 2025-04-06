"use client";

import CallForm from "./form/CallForm";
import ListingForm from "./form/ListingForm";
import Map from "./form/Map";
import { Tabs } from "./ui/tabs";

export function SectionTabs() {
	const tabs = [
		{
			title: "Search",
			value: "search",
			content: (
				<div className="w-full overflow-hidden relative h-full  p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br bg-white shadow-2xl">
					<h2 className="formTitle">Search Listings</h2>
					<ListingForm />
				</div>
			),
		},
		{
			title: "Call / MSG",
			value: "call",
			content: (
				<div className="w-full overflow-hidden relative h-full  p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br bg-white shadow-2xl">
					<h2 className="formTitle">Call or Message</h2>
					<CallForm />
				</div>
			),
		},
		{
			title: "Visit",
			value: "visit",
			content: (
				<div className="w-full overflow-hidden relative h-full  p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br bg-white shadow-2xl">
					<h2 className="formTitle">Visit</h2>
					<Map />
				</div>
			),
		},
	];

	return (
		<div className="h-[20rem] md:h-[40rem] [perspective:1400px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start">
			<Tabs tabs={tabs} />
		</div>
	);
}
