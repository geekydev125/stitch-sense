import NextTopLoader from 'nextjs-toploader'
import SplashScreenManager from '../SplashScreen/SplashScreenManager'
import ScrollRestoration from './ScrollRestoration'

interface Props {
    children: React.ReactNode
}

function RootLayoutWrapper({
    children
}: Props) {
    return (
        <html lang="en" className='text-[15px] md:text-[16px]'>
            <ScrollRestoration />

            <body className='flex flex-col min-h-[100vh]'>
                <NextTopLoader
                    color="#35908d"
                    height={3}
                    initialPosition={0.08}
                    crawlSpeed={200}
                    crawl={true}
                    showSpinner={false}
                    easing="ease"
                    speed={200}
                />

                <SplashScreenManager>
                    {children}
                </SplashScreenManager>
            </body>
        </html>
    )
}

export default RootLayoutWrapper