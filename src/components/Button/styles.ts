import {styled} from '../../styles'

export const Button = styled('button', {
	padding: '0.75rem',
	backgroundColor: '$gray800',

	border: 'none',
	borderRadius: 6,

	cursor: 'pointer',

	color: '$grayIcon',
	lineHeight: 0,

	variants: {
		variant: {
			green: {
				color: '$white',
				backgroundColor: '$green500',
				'&:hover': {
					backgroundColor: '$green300',
				},
			},
			gray: {
				backgroundColor: '$gray800',
				'&:hover': {
					color: '$gray300',
				},
			},
			transparent: {
				backgroundColor: 'transparent',
			},
		},
	},
})
