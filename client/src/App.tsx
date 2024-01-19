import "./App.css";

import { RouterProvider } from "react-router-dom";
import router from "./router/router";

import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";

import { CssBaseline } from "@mui/material";
import { ServiceTabsProvider } from "./contexts/ServiceTabsContext";

function App() {
    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <ServiceTabsProvider>
                    <RouterProvider router={router} />
                </ServiceTabsProvider>
            </ThemeProvider>
        </>
    );
}

export default App;
