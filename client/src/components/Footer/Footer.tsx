import Box from "@mui/material/Box"
import BottomFooter from "./BottomFooter"
import TopFooter from "./TopFooter"

function Footer() {
	return (
		<Box component="footer" sx={{zIndex: 9}}>
			<TopFooter />
			<BottomFooter />
		</Box>
    
  )
}

export default Footer