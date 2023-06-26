import * as React from 'react';
import { Box } from '@mui/system';
import { Container, Stack, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import { PostCard } from './post-card';
import { Post, Work } from '@/models';
import { WorkList } from '@/components/work';
export default function FeatureWork() {
	const workList: Work[] = [
		{
			id: '1',
			title: 'Designing Dashboards',
			createdAt: '1687506478757',
			updateAt: '',
			tagList: ['Dashboard'],
			shorDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			fullDescription: '',
			thumbnailUrl:
				'https://res.cloudinary.com/dmixo9vs9/image/upload/v1687751643/learn-nextjs/item-1_e83ntl.jpg',
		},
		{
			id: '2',
			title: 'Vibrant Portraits of 2020',
			createdAt: '1687506478757',
			updateAt: '',
			tagList: ['Illustration'],
			shorDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			fullDescription: '',
			thumbnailUrl:
				'https://res.cloudinary.com/dmixo9vs9/image/upload/v1687751643/learn-nextjs/item-2_bxi1p8.jpg',
		},
		{
			id: '3',
			title: '36 Days of Malayalam type',
			createdAt: '1687506478757',
			updateAt: '',
			tagList: ['Typography'],
			shorDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			fullDescription: '',
			thumbnailUrl:
				'https://res.cloudinary.com/dmixo9vs9/image/upload/v1687751643/learn-nextjs/item-3_iy5nfz.jpg',
		},
	];
	return (
		<Box component="section" py={4}>
			<Container>
				<Typography variant="h5" mb={4}> Feature Works</Typography>
				<WorkList workList={workList} />
			</Container>
		</Box>
	);
}
