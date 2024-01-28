import { Link as RouterLink } from 'react-router-dom'

import GreenButton, { IGreenButton } from './GreenButton'

interface Props extends IGreenButton{
	linkTo: string
}

function GreenButtonWithLink({
	type,
	disabled,
	variant = 'text',
	children,
	boxShadow,
	size = "medium",
	linkTo
}: Props) {

	return (
		<RouterLink to={`/${linkTo}`}>
			<GreenButton
				type={type}
				variant={variant}
				disabled={disabled}
				size={size}
				boxShadow={boxShadow}
			>
				{children}
			</GreenButton>
		</RouterLink>
	)
}

export default GreenButtonWithLink