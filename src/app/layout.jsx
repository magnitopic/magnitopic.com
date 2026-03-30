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
			<body className="bg-[#0C071E] text-white" suppressHydrationWarning>
				{/* Skip link — visible on keyboard focus, hidden otherwise */}
				<a href="#main-content" className="skip-link">
					Skip to main content
				</a>
				<Header />
				<div id="main-content" tabIndex={-1}>
					{children}
				</div>
			</body>
		</html>
	);
}
