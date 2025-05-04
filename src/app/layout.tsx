import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
// 	variable: "--font-geist-sans",
// 	subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
// 	variable: "--font-geist-mono",
// 	subsets: ["latin"],
// });

export const metadata: Metadata = {
	title: "Jefferson R.",
	icons: {
		icon: "/logo.png",
	},
	description: "Jefferson Resuena - Web Developer Portfolio",
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 1,
		minimumScale: 1,
		userScalable: false,
	},
	themeColor: "#263F3D",
	appleWebApp: {
		title: "Jefferson R.",
		statusBarStyle: "black-translucent",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased">{children}</body>
		</html>
	);
}
