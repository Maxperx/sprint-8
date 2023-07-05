import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledComponent, StyledContainer, StyledImage, StyledMenu, StyledLink, StyledText } from '../components/styled-components/styledList.tsx';

interface Starship {
  url: string;
  name: string;
  model: string;
}

function ShipList() {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);

  useEffect(() => {
    fetchStarships('https://swapi.dev/api/starships/');
  }, []);

  const fetchStarships = (url: string) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setStarships((prevStarships) => {
          const newStarships = data.results.filter((newStarship: { url: string; }) => {
            return !prevStarships.some((prevStarship) => prevStarship.url === newStarship.url);
          });
          return [...prevStarships, ...newStarships];
        });
        setNextPageUrl(data.next);
      });
  };

  const handleViewMore = () => {
    if (nextPageUrl) {
      fetchStarships(nextPageUrl);
    }
  };
  
  //Menu
  const Page = {
    Starships: 'starships',
  } as const;
  
  type PageType = typeof Page[keyof typeof Page];
  const currentPage: PageType = Page.Starships;

  return (
    <div>
      <div>
        <StyledImage src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-emblema.jpg" alt="" />
      </div>
      <div>
      <StyledMenu>
      <StyledLink href="/">HOME</StyledLink>
        <StyledLink href="/starships" className={currentPage === 'starships' ? 'active' : ''}>STARSHIPS</StyledLink>
        </StyledMenu>
      </div>
      {starships.map((starship) => {
        const shipid = starship.url.split('/')[5];
        return (
          <Link key={starship.name} to={`/ships/${encodeURIComponent(shipid)}`}>
            <div>
            <StyledContainer>
              <StyledComponent>
              <StyledText>{starship.name}</StyledText>
              <p>{starship.model}</p>
              </StyledComponent>
              </StyledContainer>
            </div>
          </Link>
        );
      })}
      {nextPageUrl && (
        <button onClick={handleViewMore}>View More</button>
      )}
    </div>
  );
}

export default ShipList;
