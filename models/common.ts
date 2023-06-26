import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactComponentElement, ReactElement, ReactFragment, ReactNode } from "react";
import { CacheProvider, EmotionCache } from '@emotion/react';

export interface LayoutProps{
    children : ReactNode
}

export type NextPageWithLayout = NextPage & {
	Layout?: (props: LayoutProps) => ReactElement
}
   
 export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
    emotionCache?: EmotionCache
  }