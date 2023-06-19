import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostPageProps {
  post : any
}

export default function PostDetailsPage({post}: PostPageProps) {
  if(!post) return null
	return (
		<div>
			<h1>Post Details Page</h1>

			<p>{post.title}</p>
			<p>{post.author}</p>
			<p>{post.description}</p>
		</div>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
	const data = await response.json();

	return {
		paths: data.data.map((post: any) => ({ params: { postId: post.id } })),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<PostPageProps> = async (
	context: GetStaticPropsContext
) => {
	const postId = context.params?.postId;
	if (!postId) return { notFound: true };
	// server-side
	// build-time
	const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`);
	const data = await response.json();
	// console.log(data);
	return {
		props: {
			post: data,
		},
		revalidate : 5,
	};
};
