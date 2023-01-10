import { ReactNode } from 'react';
import { Container } from './styles'
 
interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export function Button({onClick, children}: ButtonProps) {
  return (
    <Container>
      <button 
        type='button' 
        onClick={onClick}
      >
        {children}
      </button>
    </Container>
  )
}
