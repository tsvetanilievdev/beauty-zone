import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
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
      <NavLink to="/booking">Book an hour</NavLink>
    </li>
    <li>
      <NavLink to="#">Contact Us</NavLink>
    </li>
    <li>
      <NavLink to="/logout">Logout</NavLink>
    </li>
  </>

)

export const Header = () => {
  const {user} = useContext(AuthContext);
  return (
    <header>
      <NavLink className={styles.logo} to="/home">Beauty SoftUni</NavLink>
      <nav>
        <ul className={styles['nav__links']}>
          <li>
            <NavLink to="/procedures">Procedures</NavLink>
          </li>
          {user.email
            ? navigationUser
            : navigationGuest}
        </ul>
      </nav>
      {user.email
        ? (<a className={styles.cta} to="javascript:void(0)">
          <button>My profile</button>
        </a>)
        : (<a className={styles.cta} to="/become-a-member">
        <button>Become a member!</button>
      </a>)
      }

    </header>
  );
};
