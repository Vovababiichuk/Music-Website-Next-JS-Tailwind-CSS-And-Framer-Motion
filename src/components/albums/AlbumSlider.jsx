'use client';

import { useState } from 'react';

import Image from 'next/image';

import { AudioPlayer } from 'react-audio-play';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export const AlbumSlider = ({ albums }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<>
			{/* top slider */}
			<Swiper
				effect='coverflow'
				speed={1000}
				spaceBetween={80}
				allowTouchMove={true}
				thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
				modules={[EffectCoverflow, FreeMode, Navigation, Thumbs]}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}

				className='album-slider'>
				{albums && albums.map((album) => {
					console.log(album)
					return (
						<SwiperSlide key={album.id} className='mb-12'>
							<div className='bg-secondary/80 rounded-[10px] flex items-center p-6 xl:p-12 gap-x-16'>
								{/* img */}
								<div className='hidden xl:block w-[300px] h-[300px] xl:w-[900px] xl:h-[460px] relative cursor-pointer rounded-[10px] overflow-hidden'>
									<Image src={album.img} fill priority quality={100} sizes={100} alt='' className="object-cover hover:scale-105 transition-all duration-300" />
								</div>
								{/* track container */}
								<div className='w-full'>
									{/* tracks */}
									{album.tracks?.map((track, index) => {
										return (
											<div key={index} className='flex max-sm:flex-col items-center justify-between'>
												{/* track name */}
												<div className='flex items-center gap-x-2 capitalize font-semibold xl:font-extrabold'>
													<div className='text-accent text-base xl:text-lg'>0{index + 1}.</div>
													<div className='text-base xl:text-lg'>{track.name}</div>
												</div>
												{/* player */}
												<div className=''>
													<AudioPlayer
														style={{ width: '300px', background: 'transparent', boxShadow: 'none' }}
														src={track.src}
														loop
														preload='none'
														color='#fff'
														volume={40}
														volumePlacement='bottom'
													/>
												</div>
											</div>
										)
									})}
								</div>
							</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
			{/* thumb slider */}
			<Swiper
				onSwiper={setThumbsSwiper}
				breakpoints={{
					320: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					425: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
					1310: {
						slidesPerView: 5,
						spaceBetween: 30,
					}
				}}
				modules={[FreeMode, Navigation, Thumbs]}
				spaceBetween={70}
				slidesPerView={5}
				freeMode={true}
				watchSlidesProgress={true}
				className='thumb-slider cursor-pointer'
			>
				{
					albums?.map((thumb, index) => {
						return (
							<SwiperSlide key={index} className='relative group overflow-hidden border-2 border-transparent w-[254px] rounded-[10px]'>
								{/* img */}
								<div className='relative w-[195px] h-[195px] sm:w-[360px] sm:h-[360px] md:w-[240px] md:max-h-[240px] cursor-pointer'>
									<Image src={thumb.img} fill priority quality={100} sizes={100} alt='' 
									className="object-contain group-hover:scale-105 transition-all duration-300" />
								</div>
							</SwiperSlide>
						)
					})
				}

			</Swiper>
		</>
	)
}
