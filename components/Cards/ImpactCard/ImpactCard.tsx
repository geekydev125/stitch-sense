import { IClientImpact, IImpact } from "@/types/types"

interface Props {
	card: IClientImpact | IImpact
}

function ImpactCard({
	card
}: Props) {
	return (
		<div className={`card bg-light border-[1px] border-dark w-96 shadow-xl ${!(card as IClientImpact).icon ? 'rounded-[50px]' : ''}`}>
			<div className="card-body p-4 text-sm md:text-base md:px-6 py-1 items-center justify-between h-full">

				<h4 className="card-title my-1 md:mb-0 text-2xl md:text-3xl font-normal text-center min-h-[72px]">{card.title}</h4>

				{
					(card as IClientImpact).icon && (
						<img src={`/assets/img/icons/${(card as IClientImpact).icon}`} alt={(card as IClientImpact).alt} className="max-h-[104px] mb-3" />
					)
				}

				<p className="text-justify mb-2 md:mb-0">{card.content}</p>
			</div>
		</div>
	)
}

export default ImpactCard