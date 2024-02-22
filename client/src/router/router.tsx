import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom'

import ErrorView from '../views/ErrorView';

const LazyRootView = lazy(() => import('../views/RootView'));

const LazyHomeView = lazy(() => import('../views/HomeView'));
const LazyAboutView = lazy(() => import('../views/AboutView'));
// const LazyOurProcessView = lazy(() => import('../views/OurProcessView'));
const LazyPortfolioView = lazy(() => import('../views/PortfolioView'));
const LazyContactUsView = lazy(() => import('../views/ContactUsView'));
const LazyServicesView = lazy(() => import('../views/ServicesView'));

const router = createBrowserRouter([
	{
		path: "/",
		element: <LazyRootView />,
		errorElement: <ErrorView />,
		children: [
			{
				index: true,
				element: <LazyHomeView />
			},
			{
				path: "/services",
				element:<LazyServicesView />
			},
			// {
			// 	path: "/our-process",
			// 	element: <LazyOurProcessView />
			// 		
			// 	
			// },
			{
				path: "/portfolio",
				element:<LazyPortfolioView />
			},
			{
				path: "/about-us",
				element:<LazyAboutView />
			},
			{
				path: "/contact-us",
				element:<LazyContactUsView />
			},
		]
	}
])

export default router;