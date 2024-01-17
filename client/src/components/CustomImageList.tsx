import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import uniqid from 'uniqid';

interface Props {
	images: {
		imageSrc: string;
		title: string;
	}[] | [],
	variant: 'standard' | 'woven' | 'masonry',
	cols: number,
	gap: number
}

export default function CustomImageList({
	images,
	variant,
	cols,
	gap
}:Props) {
	return (
		<Box sx={{ width: '100%', height: 620, overflowY: 'scroll' }}>
			<ImageList variant={variant} cols={cols} gap={gap}>
				{	images.map((image) => (
					<ImageListItem key={uniqid()}>
						<img
							srcSet={`${image.imageSrc}?w=248&fit=crop&auto=format&dpr=2 2x`}
							src={`${image.imageSrc}?w=248&fit=crop&auto=format`}
							alt={image.title}
							loading="lazy"
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	);
}

