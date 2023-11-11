'use client'

import Link from "next/link"
import { Socials } from "./Socials"
import { Nav } from "./Nav"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"

export const Footer = () => {
	return (
		<footer className="bg-accent section">
			<div className="container mx-auto flex flex-col items-center gap-y-8">
				{/* email link */}
				<div>
					<Link href='#'>
						<h2 className="text-[24px] lg:text-[38px] font-semibold leading-tight">hello@miareynolds.com</h2>
					</Link>
				</div>
				{/* nav */}
				<div>
					<Nav containerStyles='flex flex-col xl:flex-row justify-center items-center gap-y-4 xl:gap-x-8 text-sm uppercase font-semibold' linkStyles='hover:text-primary/80 transition-all' />
				</div>
				{/* socials */}
				<div>
					<Socials containerStyles='flex text-[24px] gap-x-8' iconStyles='hover:text-primary/80 transition-all justify-center' />
				</div>
				{/* logo */}
				<div>
					<Link href='#' className="relative w-[250px] h-[50px] flex transition-all mb-4 xl:mb-0">
						<Image src={'/assets/header/logo.svg'} fill priority alt='' className='object-contain'/>
					</Link>
				</div>
			</div>
		</footer>
	)
}
