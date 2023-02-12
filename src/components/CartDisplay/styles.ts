import {styled} from '../../styles'
import {Button} from '../Button/styles'

export const AsideCartDisplay = styled('aside', {
	position: 'absolute',
	top: 0,
	left: 'calc(100% - 480px)',
	backgroundColor: '$gray800',
	width: 480,
	height: '100%',

	display: 'flex',
	flexDirection: 'column',

	boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',

	[`${Button}`]: {
		alignSelf: 'flex-end',
		padding: '1.5rem',
	},
})

export const CartContentContainer = styled('div', {
	margin: '0 3rem',
	marginTop: '2rem',
	maxHeight: '50%',
	overflow: 'hidden',
	overflowY: 'scroll',

	display: 'flex',
	flexDirection: 'column',
	gap: '1.5rem',

	h2: {
		marginBottom: '0.5rem',
		fontSize: '$lg',
	},
})

export const CartItem = styled('div', {
	display: 'flex',
	gap: '1.25rem',

	img: {
		borderRadius: 10,
	},

	div: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
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

export const CartInteractionContainer = styled('div', {
	margin: '0 3rem',
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

	button: {
		all: 'unset',

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
