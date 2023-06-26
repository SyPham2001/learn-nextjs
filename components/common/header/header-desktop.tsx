import * as React from 'react';
import { Box } from '@mui/system';
import { Container, Stack, Link as MuiLink } from '@mui/material';
import { ROUTE_LIST } from './routes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

export function HeaderDesktop() {
	const router = useRouter();
	return (
		<Box display={{ xs: 'none', md: 'block' }} py={2}>
			<Container>
				<Stack direction="row" justifyContent="flex-end">
					{ROUTE_LIST.map((route) => (
						<Link key={route.path} href={route.path} passHref legacyBehavior>
							<MuiLink sx={{ ml: 2,fontWeight:'medium' }} className={clsx({ active: router.pathname === route.path })}>
								{route.label}
							</MuiLink>
						</Link>
					))}
				</Stack>
			</Container>
		</Box>
	);
}
