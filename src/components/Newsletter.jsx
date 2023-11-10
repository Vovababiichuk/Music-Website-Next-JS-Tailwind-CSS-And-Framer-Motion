'use client'

import { SectionHeader } from "./events/SectionHeader"
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

export const Newsletter = () => {
	return (
		<section
			id='contact'
			className="bg-newsletter bg-fixed h-[480px] section bg-cover w-full bg-center bg-no-repeat"
		>
			<div className="container mx-auto h-full">
				<div className="flex flex-col h-full items-center justify-center">
					{/* text */}
					<SectionHeader
						pretitle='Get in touch'
						title='Sign up to our newsletter'
					/>
					{/* input */}
					<motion.div
					
					className="relative flex items-center w-full max-w-xl"
					>
						<input type='text' placeholder='Email address' className="w-full h-[64px] outline-none rounded-full bg-primary/60 backdrop-blur-[15px] px-8" />
						<button type="submit" className="bg-accent absolute right-2 h-[46px] rounded-full text-[15px] hover:bg-accent-hover transition-all px-6">Subscribe</button>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
