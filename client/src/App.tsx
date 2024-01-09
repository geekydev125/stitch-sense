import "./App.css";

import { RouterProvider } from "react-router-dom";
import router from "./router/router";

import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";

import { CssBaseline } from "@mui/material";

function App() {
    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </>
    );
}

export default App;
