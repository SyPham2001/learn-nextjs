import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
let theme = createTheme({
	typography: {
		fontFamily: 'Heebo, sans-serif',
	},
	palette: {
		primary: {
			main: '#FF6464',
		},
		secondary: {
			light: '#EDF7FA',
			main: '#00A8CC',
		},
		error: {
			main: red.A400,
		},
		text: {
			primary: '#21243D',
		},
	},
	components: {
		MuiContainer: {
			styleOverrides: {
				maxWidthSm: {
					maxWidth: '680px',
					'@media ( min-width : 600px)': {
						maxWidth: '680px',
					},
				},
				maxWidthMd: {
					maxWidth: '860px',
					'@media ( min-width : 900px)': {
						maxWidth: '860px',
					},
				},
			},
			defaultProps: {
				maxWidth: 'md',
			},
		},
		MuiLink: {
			defaultProps: {
				underline: 'none',
			},
			styleOverrides: {
				root: {
					color: 'black',
					'&:hover,&.active': {
						color: '#FF6464',
					},
				},
			},
		},
		MuiButton: {
			variants: [
				{
					props: { variant: 'contained', color: 'primary' },
					style: {
						color: 'white',
					},
				},
			],
		},
		MuiChip: {
      styleOverrides : {
        root : {
          paddingInline : 4,
          paddingBlock : 4
        }
      },
			variants: [
				{
					props: { color: 'secondary' },
					style: {
            fontWeight : 'bold',
						backgroundColor: '#142850',

            fontSize : 16,
						color: 'white',
					},
				},
			],
		},
	},
});
// theme.typography.h3 = {
//   fontSize :  '2rem',
//   [theme.breakpoints.up('md')]: {
//     fontSize : '3rem  '
//   }
// }
theme = responsiveFontSizes(theme);
export default theme;
