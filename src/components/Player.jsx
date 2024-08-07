'use client'

import Image from "next/image"
import { AudioPlayer } from "react-audio-play"
import { motion } from "framer-motion"
import { fadeIn } from '../../variants'


export const Player = () => {
	return (
		<motion.div
		variants={fadeIn('up', 0.1)}
		initial='hidden'
		whileInView={"show"}
		viewport={{ once: false, amount: 0.1 }}
		
		className="bg-gradient-to-r from-tertiary/70 to-primary/10 backdrop-blur-[15px] h-[112px] flex items-center relative z-40">
			<div className="container mx-auto flex flex-col justify-between items-center xl:flex-row">
				{/* text & avatar img */}
				<div className="hidden w-[300px] xl:flex items-center gap-x-4">
					{/* avatar img */}
					<div className="relative w-16 h-16">
						<Image src={'/assets/player/avatar.png'} fill alt='' priority quality={100} sizes="(100vw - 100px)" className='object-contain' />
					</div>
					{/* text */}
					<div className="leading-none text-white">
						<span className="block text-lg font-medium">Mia Reynolds</span>
						<span className="text-sm font-light">Freedom</span>
					</div>
				</div>
				{/* player */}
				<div className="w-full max-w-4xl ">
					<AudioPlayer
						width={'100%'}
						loop
						preload='none'
						color='#fff'
						volume={40}
						volumePlacement='top'
						src='/assets/freedom.mp3'
						style={{
							background: 'transparent',
							boxShadow: 'none',
							width: '100%',
						}}
					/>
				</div>
			</div>
		</motion.div>
	)
}
