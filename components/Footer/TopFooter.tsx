import Map from '../Map/Map'

function TopFooter() {
    return (
        <section className='bg-black'>
            <div className='container !max-w-[1300px] !pr-0 !pl-0'>
                <div className='flex flex-col md:flex-row items-center gap-5'>

                    <div className='md:pl-3 lg:pl-0 py-10 flex flex-col gap-3 text-nowrap'>
                        <h4 className='uppercase text-primary text-4xl'>Let's Work together!</h4>

                        <div className='lg:pl-2'>
                            <h5 className='text-white text-3xl font-bold mb-1'>Contact Details:</h5>
                            <p className='text-white text-lg'>Name:&nbsp;<span className='text-primary'>Ganimir Vangelov (Sales Director)</span></p>
                            <p className='text-white text-lg'>Email:&nbsp;<span className='text-primary'>ganimir@badinka.com</span></p>
                        </div>

                        <div className='lg:pl-2'>
                            <h5 className='text-white text-3xl font-bold mb-1'>Location:</h5>
                            <p className='text-primary text-lg'>280 Tsarigradski Complex,</p>
                            <p className='text-primary text-lg'>Sofia, Bulgaria</p>
                        </div>
                    </div>

                    <div className="h-[300px] md:h-[340px] overflow-hidden w-full relative before:bg-no-repeat before:h-full before:md:bg-[url('/assets/img/black-fade.png')]   before:bg-contain before:md:w-[22%] before:absolute before:z-[1]">
                        <Map />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopFooter