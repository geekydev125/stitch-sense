import { createContext, useContext, useState } from "react";

interface IServiceTabsContext {
    activeTabIndex: number
    changeActiveTab: (newIndex: number) => void
}

const ServiceTabsContext = createContext({} as IServiceTabsContext);

interface Props {
    children: React.ReactNode
}

export const ServiceTabsProvider = ({
    children
}:Props) => {
    const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

    const changeActiveTab = (newIndex: number) => {
        setActiveTabIndex(newIndex)
    }
    
    return (
        <ServiceTabsContext.Provider value={{activeTabIndex, changeActiveTab}}>
            {children}
        </ServiceTabsContext.Provider>
    )
}

export const useServiceTabsContext = () => {
    const serviceTabsState = useContext(ServiceTabsContext);

    return serviceTabsState
}