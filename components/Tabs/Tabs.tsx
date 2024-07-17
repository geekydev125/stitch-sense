"use client"
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import uniqid from 'uniqid'

import services from '@/data/services.json'

import IService from '@/models/Service'

import TabTitle from './TabTitle'
import TabContent from './TabContent'

function Tabs() {
    const searchParams = useSearchParams();
    const tab = searchParams.get('tab')
    const [activeTab, setActiveTab] = useState(getTab(tab))

    function handleTabChange(index: number) {
        setActiveTab(index)
    }

    function getTab(tab: string | null): number {
        switch (tab) {
            case 'design':
                return 0;
            case 'production':
                return 1;
            case 'sublimation':
                return 2;
            case 'sourcing':
                return 3;
            case 'distribution':
                return 4;
            case 'sampling':
                return 5;
            default:
                return 0;
        }
    }

    return (
        <>
            <div className='mt-5 md:mt-0 flex flex-row flex-wrap gap-2 md:gap-0 justify-center md:justify-between md:border-b-[1px] border-darkGreen'>
                {
                    (services as IService[]).map((service, index) => {
                        return (
                            <TabTitle key={uniqid()} service={service} index={index} activeTab={activeTab} handleTabChange={handleTabChange} />
                        )
                    })
                }
            </div>

            <TabContent service={services[activeTab]} />
        </>
    )
}

export default Tabs