import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "Aniket | Portofolio",

    description:
		"My name is Aniket Chaturvedi, I'm a web developer and I'm passionate about it. I'm currently studying at Oriental institute of Science and Technology.",

    author: "Aniket Chaturvedi",
    siteUrl: "",
    applicationName: "Aniket",

    keywords: [
		"aniket",
		"anikets",
		"aniket chaturvedi",
		"aniket porto",
	],

    openGraph: {
		type: "website",
		url: "https://www.aniket.my.id",
		title: "Aniket | Portofolio",
		site_name: "Aniket | Portofolio",
		description: "My name is Aniket, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Aniket Portofolio",
			},
		],
		site_name: "Aniket | Portofolio",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
