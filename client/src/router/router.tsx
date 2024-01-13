import { createBrowserRouter } from 'react-router-dom'

import RootView from '../views/RootView';
import ErrorView from '../views/ErrorView';
import HomeView from '../views/HomeView';
import WhoWeAreView from '../views/WhoWeAreView';
import OurProcessView from '../views/OurProcessView';
import PortfolioView from '../views/PortfolioView';
import ContactUsView from '../views/ContactUsView';
import ServicesView from '../views/ServicesView';

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
			{
				path: "/services",
				element: <ServicesView />
			},
			{
				path: "/our-process",
				element: <OurProcessView />
			},
			{
				path: "/portfolio",
				element: <PortfolioView />
			},
			{
				path: "/who-we-are",
				element: <WhoWeAreView />
			},
			{
				path: "/contact-us",
				element: <ContactUsView />
			},
		]
	}
])

export default router;