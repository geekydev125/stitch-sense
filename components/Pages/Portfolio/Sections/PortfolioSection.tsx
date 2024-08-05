import uniqid from 'uniqid'

import portfolio from '@/data/portfolio.json'

import { IPortfolioItem } from '@/types/types'
import PortfolioItem from './PortfolioItem'

function PortfolioSection() {
    return (
        <section className="container">
            <div className='grid grid-cols-12 gap-1 lg:gap-2'>
                {
                    (portfolio as IPortfolioItem[]).map((portfolioItem) => (
                       <PortfolioItem key={uniqid()} item={portfolioItem}/>
                    ))
                }
            </div>
        </section>
    )
}

export default PortfolioSection