'use client';

import { AlbumSlider } from "./AlbumSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

import { SectionHeader } from "../events/SectionHeader";

import { AlbumsData } from "../../../public/data/albums";

export const Albums = () => {
	const albums = AlbumsData;

	return (
		<section id='discography'>
			<div className="container mx-auto">
				<SectionHeader pretitle="Discography" title="Popular Albums" />
				{/* album slider */}
				<motion.div
					variants={fadeIn('up', 0.4)}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: false, amount: 0.3 }}
				>
					<AlbumSlider albums={albums} />
				</motion.div>
			</div>
		</section>
	)
}
