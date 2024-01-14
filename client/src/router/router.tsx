import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom'

// import RootView from '../views/RootView';
import ErrorView from '../views/ErrorView';
// import HomeView from '../views/HomeView';
// import AboutView from '../views/AboutView';
// import OurProcessView from '../views/OurProcessView';
// import PortfolioView from '../views/PortfolioView';
// import ContactUsView from '../views/ContactUsView';
// import ServicesView from '../views/ServicesView';

import Loader from '../components/Loader';

const LazyRootView = lazy(() => import('../views/RootView'));

const LazyHomeView = lazy(() => import('../views/HomeView'));
const LazyAboutView = lazy(() => import('../views/AboutView'));
const LazyOurProcessView = lazy(() => import('../views/OurProcessView'));
const LazyPortfolioView = lazy(() => import('../views/PortfolioView'));
const LazyContactUsView = lazy(() => import('../views/ContactUsView'));
const LazyServicesView = lazy(() => import('../views/ServicesView'));

const router = createBrowserRouter([
	{
		path: "/",
		element: <Suspense fallback={<Loader />}>
			<LazyRootView />
		</Suspense>,
		errorElement: <ErrorView />,
		children: [
			{
				index: true,
				element: <Suspense fallback={<Loader />}>
					<LazyHomeView />
				</Suspense>
			},
			{
				path: "/services",
				element: <Suspense fallback={<Loader />}>
					<LazyServicesView />
				</Suspense>
			},
			{
				path: "/our-process",
				element: <Suspense fallback={<Loader />}>
					<LazyOurProcessView />
				</Suspense>
			},
			{
				path: "/portfolio",
				element: <Suspense fallback={<Loader />}>
					<LazyPortfolioView />
				</Suspense>
			},
			{
				path: "/about-us",
				element: <Suspense fallback={<Loader />}>
					<LazyAboutView />
				</Suspense>
			},
			{
				path: "/contact-us",
				element: <Suspense fallback={<Loader />}>
					<LazyContactUsView />
				</Suspense>
			},
		]
	}
])

export default router;