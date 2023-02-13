import {keyframes, styled} from '../../styles'
import {Button} from '../Button/styles'

const scrollLeft = keyframes({
	'0%': {
		transform: 'translateX(calc(100% + 480px))',
		opacity: 0,
		position: 'fixed',
	},
	'100%': {
		transform: 'translateX(calc(100% - 480px))',
		opacity: 1,
		position: 'fixed',
	},
})

export const AsideCartDisplay = styled('aside', {
	zIndex: 1,

	width: 480,
	height: '100%',

	position: 'absolute',
	top: 0,
	left: 'calc(100% - 480px)',
	animation: `${scrollLeft} 0.4s ease-in-out`,

	backgroundColor: '$gray800',
	boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.4)',

	display: 'flex',
	flexDirection: 'column',

	[`${Button}`]: {
		alignSelf: 'flex-end',
		padding: '1.5rem',
	},

	h2: {
		margin: '0 3rem',
		marginBottom: '0.5rem',
		fontSize: '$lg',
	},
})

export const CartContentContainer = styled('div', {
	margin: '0 3rem',
	marginTop: '2rem',
	height: '55%',

	overflow: 'hidden',
	overflowY: 'scroll',

	borderRadius: 8,
	boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.6)',

	display: 'flex',
	flexDirection: 'column',
	gap: '1.5rem',
})

export const CartItem = styled('div', {
	display: 'flex',
	gap: '1.25rem',

	div: {
		display: 'flex',
		flexDirection: 'column',
	},

	span: {
		fontSize: '$md',
		fontWeight: 'normal',
		color: '$gray300',
		lineHeight: 1.6,
	},

	strong: {
		fontSize: '$md',
		fontWeight: 'bold',
		color: '$gray100',
		lineHeight: 1.6,
	},

	button: {
		all: 'unset',
		color: '$green500',
		fontSize: '1rem',
		lineHeight: 1.6,
		cursor: 'pointer',
		marginTop: '0.5rem',

		'&:hover': {
			color: '$green300',
		},
	},
})

export const ImageContainer = styled('div', {
	width: 100,
	height: 100,
	borderRadius: 8,

	background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	img: {
		width: 90,
		height: 90,
		objectFit: 'fill',
		borderRadius: 10,
	},
})

export const CartInteractionContainer = styled('div', {
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
	gap: '0.5rem',

	margin: '0 3rem',
	marginTop: '2rem',

	height: '11.75rem',

	color: '$gray100',
	lineHeight: 1.6,
	fontSize: '$md',

	div: {
		width: '100%',

		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	span: {
		'&:last-child': {
			fontSize: '$md',
		},
	},

	strong: {
		'&:last-child': {
			fontSize: '$xl',
		},
	},

	button: {
		all: 'unset',
		marginTop: '3.5rem',

		width: '100%',
		padding: '1.25rem 0',
		backgroundColor: '$green500',
		borderRadius: 8,

		color: '$white',

		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',

		cursor: 'pointer',

		'&:hover': {
			backgroundColor: '$green300',
		},
	},
})
