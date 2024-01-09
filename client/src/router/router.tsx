import {createBrowserRouter} from 'react-router-dom'

import RootView from '../views/RootView';
import ErrorView from '../views/ErrorView';
import HomeView from '../views/HomeView';

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootView />,
        errorElement: <ErrorView />,
        children: [
            {
				index: true,
				element: <HomeView />
			},
        ]
    }
])

export default router;