 
import { blogCard } from "@/app/lib/interface";
import { getPostBySlug, getPosts } from "@/lib/service";

import Image from "next/image";


export const dynamicParams = true;

export async function generateStaticParams() {
	const response = await getPosts()
	console.log("Response")
	console.log(response)
	// const posts = await response.json();

    // console.log("Posts")
    // console.log(posts)

	return response.map((post: any) => ({
		// postId: post.id.toString(),
		postSlug: post.slug,
	}));
}

// async function getSinglePost(postId: string) {

// 	const response = await fetch(

// 		`${apiUrl}/posts/${postId}`
// 	);
// 	const post = await response.json();
// 	return post;
// }

const Page = async ( {params}: {params: {postSlug: string}} ) => {

	console.log("Params")
	console.log(params)

	const post: blogCard  = await getPostBySlug(params.postSlug);

    console.log('Post2')
    console.log(post)

	// const postContent = post.content
	// console.log("postContent")
	// console.log(postContent)

	if (!post) {
		return <div>Loading...</div>;
	}

	// return (
	// 	<p>Loading</p>
	// );
		

	return (
		<div className="single-blog-page">
			<h1 className="post-page-title my-[50px] uppercase tracking-widest text-[1.5rem] text-center text-blue-100">{post.title}</h1>
			<Image 
				src={post.featuredImage.node.sourceUrl} 
				alt="image" 
				width={600} 
				height={400}
				className='post-image rounded-t-lg object-cover'
			/>
			<div className="blog-post mt-[50px]">
				<p dangerouslySetInnerHTML={{ __html: post.content }}></p>
			</div>
		</div>
	);
	
};

export default Page;