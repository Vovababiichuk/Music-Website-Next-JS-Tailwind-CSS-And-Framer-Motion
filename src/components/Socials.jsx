import Link from 'next/link'
import { RiYoutubeFill, RiInstagramFill, RiSpotifyFill, RiSoundcloudFill } from 'react-icons/ri'

const socials = [
	{
		path: 'https://www.youtube.com/',
		icon: <RiYoutubeFill/>
	},
	{
		path: 'https://www.instagram.com/',
		icon: <RiInstagramFill/>
	},
	{
		path: 'https://open.spotify.com/',
		icon: <RiSpotifyFill/>
	},
	{
		path: 'https://soundcloud.com/',
		icon: <RiSoundcloudFill/>
	}
]

export const Socials = ({ containerStyles, iconStyles }) => {
	return (
		<div className={`${containerStyles}`}>
			{socials.map((social, index) => (
				<Link key={index} href={social.path} target='_blank'>
					<div className={`${iconStyles}`}>{social.icon}</div>
				</Link>
			))}
		</div>
	)
}
