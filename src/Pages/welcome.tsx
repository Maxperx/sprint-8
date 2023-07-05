import { Login } from "../components/login"
import { StyledImage, StyledLink, StyledMenu } from "../components/styled-components/styledList";

 //Menu
 const Page = {
    Home: '/',
  } as const;
  
  type PageType = typeof Page[keyof typeof Page];
  const currentPage: PageType = Page.Home;

  const isAuthenticated = false;

export const Welcome = () => {
    return (

        <div>
        <div>
          <StyledImage src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-emblema.jpg" alt="" />
        </div>
        <div>
        <StyledMenu>
        <StyledLink href="/" className={currentPage === '/' ? 'active' : ''}>HOME</StyledLink>
          {isAuthenticated && (
            <StyledLink href="/starships">STARSHIPS</StyledLink>
          )}
          </StyledMenu>
        </div>

        <div className="container">
            <h1>STAR WARS</h1>
            <div><Login></Login></div>
            <br />
            <div><button><a href="/register">Registrate</a></button></div>
        </div>
        </div>
    )
}