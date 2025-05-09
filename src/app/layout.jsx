import "./globals.css";
import Header from "../components/Header";

export const metadata = {
	title: {
		template: "%s | Magnitopic",
		default: "Magnitopic",
	},
	description: "Main home page of the magnitopic.com webpage",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="bg-[#0C071E] text-white">
				<Header />
				{children}
			</body>
		</html>
	);
}
