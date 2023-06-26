import * as React from 'react';
import { Box } from '@mui/system';
import { HeaderDesktop } from './header-desktop';
import { HeaderMobile } from './header-mobile';

export function Header() {
	return (
		<>
			<HeaderDesktop />
			<HeaderMobile />
		</>
	);
}
