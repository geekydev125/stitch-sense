import { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import { ServiceTabsProvider } from "./contexts/ServiceTabsContext";

import "./App.css";

import { disableReactDevTools } from "@fvilers/disable-react-devtools";

import router from "./router/router";
import theme from "./theme/theme";

import Loader from "./components/Loader";

if(process.env.NODE_ENV === 'production') disableReactDevTools();

function App() {
    return (
        <>
            <HelmetProvider>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    <ServiceTabsProvider>
                        <Suspense fallback={<Loader />}>
                            <RouterProvider router={router} />
                        </Suspense>
                    </ServiceTabsProvider>
                </ThemeProvider>
            </HelmetProvider>
        </>
    );
}

export default App;
