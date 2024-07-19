"use client"
import { useEffect, useState } from "react"
import SplashScreen from "./SplashScreen"

interface Props {
    children: React.ReactNode
}

function SplashScreenManager({
    children
}: Props) {
    const [showSplash, setShowSplash] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => setShowSplash(false), 1500)

        return () => clearTimeout(timeout)
    }, [])

    return showSplash ? <SplashScreen /> : children;
}

export default SplashScreenManager