import { ArrowLeft } from 'phosphor-react';
import { Link } from 'react-router-dom';

export function LinkBackToHome() {
  return (
    <div>
      <Link to='/' className='nav-link'>
        <ArrowLeft size={20} />
      </Link>
    </div>
  );
}
