import { Link } from 'react-router-dom';
import { NavWrapper } from '../../shared';

export function Locations() {
  return (
    <div>
      <NavWrapper>
        <Link to='/' className='nav-link'>
          Back to Home
        </Link>
      </NavWrapper>
      <h1>Locations</h1>
    </div>
  );
}
