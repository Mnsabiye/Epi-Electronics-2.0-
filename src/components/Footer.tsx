import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
	return (
		<footer className="bg-[#f5f5f7] text-[#1d1d1f] text-xs">
			<div className="container-xl py-12">
				<div className="border-b border-[#d2d2d7] pb-8 mb-8">
					<p className="text-[#1d1d1f]/60 max-w-4xl">
						1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase.
					</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
					{/* Histoire */}
					<div>
						<h3 className="font-semibold mb-3 text-[#1d1d1f]">Histoire</h3>
						<ul className="space-y-2 text-[#1d1d1f]/70">
							<li><Link to="/histoire" className="hover:underline">Ligne de temps</Link></li>
							<li><Link to="/histoire" className="hover:underline">Rois et Président</Link></li>
							<li><Link to="/histoire" className="hover:underline">Autres type de tris</Link></li>
							<li><Link to="/" className="hover:underline">Footer</Link></li>
						</ul>
					</div>

					{/* Galery */}
					<div>
						<h3 className="font-semibold mb-3 text-[#1d1d1f]">Galery</h3>
						<ul className="space-y-2 text-[#1d1d1f]/70">
							<li><Link to="/galerie" className="hover:underline">Art contemporaint</Link></li>
							<li><Link to="/galerie" className="hover:underline">Art Moderne</Link></li>
							<li><Link to="/galerie" className="hover:underline">Tout voir</Link></li>
						</ul>
					</div>

					{/* Archives */}
					<div>
						<h3 className="font-semibold mb-3 text-[#1d1d1f]">Archives</h3>
						<ul className="space-y-2 text-[#1d1d1f]/70">
							<li><Link to="/archives" className="hover:underline">Rois et président</Link></li>
							<li><Link to="/archives" className="hover:underline">Contes et autres types d'écris</Link></li>
							<li><Link to="/archives" className="hover:underline">Objet traditionnel</Link></li>
							<li><Link to="/archives" className="hover:underline">Evénement marquant</Link></li>
							<li><Link to="/archives" className="hover:underline">Chant et autres types d'audio</Link></li>
							<li><Link to="/archives" className="hover:underline">Vidéo de danse</Link></li>
						</ul>
					</div>

					{/* Artiste */}
					<div>
						<h3 className="font-semibold mb-3 text-[#1d1d1f]">Artiste</h3>
						<ul className="space-y-2 text-[#1d1d1f]/70">
							<li><Link to="/artistes" className="hover:underline">Sculpteur</Link></li>
							<li><Link to="/artistes" className="hover:underline">Musicien</Link></li>
							<li><Link to="/artistes" className="hover:underline">Ecrivains</Link></li>
							<li><Link to="/artistes" className="hover:underline">Designer</Link></li>
							<li><Link to="/artistes" className="hover:underline">Photographe</Link></li>
							<li><Link to="/artistes" className="hover:underline">Paintre</Link></li>
							<li><Link to="/artistes" className="hover:underline">Danseur</Link></li>
							<li><Link to="/artistes" className="hover:underline">Chanteur</Link></li>
						</ul>
					</div>
				</div>

				<div className="border-t border-[#d2d2d7] pt-8">
					<p className="mb-4 text-[#1d1d1f]/60">
						This site offers a great browsing experience, design is how it works.
					</p>
					<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#1d1d1f]/60">
						<p>Copyright © {new Date().getFullYear()} Creo. All rights reserved.</p>
						<div className="flex gap-6">
							<Link to="#" className="hover:underline">Privacy Policy</Link>
							<Link to="#" className="hover:underline">Terms of Use</Link>
							<Link to="#" className="hover:underline">Sales and Refunds</Link>
							<Link to="#" className="hover:underline">Legal</Link>
							<Link to="#" className="hover:underline">Site Map</Link>
						</div>
						<p>Burundi</p>
					</div>
				</div>
			</div>
		</footer>
	)
}



