import {styled} from '..'

export const HomeContainer = styled('main', {
	display: 'flex',

	width: '90%',
	marginLeft: 'auto',
	minHeight: 656,

	'> button': {
		position: 'absolute',
		all: 'unset',
		cursor: 'pointer',
		zIndex: 1,
		color: '$gray300',
		backgroundColor: 'red',

		'&:hover': {
			color: '$white',
		},
	},

	'& .ArrowLeft': {
		position: 'absolute',
		top: 'calc(50% - 24px)',
		left: '1rem',
	},

	'& .ArrowRight': {
		position: 'absolute',
		top: 'calc(50% - 24px)',
		right: '1rem',
	},
})

export const Product = styled('div', {
	background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
	borderRadius: 8,
	cursor: 'pointer',
	position: 'relative',
	overflow: 'hidden',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	img: {
		objectFit: 'cover',
	},

	footer: {
		position: 'absolute',
		bottom: '0.25rem',
		left: '0.25rem',
		right: '0.25rem',
		padding: '2rem',
		maxHeight: '6.875rem',

		borderRadius: 6,

		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',

		div: {
			display: 'flex',
			flexDirection: 'column',
			gap: '0.25rem',
			lineHeight: 1.6,
		},

		backgroundColor: 'rgba(0, 0, 0, 0.6)',

		transform: 'translateY(110%)',
		opacity: 0,
		transition: 'all 0.2s ease-in-out',

		strong: {
			fontSize: '$lg',
			color: '$gray100',
		},

		span: {
			fontSize: '$xl',
			fontWeight: 'bold',
			color: '$green300',
		},
	},

	'&:hover': {
		footer: {
			transform: 'translateY(0%)',
			opacity: 1,
		},
	},
})
