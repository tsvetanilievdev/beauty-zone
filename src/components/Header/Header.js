import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'

const navigationGuest = (
  <>
    <li>
      <NavLink to="/login">Login</NavLink>
    </li>
    <li>
      <NavLink to="/register">Register</NavLink>
    </li>
  </>
)

const navigationUser = (
  <>
    <li>
      <NavLink to="#">Book an hour</NavLink>
    </li>
    <li>
      <NavLink to="#">Contact Us</NavLink>
    </li>
    <li>
      <NavLink to="#">Logout</NavLink>
    </li>
  </>

)

export const Header = ({
  email
}) => {
  return (
    <header>
      <NavLink className={styles.logo} to="/home">Beauty SoftUni</NavLink>
      <nav>
        <ul className={styles['nav__links']}>
          <li>
            <NavLink to="/procedures">Procedures</NavLink>
          </li>
          {email 
            ? navigationUser
            : navigationGuest}
        </ul>
      </nav>
      <a className={styles.cta} to="javascript:void(0)">
        <button>My profile</button>
      </a>
    </header>
  );
};
