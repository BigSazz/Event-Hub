import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function OpenRootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-1 pt-10">{children}</main>
			<Footer />
		</div>
	);
}
