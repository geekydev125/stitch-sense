"use client"
import { Fragment, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import uniqid from 'uniqid'

import services from '@/data/services.json'

import IService from '@/models/Service'

import TabTitle from '@/components/Tabs/TabTitle'
import TabContent from '@/components/Tabs/TabContent'

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
                return 1;
            case 'production':
                return 2;
            case 'sublimation':
                return 3;
            case 'sourcing':
                return 4;
            case 'distribution':
                return 5;
            case 'sampling':
                return 6;
            default:
                return 1;
        }
    }

    return (
        <div role="tablist" className="tabs tabs-lg lg:grid-cols-6">
            {
                (services as IService[]).map((service, index) => {
                    return (
                        <Fragment key={uniqid()}>
                            <TabTitle service={service} index={index} activeTab={activeTab} handleTabChange={handleTabChange}/>
                            <TabContent service={service} />
                        </Fragment>
                    )
                })
            }
        </div>
    )
}

export default Tabs