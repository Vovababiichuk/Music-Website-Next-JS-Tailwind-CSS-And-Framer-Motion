import { SectionHeader } from "../events/SectionHeader"
import { PostList } from "./PostList"

import { PostsData } from "../../../public/data/posts"

export const Blog = async () => {
	const posts = PostsData;

	return (
		<section className="section" id='blog'>
			<div className="container mx-auto">
				<SectionHeader pretitle="Our Blog" title="Latest News" />
				{/* post list */}
				<PostList posts={posts} />
			</div>
		</section>
	)
}
