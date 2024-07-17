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
                className={`tab text-2xl h-14 rounded-t-box px-7
                ${index === activeTab ? 'bg-darkGreen text-white' : 'bg-light'}
                 hover:bg-primary hover:text-white`}
            >
                {service.title}
            </a>
        </>
    )
}

export default TabTitle