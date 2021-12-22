import styles from './Login.module.css'
import { login } from '../../services/beautyZoneService.js'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';


export const Login = () => {
const {onLogin} = useContext(AuthContext);

  const navigation = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    if (email.trim() == '' || password == '') {
      return alert('The passwords must be the same!');
    }

    let result = await login(email, password);
    onLogin(result);
    navigation('/');
  }
  return (
    <div className='login-wrapper'>

      <form action="" onSubmit={onSubmit}>
        <div className={styles.wrapper}>
          <h3>Login form</h3>
          <div className={styles['wrap-div']}>
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" />
          </div>
          <div className={styles['wrap-div']}>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" />
          </div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};
