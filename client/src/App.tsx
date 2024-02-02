import "./App.css";

import router from "./router/router";

import theme from "./theme/theme";

import { RouterProvider } from "react-router-dom";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { ServiceTabsProvider } from "./contexts/ServiceTabsContext";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import { HelmetProvider } from "react-helmet-async";


function App() {
    return (
        <>
            <HelmetProvider>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    <ServiceTabsProvider>
                        <RouterProvider router={router} />
                    </ServiceTabsProvider>
                </ThemeProvider>
           </HelmetProvider>
        </>
    );
}

export default App;
