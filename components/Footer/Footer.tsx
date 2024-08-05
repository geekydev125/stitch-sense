import BottomFooter from "./BottomFooter"
import TopFooter from "./TopFooter"

function Footer() {
	return (
		<footer
			style={{
				filter: "drop-shadow(0 -20px 13px rgb(0 0 0 / 0.07)) drop-shadow(0 -8px 5px rgb(0 0 0 / 0.09))"
			}}
		>
			<TopFooter />

			<BottomFooter />
		</footer>
	)
}

export default Footer