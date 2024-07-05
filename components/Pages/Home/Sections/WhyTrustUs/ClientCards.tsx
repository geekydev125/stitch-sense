import uniqid from 'uniqid'

import ImpactCard from '@/components/Cards/ImpactCard/ImpactCard'
import clientImpactData from '@/data/clientImpact.json'

import { IClientImpact } from '@/types/types'
import ClientEmployeesCardsWrapper from './ClientEmployeesCardsWrapper'

function ClientCards() {
    return (
        <ClientEmployeesCardsWrapper>
            {
                (clientImpactData as IClientImpact[]).map((card) => (
                    <ImpactCard key={uniqid()} card={card} />
                ))
            }
        </ClientEmployeesCardsWrapper>
    )
}

export default ClientCards