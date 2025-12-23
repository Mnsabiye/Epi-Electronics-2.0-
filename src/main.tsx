import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import Home from './pages/Home'
import Artists from './pages/Artists'
import AIGuide from './pages/AIGuide'
import BurundiSpaceLayout from './layouts/BurundiSpaceLayout'
import History from './pages/History'
import Gallery from './pages/Gallery'
import ArchivesHub from './pages/ArchivesHub'
import ArchiveSection from './pages/ArchiveSection'
import ArtistDetail from './pages/ArtistDetail'
import ArtistPortal from './pages/ArtistPortal'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'burundispace', element: <Navigate to="/histoire" replace /> },
			{
				element: <BurundiSpaceLayout />,
				children: [
					{ path: 'histoire', element: <History /> },
					{ path: 'galerie', element: <Navigate to="/galerie/contemporain" replace /> },
					{ path: 'galerie/:category', element: <Gallery /> },
					{ path: 'archives', element: <ArchivesHub /> },
					{ path: 'archives/:section', element: <ArchiveSection /> }
				]
			},
			{ path: 'artistes', element: <Artists /> },
			{ path: 'artistes/:id', element: <ArtistDetail /> },
			{ path: 'artist-portal', element: <ArtistPortal /> },
			{ path: 'ai', element: <AIGuide /> }
		]
	}
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
