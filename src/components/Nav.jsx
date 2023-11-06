import { Link } from 'react-scroll'

const links = [
	{
		path: 'home',
		name: 'Home'
	},
	{
		path: 'tours',
		name: 'Tours'
	},
	{
		path: 'discography',
		name: 'Discography'
	},
	{
		path: 'contact',
		name: 'Contact'
	},
]

export const Nav = ({ containerStyles, linkStyles }) => {
	return (
		<nav className={`${containerStyles}`}>
			{links.map(link => (
				<Link
				key={link.name}
				to={link.path}
				className={`${linkStyles} cursor-pointer border-b-2 border-transparent`}
				smooth
				spy
				offset={-50}
				activeClass='active'
				>
					{link.name}
				</Link>
			))}
		</nav>
	)
}


