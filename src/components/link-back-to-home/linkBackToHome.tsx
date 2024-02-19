import { ArrowLeft } from 'phosphor-react';
import { Link } from 'react-router-dom';
import styles from './linkBackToHome.module.css';

export function LinkBackToHome() {
  return (
    <div className={styles.container_link}>
      <ArrowLeft size={16} />
      <Link to='/' className='nav-link'>
        Back to Home
      </Link>
    </div>
  );
}
