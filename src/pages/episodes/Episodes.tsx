import { Link } from 'react-router-dom';
import { NavWrapper } from '../../shared';

export function Episodes() {
  return (
    <>
      <NavWrapper>
        <Link to='/' className='nav-link'>
          Back to Home
        </Link>
      </NavWrapper>
      <h1>Episodes</h1>
    </>
  );
}
