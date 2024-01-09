import { useTheme } from "@mui/system";

function RootView() {
	const theme = useTheme();

    return (
        <div
            style={{
                color: theme.palette.main.lightGreen,
            }}
        >
            RootView
        </div>
    );
}

export default RootView;
