import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import { NavWrapper } from '../../shared';

export function Home() {
  return (
    <>
      <NavWrapper>
        <Link to='/characters' className='nav-link'>
          Characters
        </Link>
        <Link to='/episodes' className='nav-link'>
          Episodes
        </Link>
        <Link to='/locations' className='nav-link'>
          Locations
        </Link>
      </NavWrapper>
      <div className={styles.background_image} />
    </>
  );
}
