import { authApi } from '@/api-client';
import { useAuth } from '@/hooks/index';
import { useRouter } from 'next/router';
import * as React from 'react';

export default function LoginPage() {
	const router = useRouter();
	const { profile, login, logout } = useAuth({
		revalidateOnMount: false,
	});

	async function handleLoginClick() {
		try {
			await login();
			console.log('redirect to dashboard');
			router.push('/about');
		} catch (error) {
			console.log('failed to login', error);
		}
	}

	// async function handleGetProFileClick() {
	// 	try {
	// 		await authApi.getProfile();
	// 	} catch (error) {
	// 		console.log('fail to get profile', error);
	// 	}
	// }

	async function handleLogoutClick() {
		try {
			await authApi.logout();
			await logout();
			console.log('redirect to login page');
		} catch (error) {
			console.log('failed to logout', error);
		}
	}

	return (
		<div>
			<h1>Login page</h1>
			<p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>
			<button onClick={handleLoginClick}>Login</button>
			{/* <button onClick={handleGetProFileClick}>Get Profile</button> */}
			<button onClick={handleLogoutClick}>Logout</button>
			<button onClick={()=>router.push('/about')}>Go to about</button>

		</div>
	);
}
