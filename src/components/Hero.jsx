'use client'

import Image from 'next/image'
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const locationSequence = [
	'Los angeles, USA', 3000,
	'Rio de Janeiro, Brazil', 3000,
	'Paris, France', 3000,
	'Berlin, Germany', 3000,
	'Athens, Greece', 3000,
]

export const Hero = () => {
	return (
		<section className='h-[80vh] xl:h-[850px]' id='home'>
			<div className='container mx-auto h-full flex justify-center items-center xl:justify-start'>
				{/* text */}
				<div className='h-full flex flex-col justify-center items-center xl:items-start z-20 pt-12'>
					<MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.2} resetOnLeave className='relative flex items-center p-[120px] xl:h-max xl:w-[840px]'>
						<MouseParallaxChild factorX={0.2} factorY={0.4} className='relative'>
							<div className='w-[300px] h-[101.37px] xl:w-[725] xl:h-[244.97px] relative'>
								<Image src={'/assets/hero/typo-1.svg'} priority fill alt='' className='object-contain' />
							</div>
						</MouseParallaxChild>
					</MouseParallaxContainer>
				</div>
				{/* image */}
				<div className='hidden xl:flex absolute right-0 top-0 before:w-[784px] before:h-[893px] before:absolute before:right-0 before:top-0 before:bg-singerOverlay before:z-10'>
					<Image src={'/assets/hero/singer.png'} width={617} height={893} priority quality={100} alt='' />
				</div>
			</div>
		</section>
	)
}
