import UrlForm from "./components/UrlForm";

import UrlList from "./components/UrlList";
import UrlProvider from "./components/UrlProvider";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import "./globals.css";

import { Nunito } from "next/font/google";

const nunito = Nunito({
	subsets: ["latin"],
	preload: true,
	variable: "--font-nunito",
});

export const metadata = {
	title: "Url Shortener",
	description: "A simple URL-Shortener Service.",
};

export default function Home() {
	return (
		<main className={`${nunito.className} py-8 px-6`}>
			<ToastContainer
				autoClose={6000}
				pauseOnHover
				newestOnTop
				position="top-center"
				closeButton={false}
				hideProgressBar
			/>
			<h1 className="text-theme font-extrabold text-5xl text-center">
				Url Shortner
			</h1>
			<div className="flex max-lg:flex-col max-w-7xl mx-auto py-16  gap-16">
				<UrlProvider>
					<div className="basis-1/3">
						<UrlForm />
					</div>
					<div className="lg:hidden block fc_xy">
						<div className="w-11/12 h-[2px] bg-bl/30" />
					</div>
					<div className="flex-1">
						<UrlList />
					</div>
				</UrlProvider>
			</div>
		</main>
	);
}
