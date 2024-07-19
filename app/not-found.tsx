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
					<h4 className="text-2xl sm:text-3xl">Oops... 404 error</h4>

					<p className="text-lg sm:text-2xl mb-2 text-error bg-light rounded-md p-2">StitchSense does not recognize this page.</p>

					<Link href="/" className="text-darkGreen font-bold uppercase text-xl">Go home</Link>
				</div>

			</section>

			<BottomFooter />
		</>
	)
}

export default NotFoundPage