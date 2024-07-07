"use client"
import { Fragment, useState } from 'react'
import uniqid from 'uniqid'

import services from '@/data/services.json'

import IService from '@/models/Service'

import TabTitle from '@/components/Tabs/TabTitle'
import TabContent from '@/components/Tabs/TabContent'

function Tabs() {
    const [activeTab, setActiveTab] = useState(1)

    function handleTabChange(index: number) {
        setActiveTab(index)
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