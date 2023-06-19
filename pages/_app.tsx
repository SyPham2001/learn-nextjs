import { EmptyLayout } from '@/components/layout';
import { AppPropsWithLayout } from '@/models';
import '@/styles/globals.css';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactNode, ReactElement } from 'react';


export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const Layout = Component.Layout ?? EmptyLayout;

	return (
      <Component {...pageProps}/>
  )
		
}
