import Image from "next/image";
import Link from "next/link";

import BottomFooter from "@/components/Footer/BottomFooter";
import Header from "@/components/Header/Header";

function NotFoundPage() {
	return (
		<>
			<Header />

			<section className="container flex-grow flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-10 ">

				<div className="h-[110px] w-[110px] relative">
					<Image src="/assets/img/logos/stitchSense-black-broken-logo.png" alt="Stitch Sense Logo" fill />
				</div>

				<div className="flex flex-col text-center gap-y-2">
					<h4 className="text-4xl sm:text-5xl mb-2">Oops... 404 Error</h4>

					<p className="sm:text-lg mb-2"><span className="font-bold">StitchSense</span> does not recognize this page.</p>

					<Link href="/" className="text-darkGreen font-bold uppercase text-xl">Click here to go home</Link>
				</div>

			</section>

			<BottomFooter />
		</>
	)
}

export default NotFoundPage