import { LayoutProps } from '@/models/common';
import Link from 'next/link';
import * as React from 'react';
import { Auth } from '../common';
import { useAuth } from '@/hooks';
import { useRouter } from 'next/router';

export function AdminLayout({ children }: LayoutProps) {
	const {logout} = useAuth()
	const router = useRouter()
	async function handleLogoutClick() {
		try {
			await logout();
			console.log('redirect to login page');
			router.push('/login')
		} catch (error) {
			console.log('failed to logout', error);
		}
	}
	return (
		<Auth>
			<h1>Admin Layout</h1>
			<div>Sidebar</div>
			<button onClick={handleLogoutClick}>Logout</button>
			<Link href="/">Home</Link>
			<Link href="/about">About</Link>
			<div>{children}</div>
		</Auth>
	);
}
