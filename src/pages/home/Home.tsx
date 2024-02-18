import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container>
          <Navbar.Brand href='#home'>Rick and Morty World</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Link to='/characters' className='nav-link'>
                Characters
              </Link>
              <Link to='/episodes' className='nav-link'>
                Episodes
              </Link>
              <Link to='/locations' className='nav-link'>
                Locations
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className={styles.background_image} />
    </>
  );
}
