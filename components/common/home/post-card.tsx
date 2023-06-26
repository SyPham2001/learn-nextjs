import * as React from 'react';
import { Card, CardContent, Typography, Divider } from '@mui/material';
import { format } from 'date-fns';
import { Box } from '@mui/system';
import { Post } from '@/models';

export interface PostCardProps {
	post: Post;
}

export function PostCard({ post }: PostCardProps) {
	if (!post) return null;
	return (
		<Card>
			<CardContent>
				<Typography variant="h5" fontWeight="bold">
					{post.title}
				</Typography>
				<Box my={2} sx={{ display: 'flex' }}>
					{format(Number(post.publishedDate), 'dd MMM yyyy')}

					<Divider orientation="vertical" sx={{ mx: 2 }} flexItem />

					{post.tagList.join(', ')}
				</Box>
				<Typography variant="body2">{post.description}</Typography>
			</CardContent>
		</Card>
	);
}
