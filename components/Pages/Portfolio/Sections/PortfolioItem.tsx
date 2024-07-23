import Image from 'next/image'
import { IPortfolioItem } from "@/types/types"

interface Props {
	item: IPortfolioItem
}

function PortfolioItem({
	item
}: Props) {
	return (
		<div className='col-span-6 md:col-span-3 relative overflow-hidden flex justify-center'>
			<Image
				src={`/assets/img/portfolio/${item.image}`}
				alt={item.title} className='hover:scale-105 transform duration-300'
				width={274}
				height={411}
			/>
		</div>
	)
}

export default PortfolioItem