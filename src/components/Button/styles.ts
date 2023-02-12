import { styled } from '../../styles';

export const Button = styled('button', {
  padding: '0.75rem',
  backgroundColor: '$gray800',
  
  border: 'none',
  borderRadius: 6,
  
  cursor: 'pointer',
  
  color: '$grayIcon',
  lineHeight: 0,

  '&:hover': {
    color: '$gray300',
  },
})