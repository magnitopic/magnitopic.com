import "./globals.css";

export const metadata = {
	title: {
		template: '%s | Test',
		default: 'Test',
	},
	description: 'Main home page of the Test.com webpage',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				{children}
			</body>
		</html>
	);
}
