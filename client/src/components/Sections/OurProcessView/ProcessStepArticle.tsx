import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import SectionTitle from "../../SectionTitle"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { IStepArticle } from "../../../views/OurProcessView"

interface Props extends IStepArticle {

}
function ProcessArticleCard({
	title,
	content,
	step,
	imageSrc,
	contentOrder
}:Props) {
	return (
		<Grid container spacing={2} >
			<Grid item xs={12} md={7} order={contentOrder === 'left' ? 1 : 2}>
				<Stack direction='row' justifyContent='space-between' alignItems='center'>
					<SectionTitle title={title} variant="h4" />
					<Typography variant="h3" component='p' color='custom.theme.darkGray'>{step}</Typography>
				</Stack>

				<Typography variant="body1" component='p' color='custom.theme.darkGray' textAlign='justify'>{content}</Typography>
			</Grid>
			<Grid item xs={12} md={5} order={contentOrder === 'right' ? 1 : 2}>
				<Box component='img' src={`/src/assets/img/${imageSrc}`} alt={`${title} image`} sx={{ width: '100%' }} />
			</Grid>
		</Grid>
	)
}

export default ProcessArticleCard