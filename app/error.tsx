"use client"
import Image from 'next/image'
import Header from "@/components/Header/Header"
import Link from 'next/link'
import BottomFooter from '@/components/Footer/BottomFooter'

interface Props {
    error: Error
    reset: any
}

function ErrorPage({
    error,
    reset
}: Props) {
    return (
        <>
            <Header />

            <section className="container flex-grow flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-10 ">

                <div className="h-[90px] w-[90px] sm:h-[110px] sm:w-[110px] relative">
                    <Image src="/assets/img/logos/stitchSense-black-broken-logo.png" alt="Stitch Sense Logo" fill />
                </div>

                <div className="flex flex-col text-center gap-y-2">
                    <h4 className="text-2xl sm:text-3xl">StitchSense detected the following error:</h4>

                    <p className="text-lg sm:text-2xl  mb-2 text-error bg-light rounded-md p-2">{error.message}</p>

                    <div className='flex justify-around max-w-[300px] mx-auto gap-x-16'>
                        <button onClick={() => reset()} className="text-darkGreen font-bold uppercase text-xl">Try Again</button>
                        <Link href="/" className="text-darkGreen font-bold uppercase text-xl">Go home</Link>
                    </div>
                </div>

            </section>

            <BottomFooter />
        </>
    )
}

export default ErrorPage