import { Container } from "./style";

interface IdentifyProps {
  personData: {
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    origin: {
      name: string;
    }
    location: {
      name: string;
    }
  }
}

export function Identity(props: IdentifyProps) {
  return (
    <Container>
      <div>
        <img 
          src={props.personData.image} 
          alt={`Photography of ${props.personData.name}`} 
        />
      </div>
      <div className="person-item">
        <p>{props.personData.name}</p>
        <ul>
          <li><strong>Satus:</strong> {props.personData.status}</li>
          <li><strong>Species:</strong> {props.personData.species}</li>
          <li><strong>Gender:</strong> {props.personData.gender}</li>
          <li><strong>Origin:</strong> {props.personData.origin.name}</li>
          <li><strong>Location:</strong> {props.personData.location.name}</li>
        </ul>
        
          <a 
            href={`https://www.google.com/search?q=rick+and+morty+${props.personData.name}`}
            target="_blank"
          >
            <button type="button">
              Know more
            </button>
          </a>
      </div>
    </Container>
  )
}