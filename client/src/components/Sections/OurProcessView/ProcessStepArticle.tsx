import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import SectionTitle from "../../SectionTitle"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { IStepArticle } from "../../../views/OurProcessView"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import getImageUrl from "../../../utils/image-util"

interface Props extends IStepArticle {

}
function ProcessArticleCard({
	title,
	content,
	step,
	imageSrc,
	contentOrder
}:Props) {
	const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
	
	return (
		<Grid container spacing={2} >
			<Grid item xs={12} sm={6} md={7} order={!isXs ? contentOrder === 'left' ? 1 : 2 : 1}>
				<Stack direction='row' justifyContent='space-between' alignItems='center'>
					<SectionTitle title={title} variant="h4" />
					<Typography variant="h3" component='p' color='custom.theme.darkGray' pr={2}>{step}</Typography>
				</Stack>

				<Typography variant="body1" component='p' color='custom.theme.darkGray' textAlign='justify'>{content}</Typography>
			</Grid>
			<Grid item xs={12} sm={6} md={5} order={ !isXs ? contentOrder === 'right' ? 1 : 2 : 2}>
				<Box component='img' src={ getImageUrl(null, imageSrc) } alt={`${title} image`} sx={{ width: '100%' }} />
			</Grid>
		</Grid>
	)
}

export default ProcessArticleCard