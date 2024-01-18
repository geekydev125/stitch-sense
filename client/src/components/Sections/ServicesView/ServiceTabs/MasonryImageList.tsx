import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import uniqid from 'uniqid'

interface Props {
	images: {
		title: string,
		imageSrc: string
	}[],
	cols: number,
	gap: number
}

function MasonryImageList({
	images,
	cols,
	gap
}: Props) {
    return (
        <Box sx={{ width: '100%', height: 620, overflowY: 'scroll' }}>
            <ImageList variant="masonry" cols={cols} gap={gap}>
                {images.map((image) => (
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
    )
}

export default MasonryImageList