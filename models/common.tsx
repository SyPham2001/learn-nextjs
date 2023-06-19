import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactComponentElement, ReactElement, ReactFragment, ReactNode } from "react";

export interface LayoutProps{
    children : ReactNode
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    Layout?: (props: LayoutProps) => ReactNode
  }
   
 export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
  }