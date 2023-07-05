import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledContainer, StyledFirstTexts, StyledLabel, StyledModel } from '../components/styled-components/styledDetails.tsx';

interface Starship {
  [x: string]: ReactNode;
}

function ShipDetails() {
  const { starshipId } = useParams<{ starshipId: string }>();
  const [starship, setStarship] = useState<Starship>();

  useEffect(() => {
    fetch(`https://swapi.dev/api/starships/${starshipId}`)
      .then((response) => response.json())
      .then((data) => setStarship(data));
  }, []);

  if (typeof starship === 'undefined')
    return (
      <div></div>
    )
  else {
    const imgurl = `https://starwars-visualguide.com/assets/img/starships/${starshipId}.jpg`
    return (
      <div>
        <StyledContainer>
        <StyledFirstTexts>
        <h2>{starship.name}</h2>
        <img src={imgurl} alt="" />
        <p><StyledModel>MODEL: </StyledModel><StyledLabel>{starship.model}</StyledLabel></p>
        <p><StyledModel>STARSHIP CLASS: </StyledModel><StyledLabel>{starship.starship_class}</StyledLabel></p>
        <p><StyledModel>MANUFACTURER: </StyledModel><StyledLabel>{starship.manufacturer}</StyledLabel></p>
        <p><StyledModel>COST: </StyledModel><StyledLabel>{starship.cost_in_credits}</StyledLabel></p> 
      <br />
        <p><StyledModel>LENGTH: </StyledModel><StyledLabel> {starship.length}</StyledLabel></p>
        <p><StyledModel>CREW: </StyledModel><StyledLabel>{starship.crew}</StyledLabel></p>
        <p><StyledModel>PASSENGERS: </StyledModel><StyledLabel>{starship.passengers}</StyledLabel></p>
        <p><StyledModel>MAX_ATMOSPHERING_SPEED: </StyledModel><StyledLabel>{starship.max_atmosphering_speed}</StyledLabel></p>
        <p><StyledModel>HYPERDRIVE_RATING: </StyledModel><StyledLabel>{starship.hyperdrive_rating}</StyledLabel></p>
        <p><StyledModel>MGLT: </StyledModel><StyledLabel>{starship.MGLT}</StyledLabel></p>
        <p><StyledModel>CARGO_CAPACITY: </StyledModel><StyledLabel>{starship.cargo_capacity}</StyledLabel></p>
        <p><StyledModel>CONSUMABLES: </StyledModel><StyledLabel>{starship.consumables}</StyledLabel></p>
        </StyledFirstTexts>
        </StyledContainer>
      </div>
    );
  }

}


export default ShipDetails;
