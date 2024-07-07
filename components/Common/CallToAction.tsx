import Button from "../Pages/Common/Buttons/Button"

function CallToAction() {
    return (
        <section className="container mb-5">
            <p className="text-justify md:text-center px-2 lg:px-20">Elevate your fashion brand with StitchSense – revolutionize your designs, streamline your production, and bring your vision to life. Take the next step in crafting excellence, and experience the power of StitchSense for a seamless journey in the world of fashion.</p>

            <div className="flex flex-row justify-around items-center mt-5">
                <img src="/assets/img/arrows-divider/arrow-wavy.png" alt="Arrow" className="hidden sm:block" />

                <Button href="/contact" className="btn">Let's Get Started</Button>

                <img src="/assets/img/arrows-divider/arrow-wavy.png" alt="Arrow" className="transform scale-x-[-1]" />
            </div>
        </section>
    )
}

export default CallToAction