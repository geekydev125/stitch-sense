import { createContext, useContext, useState } from "react";

const ServiceTabsContext = createContext<object | null>(null);

interface Props {
    children: React.ReactNode
}

export const ServiceTabsProvider = ({
    children
}:Props) => {
    const [tabIndex, setTabIndex] = useState<number>(0);

    const changeTabIndex = (newIndex: number) => {
        setTabIndex(newIndex)
    }
    
    return (
        <ServiceTabsContext.Provider value={{tabIndex, changeTabIndex}}>
            {children}
        </ServiceTabsContext.Provider>
    )
}

export const useServiceTabsContext = () => {
    const serviceTabsState = useContext(ServiceTabsContext);

    return serviceTabsState
}