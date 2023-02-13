import {styled} from '..'

export const SuccessContainer = styled('main', {
	margin: '0 auto',
	marginTop: '6.5rem',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	height: 656,

	h1: {
		marginTop: '3rem',
		fontSize: '$2xl',
		color: '$gray100',
	},

	p: {
		marginTop: '1.5rem',
		fontSize: '$xl',
		color: '$gray300',
		maxWidth: 560,
		textAlign: 'center',
		lineHeight: 1.4,
	},

	a: {
		marginTop: '4rem',
		display: 'block',
		fontSize: '$lg',
		color: '$green500',
		textDecoration: 'none',
		fontWeight: 'bold',

		'&:hover': {
			color: '$green300',
		},
	},
})

export const ImageContainer = styled('div', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	marginLeft: '3.25rem',

	img: {
		boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
		marginLeft: '-3.25rem',
		width: 140,
		height: 140,
		padding: '0.25rem',
		borderRadius: '100%',
		background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
		objectFit: 'cover',
	},
})
