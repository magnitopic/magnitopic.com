import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
	title: {
		template: "%s | Magnitopic",
		default: "Magnitopic",
	},
	description: "Main home page of the magnitopic.com webpage",};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body suppressHydrationWarning>
				<Header />
				<div id="main-content" tabIndex={-1}>
					{children}
				</div>
				<Footer />
			</body>
		</html>
	);
}
