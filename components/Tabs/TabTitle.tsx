import IService from "@/models/Service"

interface Props {
    service: IService,
    index: number,
    activeTab: number,
    handleTabChange: (index: number) => void
}

function TabTitle({
    service,
    index,
    activeTab,
    handleTabChange
}: Props) {
    return (
        <>
            <a
                role="tab"
                onClick={() => handleTabChange(index)}
                className={`tab text-lg md:text-xl lg:text-2xl md:h-14 md:px-2 lg:px-4 xl:px-7 rounded-full md:rounded-b-none md:rounded-t-box 
                ${index === activeTab ? 'bg-darkGreen text-white' : 'bg-light'}
                 hover:bg-primary hover:text-white`}
            >
                {service.title}
            </a>
        </>
    )
}

export default TabTitle