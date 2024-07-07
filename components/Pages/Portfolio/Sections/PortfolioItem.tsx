import { IPortfolioItem } from "@/types/types"

interface Props {
	item: IPortfolioItem
}

function PortfolioItem({
	item
}: Props) {
	return (
		<div className='col-span-6 md:col-span-3 relative overflow-hidden flex justify-center'>
			<img src={`/assets/img/portfolio/${item.image}`} alt={item.title} className='hover:scale-110 transform duration-300' />
		</div>
	)
}

export default PortfolioItem