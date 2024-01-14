import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

interface Props {
	images: {
		img: string;
		title: string;
	}[] | []
}

export default function MasonryImageList({
	images
}:Props) {
	return (
		<Box sx={{ width: '100%', height: 620, overflowY: 'scroll' }}>
			<ImageList variant="masonry" cols={2} gap={8}>
				{	images.map((image) => (
					<ImageListItem key={image.img}>
						<img
							srcSet={`${image.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
							src={`${image.img}?w=248&fit=crop&auto=format`}
							alt={image.title}
							loading="lazy"
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	);
}

