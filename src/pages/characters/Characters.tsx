import { Link } from 'react-router-dom';
import { NavWrapper } from '../../shared';

export function Characters() {
  return (
    <>
      <NavWrapper>
        <Link to='/' className='nav-link'>
          Back to Home
        </Link>
      </NavWrapper>
      <h1>Characters</h1>
    </>
  );
}
