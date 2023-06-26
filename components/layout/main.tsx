import { LayoutProps } from '@/models/common';
import { Container, Stack } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';
import { Footer, Header } from '../common';
import { Box } from '@mui/system';

export function MainLayout({ children }: LayoutProps) {
	return (
		<Stack minHeight="100vh">
			<Header />

			<Box component="main" flexGrow={1}>
				{children}
			</Box>

			<Footer />
		</Stack>
	);
}
