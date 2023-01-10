import { Container } from "./style" 
import Logo from '../../../public/logo.png'

export function Header() {
  return (
    <Container>
      <div>
        <a href="/">
          <img src={Logo} alt="Logo Rick and Morty" />
        </a>
        
        <h1>Meet the main characters of the series</h1>
      </div>
    </Container>
  )
}