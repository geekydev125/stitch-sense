import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Link from '@mui/material/Link';
import uniqid from 'uniqid';
import getImageUrl from '../../../utils/image-util';

interface Props {
	folder: string,
	images: {
		title: string,
		imageSrc: string
	}[],
	cols: number,
	gap: number
}

export default function StandardImageList({
	folder,
	images,
	cols,
	gap
}: Props) {

	return (
		<Box sx={{
			width: '100%',
			height: 'auto',
			minHeight: {
				xs: '219px',
				sm: '',
				lg: '826px'	
			}
		}}>
			<ImageList variant="standard" cols={cols} gap={gap}>
				{images.map((image) => (
					<Link href='#' target='_blank' key={uniqid()}>
						<ImageListItem>
							<img
								srcSet={ `${getImageUrl(`portfolio/${folder}`, image.imageSrc)}?w=248&fit=crop&auto=format&dpr=2 2x`}
								src={`${getImageUrl(`portfolio/${folder}`, image.imageSrc)}?w=248&fit=crop&auto=format`}
								alt={image.title}
								loading="lazy"
							/>
						</ImageListItem>
					</Link>
				))}
			</ImageList>
		</Box>
	);
}

