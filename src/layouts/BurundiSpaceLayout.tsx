import { NavLink, Outlet } from 'react-router-dom'
import BurundiSpaceHeader from '../components/BurundiSpaceHeader'

const tabs = [
	{ to: '/burundispace', label: 'Decouvrir', end: true },
	{ to: '/histoire', label: 'Histoire' },
	{ to: '/galerie/contemporain', label: 'Art' },
	{ to: '/archives', label: 'Archive' }
]

export default function BurundiSpaceLayout() {
	return (
		<div className="min-h-screen bg-white">
			{/* Header Section */}
			<BurundiSpaceHeader />

			{/* Navigation Tabs */}
			<div className="bg-white border-b border-gray-100 sticky top-0 z-30">
				<div className="max-w-7xl mx-auto px-4 md:px-20 py-6">
					<h2 className="text-5xl font-bold mb-6">History</h2>
					<div className="flex flex-wrap gap-2">
						{tabs.map(tab => (
							<NavLink
								key={tab.to}
								to={tab.to}
								className={({ isActive }) =>
									`px-6 py-2 rounded-full text-sm font-medium transition-colors ${isActive
										? 'bg-black text-white'
										: 'bg-[#e5e5e5] text-black hover:bg-[#d5d5d5]'
									}`
								}
							>
								{tab.label}
							</NavLink>
						))}
					</div>
				</div>
			</div>

			<Outlet />
		</div>
	)
}


