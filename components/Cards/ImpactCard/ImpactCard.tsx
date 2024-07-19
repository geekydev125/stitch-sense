import { IClientImpact, IImpact } from "@/types/types"

interface Props {
	card: IClientImpact | IImpact
}

function ImpactCard({
	card
}: Props) {
	return (
		<div className={`card bg-light border-[1px] border-dark w-full shadow-xl ${!(card as IClientImpact).icon ? 'rounded-[40px] md:rounded-[40px]' : ''}`}>
			<div className="card-body p-4 text-sm md:text-base md:px-6 py-1 items-center justify-between h-full">

				<h4 className="card-title my-1 md:mb-0 text-2xl sm:text-xl md:text-2xl lg:text-3xl font-normal text-center sm:min-h-[72px]">{card.title}</h4>

				{
					(card as IClientImpact).icon && (
						<img src={`/assets/img/icons/${(card as IClientImpact).icon}`} alt={(card as IClientImpact).alt} className="max-h-[90px] md:max-h-[104px]mb-3" />
					)
				}

				<p className="text-justify mb-2">{card.content}</p>
			</div>
		</div>
	)
}

export default ImpactCard