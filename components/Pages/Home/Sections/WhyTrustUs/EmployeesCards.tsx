import uniqid from 'uniqid'

import employeesImpactData from '@/data/employeesImpact.json'

import { IImpact } from '@/types/types'

import ImpactCard from "@/components/Cards/ImpactCard/ImpactCard"
import ClientEmployeesCardsWrapper from "./ClientEmployeesCardsWrapper"

function EmployeesCards() {
    return (
        <ClientEmployeesCardsWrapper>
            {
                (employeesImpactData as IImpact[]).map((card) => (
                    <ImpactCard key={uniqid()} card={card} />
                ))
            }


        </ClientEmployeesCardsWrapper>
    )
}

export default EmployeesCards