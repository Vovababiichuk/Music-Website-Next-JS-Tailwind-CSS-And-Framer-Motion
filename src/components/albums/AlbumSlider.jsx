'use client';

import { useState } from 'react';

import useSWR from 'swr';
import Image from 'next/image';

import { AudioPlayer } from 'react-audio-play';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// fetcher
const fetcher = (url) => fetch(url).then((res) => res.json());

export const AlbumSlider = () => {
	const { data, error } = useSWR('http://localhost:4000/albums', fetcher)
	console.log(data);

	if (error) return 'Failed to fetch data';
	if (!data) return 'Loading...';

	return (
		<>
			{/* top slider */}
			<Swiper className='album-slider'>
				{data && data.map((album) => {
					console.log(album)
					return (
						<SwiperSlide key={album.id} className='mb-12'>
							<div className='bg-secondary/80 rounded-[10px] flex items-center p-6 xl:p-12 gap-x-16'>
								{/* img */}
								<div className='hidden xl:block w-[300px] h-[300px] xl:w-[900px] xl:h-[460px] relative cursor-grab rounded-[10px] overflow-hidden'>
									<Image src={album.img} fill priority quality={100} sizes={100} alt='' className="object-cover" />
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
			<Swiper>thumb slider</Swiper>
		</>
	)
}
