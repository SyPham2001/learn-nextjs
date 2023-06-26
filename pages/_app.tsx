import axiosClient from '@/api-client/axios-client';
import { EmptyLayout } from '@/components/layout';
import { AppPropsWithLayout } from '@/models';
import { SWRConfig } from 'swr';
import '@/styles/globals.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../utils/theme';
import createEmotionCache from '../utils/create-emotion-cache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function App({
	Component,
	pageProps,
	emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) {
	const Layout = Component.Layout ?? EmptyLayout;

	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</SWRConfig>
			</ThemeProvider>
		</CacheProvider>
	);
}
