import Image from "next/image"
import Link from "next/link"

function BottomFooter() {
  return (
    <section className="bg-primary py-6">
        <p className="text-white  flex justify-center">
            Powered by&nbsp;
            <Link href="https://www.arielbehar.com/" target="_blank" className="text-dark hover:text-light hover:underline flex">
                Ariel Behar&nbsp;
                <Image src="/assets/img/logos/arielbehar-logo.png" alt="Ariel Behar logo" width={25} height={25} />
            </Link>
        </p>
    </section>
  )
}

export default BottomFooter