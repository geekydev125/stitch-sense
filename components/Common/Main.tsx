
interface Props {
	children: React.ReactNode;
}

function Main({
	children
}: Props) {
	return (
		<main className="bg-[url('/assets/img/wavy-lines-top.svg')] bg-right-top bg-contain bg-no-repeat" >
			<div className="py-5 md:py-10 bg-[url('/assets/img/wavy-lines-bottom.svg')] bg-left-bottom bg-contain bg-no-repeat">
				{children}
			</div>
		</main>
	)
}

export default Main