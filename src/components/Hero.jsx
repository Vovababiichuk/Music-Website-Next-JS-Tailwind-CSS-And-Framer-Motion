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
					<MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.2} resetOnLeave className='relative flex items-center xl:h-max xl:w-[840px]'>
						<MouseParallaxChild factorX={0.2} factorY={0.4} className='relative'>
							<motion.div
								variants={fadeIn('up', 0.4)}
								initial='hidden'
								whileInView={"show"}
								viewport={{ once: false, amount: 0.3 }}
								className='w-[300px] h-[101.37px] xl:w-[725px] xl:h-[244.97px] relative'>
								<Image src={'/assets/hero/typo-1.svg'} priority fill alt='' className='object-contain' />
							</motion.div>
						</MouseParallaxChild>
						<MouseParallaxChild factorX={0.9} factorY={0.9} className='absolute xl:left-6 z-30'>
							<motion.div
								variants={fadeIn('up', 0.4)}
								initial='hidden'
								whileInView={"show"}
								viewport={{ once: false, amount: 0.3 }}
								className='w-[300px] h-[101.37px] xl:w-[625px] xl:h-[244.97px] relative'>
								<Image src={'/assets/hero/typo-2.svg'} priority fill alt='' className='object-contain' />
							</motion.div>
						</MouseParallaxChild>
						<MouseParallaxChild factorX={0.3} factorY={0.6} className='hidden xl:flex absolute right-0 z-20 opacity-80'>
							<motion.div
								variants={fadeIn('left', 1.4)}
								initial='hidden'
								whileInView={"show"}
								viewport={{ once: false, amount: 0.3 }}
								className='w-[150px] h-[100px] xl:w-[248px] xl:h-[200px] mix-blend-luminosity relative'>
								<Image src={'/assets/hero/bird.png'} priority fill alt='' sizes='(100vw - 100px)' className='object-contain' />
							</motion.div>
						</MouseParallaxChild>
					</MouseParallaxContainer>

					<div className='min-h-[60px] flex items-center mb-6'>
						<div className='hidden xl:flex items-center xl:gap-x-0'>
							<div>World</div>
							<div className='relative w-2 h-2 mx-2 flex items-center justify-center'>
								<Image src={'/assets/hero/dot.svg'} fill alt=''/>
							</div>
						</div>
						{/* icon */}
						<div className='hidden xl:flex items-center justify-center relative w-7 h-7 mx-4'>
							<Image src={'/assets/hero/mic.svg'} priority fill alt='' />
						</div>
						{/* animation */}
						<TypeAnimation
							sequence={locationSequence}
							wrapper='div'
							speed={10}
							deletionSpeed={10}
							repeat={Infinity}
							cursor={false} />
					</div>

				</div>
				{/* image */}
				<motion.div
					variants={fadeIn('left', 0.2)}
					initial='hidden'
					whileInView={"show"}
					viewport={{ once: false, amount: 0.7 }}
					className='hidden xl:flex absolute right-0 top-0 before:w-[784px] before:h-[893px] before:absolute before:right-0 before:top-0 before:bg-singerOverlay before:z-10'>
					<Image src={'/assets/hero/singer.png'} width={617} height={893} priority quality={100} alt='' />
				</motion.div>
			</div>
		</section>
	)
}
