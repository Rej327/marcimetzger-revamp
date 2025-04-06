"use client";
import React from "react";
import { HeroParallax } from "./ui/heroParallax";

export function SectionHero() {
	return <HeroParallax products={products} />;
}
export const products = [
	{
		title: "3 Bedroom House for sale in Libag Sur, Cagayan",
		link: "https://www.dotproperty.com.ph/ads/3-bedroom-house-for-sale-in-libag-sur-cagayan_6086f6291e48-5390-32a5-cd8c-387585b7",
		thumbnail:
			"https://pix.dotproperty.co.th/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzJlNDE0MjE2LWQxY2QtNGY3Ni05MDY0LTE1YjgwNzNhMzE5My8wMTk1Yjc1ZC01ZDRjLTcyNjQtOWM0ZC0wNmVkMmQ5MDIyMDIuanBnIiwiYnJhbmQiOiJkb3Rwcm9wZXJ0eSIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbCwicmVzaXplIjp7IndpZHRoIjo0OTAsImhlaWdodCI6MzI1LCJmaXQiOiJjb3ZlciJ9fX0=",
	},
	{
		title: "Brand New Fully Furnished 3BR with Pool",
		link: "https://https://www.dotproperty.com.ph/ads/3-bedroom-house-for-sale-in-liptong-negros-oriental_649818aa0dc5-3ab1-6ff2-15b8-c28c5089.so",
		thumbnail:
			"https://pix.dotproperty.co.th/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTRkMTdkLTFlNDgtN2FhMy04ZWY2LTRkYzlmZjE4MTA1My8wMTk0ZDE3ZC0zMmI2LTcxODMtYjUwNy04MWRmMWI5YjFiMjMuanBnIiwiYnJhbmQiOiJkb3Rwcm9wZXJ0eSIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbCwicmVzaXplIjp7IndpZHRoIjo0OTAsImhlaWdodCI6MzI1LCJmaXQiOiJjb3ZlciJ9fX0=",
	},
	{
		title: "Stylish 2BR House and Lot",
		link: "https://www.dotproperty.com.ph/ads/2-bedroom-house-for-sale-in-pakiad-iloilo_19d668eae960-aba1-f0c2-036f-2f209089",
		thumbnail:
			"https://images.proppit.com/properties/019097a7-a369-7d9a-8fef-930bfb133c08/1e22d5ee-fec0-4043-ad5b-1512fde1c2ea.bin",
	},

	{
		title: "4 Bedroom 2 Storey Single Attached House",
		link: "https://www.dotproperty.com.ph/ads/4-bedroom-house-for-sale-in-tungkil-cebu_967628f16be8-398f-6ff2-2e13-1a5c5089",
		thumbnail:
			"https://pix.dotproperty.co.th/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTRkNGY4LTY4YjctN2FhMy1hMTA2LTFiZTM4YTE3MzIzMC8wMTk0ZDRmOC05NTBhLTcxNWItOGVmYS0zMjk5NTlmOTRiM2EuanBnIiwiYnJhbmQiOiJkb3Rwcm9wZXJ0eSIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbCwicmVzaXplIjp7IndpZHRoIjo0OTAsImhlaWdodCI6MzI1LCJmaXQiOiJjb3ZlciJ9fX0=",
	},
	{
		title: "3 bedroom Golf Property House and Lot",
		link: "https://www.dotproperty.com.ph/3-bedroom-house-for-sale-in-tagaytay-cavite_8492125",
		thumbnail:
			"https://pix.dotproperty.co.th/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzEzNDlhODJlLTFkNDktNGI0Yi1iMjBmLWNjOTU3ZjQ0MDkyZS8yMDU2OGM5Yi1mNmJmLTQ4YmQtYjhmNy00ZTYyOGQyNzM1MDkuanBnIiwiYnJhbmQiOiJkb3Rwcm9wZXJ0eSIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbCwicmVzaXplIjp7IndpZHRoIjo0OTAsImhlaWdodCI6MzI1LCJmaXQiOiJjb3ZlciJ9fX0=",
	},
	{
		title: "4 Bedroom House with Beach View",
		link: "https://www.dotproperty.com.ph/ads/4-bedroom-house-for-sale-in-corona-del-mar-pooc-cebu_3e773e821347-bcf0-4bb2-7891-0cf34089",
		thumbnail:
			"https://pix.dotproperty.co.th/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTU2YWQ5LTgwMTItN2VlNS05YWRlLTI1Njg3MWI2MjJiNi8wMTk1NmFlMy03NTMwLTcxOWUtOWQ2ZS1mZWE3NmVhMTYyMGYuanBnIiwiYnJhbmQiOiJkb3Rwcm9wZXJ0eSIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbCwicmVzaXplIjp7IndpZHRoIjo0OTAsImhlaWdodCI6MzI1LCJmaXQiOiJjb3ZlciJ9fX0=",
	},

	{
		title: "BREEZA SCAPES",
		link: "https://www.dotproperty.com.ph/ads/4-bedroom-house-for-sale-in-looc-cebu_1a843bdbf312-c77e-4ff2-824b-8c105089",
		thumbnail:
			"https://pix.dotproperty.co.th/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTQ5OGQxLWU1NzEtN2FhNS1iMjJkLTc4NmFlY2U2NTFmOC8wMTk0OThkMS1mMjkzLTcwZWItYjAyNi0zZWM3ZWU3MWEzOTgucG5nIiwiYnJhbmQiOiJkb3Rwcm9wZXJ0eSIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbCwicmVzaXplIjp7IndpZHRoIjo0OTAsImhlaWdodCI6MzI1LCJmaXQiOiJjb3ZlciJ9fX0=",
	},
	{
		title: "Brand New Modern House with Pool",
		link: "https://www.dotproperty.com.ph/ads/5-bedroom-house-for-sale-in-new-alabang-village-metro-manila_281109a076c1-ef6e-f995-6b16-379ae966",
		thumbnail:
			"https://pix.dotproperty.co.th/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzMzMGJmMDI2LTM4ZTMtNDAwYS1iM2FiLThkMzI5ZjA5ODgxNy8wMTk0MzRjYy0zYzcyLTcxMWQtYTViYS04YTM4MjFiNTZhMzcuanBnIiwiYnJhbmQiOiJkb3Rwcm9wZXJ0eSIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbCwicmVzaXplIjp7IndpZHRoIjo0OTAsImhlaWdodCI6MzI1LCJmaXQiOiJjb3ZlciJ9fX0=",
	},
	{
		title: "House and Lot with Golf Course View",
		link: "https://www.dotproperty.com.ph/ads/3-bedroom-house-for-sale-in-tubuan-i-cavite_148f9a663452-ba8e-a772-3e66-976a5089",
		thumbnail:
			"https://pix.dotproperty.co.th/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTRmMzIwLTMzYjYtNzIyZi1iMWZlLTc0NTYzM2YwYTE1OC8wMTk0ZjMyMC00OTEyLTcyODktODNmMS0xMWY4NDdiMTFlZmQuanBnIiwiYnJhbmQiOiJkb3Rwcm9wZXJ0eSIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbCwicmVzaXplIjp7IndpZHRoIjo0OTAsImhlaWdodCI6MzI1LCJmaXQiOiJjb3ZlciJ9fX0=",
	},
	{
		title: "5 Bedroom House",
		link: "https://www.dotproperty.com.ph/ads/5-bedroom-house-for-sale-in-santo-rosario-pampanga_d0c7e51ba0db-7351-3882-cccd-ff1d9089",
		thumbnail:
			"https://pix.dotproperty.co.th/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTBjOGFhLWNkZGQtNzExNi04NDYyLWVjOWZlODRiMmQ5Yy8wMTkwYzhhYS1kODhmLTcwNGUtYWY1MC04NTIwMTNhMzk2NTkuanBnIiwiYnJhbmQiOiJkb3Rwcm9wZXJ0eSIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbCwicmVzaXplIjp7IndpZHRoIjo0OTAsImhlaWdodCI6MzI1LCJmaXQiOiJjb3ZlciJ9fX0=",
	},
	{
		title: "4 Bedroom House",
		link: "https://www.dotproperty.com.ph/ads/4-bedroom-house-for-sale-in-anabu-i-b-cavite_6814cd890d1e-29f0-0aa2-8a9c-aae56089",
		thumbnail:
			"https://pix.dotproperty.co.th/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTM0YmZmLWQwZjEtN2ZmOS05YTA3LWI4YzkwMWNkNTgxMy8wMTkzNGJmZi1kYzhkLTcyZjEtOTk1YS1iM2YxNDgxYThhNjAuanBnIiwiYnJhbmQiOiJkb3Rwcm9wZXJ0eSIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbCwicmVzaXplIjp7IndpZHRoIjo0OTAsImhlaWdodCI6MzI1LCJmaXQiOiJjb3ZlciJ9fX0=",
	},

	{
		title: "Luxury Home with Pool & Elevator",
		link: "https://https://www.dotproperty.com.ph/ads/5-bedroom-house-for-sale-in-almanza-dos-metro-manila_dc97f1e15770-37fe-1d22-e5b6-67374089.com",
		thumbnail:
			"https://images.proppit.com/properties/01952623-3e4b-77c8-ba26-92248b8a20dc/01952627-a6b0-70ff-a184-db55a6466c3c.bin",
	},
	{
		title: "4 Bedroom House for sale in Barangay 18, Negros Occidental",
		link: "https://www.dotproperty.com.ph/ads/4-bedroom-house-for-sale-in-barangay-18-negros-occidental_61fff22e1bb4-1711-0cc2-83f1-782e8089",
		thumbnail:
			"https://images.proppit.com/properties/0191b712-8a61-7dd9-8828-5ee8b77aaa83/0191b7d5-a069-7358-b873-c6cf8a54a698.bin",
	},
	{
		title: "4 Bedroom House for sale in Cupang, Metro Manila",
		link: "https://www.dotproperty.com.ph/ads/4-bedroom-house-for-sale-in-cupang-metro-manila_6df9e12f5cbe-1680-d552-1998-89964089",
		thumbnail:
			"https://pix.dotproperty.co.th/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTUzMDAxLTEwMDgtNzQ0Yy05MTM4LWJlZDRhNzhiMGFjMy8wMTk1MzAwMS1lNjNlLTcxNmQtOTNkZS03ZmNiZWYwZGI5OWEuanBnIiwiYnJhbmQiOiJkb3Rwcm9wZXJ0eSIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbCwicmVzaXplIjp7IndpZHRoIjo0OTAsImhlaWdodCI6MzI1LCJmaXQiOiJjb3ZlciJ9fX0=",
	},
	{
		title: "5 Bedroom House for sale in Cadulawan, Cebu",
		link: "https://www.dotproperty.com.ph/ads/5-bedroom-house-for-sale-in-cadulawan-cebu_666cd0456025-7551-d5a8-b3f2-970c8851",
		thumbnail:
			"https://images.proppit.com/properties/8411d920-7a6e-1f4c-8442-4793459cd333/5b24f725-25e7-4b45-8d9e-aa10ebc55fb3.bin",
	},
];
