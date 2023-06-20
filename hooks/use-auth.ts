
import { authApi } from '@/api-client'
import useSWR from 'swr'
import { PublicConfiguration } from 'swr/_internal'


// Auth --> Protected Pages
// <Auth>{children}</Auth>*asReact
export function useAuth(options?: Partial<PublicConfiguration>) {
	const {
		data: profile,
		error,
		mutate,
	} = useSWR('/profile', {
		dedupingInterval: 60 * 60 * 1000, // 1hr
		revalidateOnFocus: false,
		...options,
	})
	// console.log({profile,error})
	const firstLoading = profile === undefined && error === undefined;

	async function login() {
		await authApi.login({
			username: 'test1',
			password: '123123',
		})

		await mutate()
	}

	async function logout() {
		await authApi.logout()
		mutate(null, false)
	}

	return {
		profile,
		error,
		login,
		logout,
		firstLoading	
	}
}