import Link from 'next/link'
import { RiYoutubeFill, RiInstagramFill, RiSpotifyFill, RiSoundcloudFill } from 'react-icons/ri'

const socials = [
	{
		path: '#',
		icon: <RiYoutubeFill/>
	},
	{
		path: '#',
		icon: <RiInstagramFill/>
	},
	{
		path: '#',
		icon: <RiSpotifyFill/>
	},
	{
		path: '#',
		icon: <RiSoundcloudFill/>
	}
]

export const Socials = ({ containerStyles, iconStyles }) => {
	return (
		<div className={`${containerStyles}`}>
			{socials.map((social, index) => (
				<Link key={index} href={social.path}>
					<div className={`${iconStyles}`}>{social.icon}</div>
				</Link>
			))}
		</div>
	)
}
