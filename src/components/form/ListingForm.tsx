"use client";

import { useState } from "react";

const ListingForm = () => {
	const [formData, setFormData] = useState({
		location: "",
		type: "",
		sortBy: "",
		bedrooms: "",
		baths: "",
		minPrice: "",
		maxPrice: "",
	});

	const locations = ["Catanauan", "Quezon", "Manila", "Laguna"];
	const types = ["House", "Condo", "Apartment"];
	const sortByOptions = [
		"Price Low to High",
		"Price High to Low",
		"Newest First",
	];
	const bedroomOptions = [1, 2, 3, 4, 5];
	const bathOptions = [1, 2, 3, 4, 5];

	const handleChange = (
		e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Searching with:", formData);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="space-y-4 text-base mt-10 text-black font-medium"
		>
			<div>
				<label className="block mb-1">
					<p>Location</p>
				</label>
				<select
					name="location"
					value={formData.location}
					onChange={handleChange}
					className="w-full border rounded px-3 py-2"
				>
					<option value="">Select</option>
					{locations.map((loc) => (
						<option key={loc} value={loc}>
							{loc}
						</option>
					))}
				</select>
			</div>

			<div>
				<label className="block mb-1">
					<p>Type</p>
				</label>
				<select
					name="type"
					value={formData.type}
					onChange={handleChange}
					className="w-full border rounded px-3 py-2"
				>
					<option value="">Select</option>
					{types.map((type) => (
						<option key={type} value={type}>
							{type}
						</option>
					))}
				</select>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<div>
					<label className="block mb-1">
						<p>Bedrooms</p>
					</label>
					<select
						name="bedrooms"
						value={formData.bedrooms}
						onChange={handleChange}
						className="w-full border rounded px-3 py-2"
					>
						<option value="">Select</option>
						{bedroomOptions.map((bed) => (
							<option key={bed} value={bed}>
								{bed}
							</option>
						))}
					</select>
				</div>

				<div>
					<label className="block mb-1">
						<p>Baths</p>
					</label>
					<select
						name="baths"
						value={formData.baths}
						onChange={handleChange}
						className="w-full border rounded px-3 py-2"
					>
						<option value="">Select</option>
						{bathOptions.map((b) => (
							<option key={b} value={b}>
								{b}
							</option>
						))}
					</select>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-4">
				<div>
					<label className="block mb-1">
						<p>Min Price</p>
					</label>
					<input
						type="number"
						name="minPrice"
						value={formData.minPrice}
						onChange={handleChange}
						className="w-full border rounded px-3 py-2"
						placeholder="e.g. 10000"
					/>
				</div>

				<div>
					<label className="block mb-1">
						<p>Max Price</p>
					</label>
					<input
						type="number"
						name="maxPrice"
						value={formData.maxPrice}
						onChange={handleChange}
						className="w-full border rounded px-3 py-2"
						placeholder="e.g. 50000"
					/>
				</div>

        <div>
				<label className="block mb-1">
					<p>Sort By</p>
				</label>
				<select
					name="sortBy"
					value={formData.sortBy}
					onChange={handleChange}
					className="w-full border rounded px-3 py-2"
				>
					<option value="">Select</option>
					{sortByOptions.map((opt) => (
						<option key={opt} value={opt}>
							{opt}
						</option>
					))}
				</select>
			</div>
			</div>

			<div className="flex items-end">
				<button
					type="submit"
					className="w-full bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition"
				>
					Search Now
				</button>
			</div>
		</form>
	);
};

export default ListingForm;
