import { useEffect, useState } from "react"
import { idGenerator } from "../../utils/idGenerator"
import { Button } from "../Button"
import { Identity } from "../Identity"
import { Container, Buttons } from "./styles"

export function IdentityList() {
  const [rickDataBase, setRickDataBase] = useState([])
  const [numberPage, setNumberPage] = useState(1)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${numberPage}`)
      .then(response => response.json())
      .then(data => setRickDataBase(data['results']))
  }, [numberPage])

  function handlePrevPage(page: number) {
    if (page > 1) {
      return setNumberPage(page - 1)
    }
    setNumberPage(1)
  }

  function handleNextPage(page: number) {
     if (page > 0 && page < 42) {
        return setNumberPage(page + 1)
     }
     setNumberPage(42)
     alert('Não há mais páginas')
  }

  return (
    <>
      
      <Container>
        {rickDataBase.map((person) => {
          return (
            <Identity 
              key={idGenerator()} 
              personData={person}
            />
          )
        })}
        
        
      </Container>
      <Buttons>
        <Button onClick={() => handlePrevPage(numberPage)}>
          Previus page
        </Button>
      
        <Button onClick={() => handleNextPage(numberPage)}>
          Next page
        </Button>
      </Buttons>  
    </>
  )
}