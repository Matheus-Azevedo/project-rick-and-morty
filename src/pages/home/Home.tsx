import { Container, Nav, Navbar } from 'react-bootstrap';

export function Home() {
  return (
    <>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container>
          <Navbar.Brand href='#home'>Rick and Morty World</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#characters'>Characters</Nav.Link>
              <Nav.Link href='#episodes'>Episodes</Nav.Link>
              <Nav.Link href='#locations'>Locations</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='background-image' />
    </>
  );
}
