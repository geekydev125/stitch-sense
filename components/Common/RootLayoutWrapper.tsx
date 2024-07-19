import NextTopLoader from 'nextjs-toploader'
import Footer from '../Footer/Footer'

interface Props {
    children: React.ReactNode
}

function RootLayoutWrapper({
    children
}: Props) {
    return (
        <html lang="en">
            <body>
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

                {children}

                <Footer />
            </body>
        </html>
    )
}

export default RootLayoutWrapper