import {createBrowserRouter} from 'react-router-dom'

import RootView from '../views/RootView';
import ErrorView from '../views/ErrorView';

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootView />,
        errorElement: <ErrorView />,
        children: [
            
        ]
    }
])

export default router;