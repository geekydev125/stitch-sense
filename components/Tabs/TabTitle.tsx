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
        <input
            type="radio"
            name="service-tabs"
            role="tab"
            onClick={() => handleTabChange(index + 1)}
            defaultChecked={index + 1 === activeTab}
            className={`tab text-2xl mx-1 h-14 rounded-t-box ${index + 1 === activeTab ? 'bg-primary text-white': 'bg-light'} hover:bg-primary hover:text-white`}
            aria-label={service.title}
        />
    )
}

export default TabTitle