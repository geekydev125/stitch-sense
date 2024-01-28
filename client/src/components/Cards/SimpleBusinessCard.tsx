import getImageUrl from "../../utils/image-util"

import { Icard } from "../Sections/HomeView/WhyTrustUsSection"

import Card from "@mui/material/Card"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"


interface Props extends Icard {
}
function SimpleBusinessCard({
	title,
	content,
	imageSrc,
	alt,
	variant,
}: Props) {
	return (
		<Paper sx={{ borderRadius: '20px' }} elevation={6}>
			<Card
				sx={{
					minHeight: {
						xs: 'auto',
						md: '530px',
						lg: '430px'
					},
					backgroundColor: variant === 'light' ? 'custom.theme.almostWhite' : 'custom.theme.darkGray',
					borderRadius: '20px',
					border: '2px solid',
					borderColor: variant === 'light' ? 'custom.theme.darkGray' : 'custom.theme.almostWhite',
				}}
				elevation={0}
			>
				<Box p={2}>
					<Typography
						variant='h4'
						component='h4'
						textAlign='center'
						textTransform='uppercase'
						sx={{
							color: variant === 'light' ? 'custom.theme.darkGray' : 'custom.theme.almostWhite',
						}}
					>
						{title}
					</Typography>

					<Stack sx={{ width: '100%', height: { xs: '80px', md: '120px'} }} p={1} mt={{xs: 0, md: 2}} justifyContent='center' alignItems='center'>
						<Box component={'img'} src={ getImageUrl('icons', imageSrc as string)} alt={alt} height="100%" />
					</Stack>

					<Typography
						variant='body1'
						component='p'
						textAlign='justify'
						mt={{ xs: 1, md: 3 }}
						sx={{ color: variant === 'light' ? 'custom.theme.darkGray' : 'custom.theme.almostWhite' }}
					>
						{content}
					</Typography>
				</Box>
			</Card>
		</Paper>
	)
}

export default SimpleBusinessCard