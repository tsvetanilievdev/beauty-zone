import styles from './Register.module.css'
import { register } from '../../services/beautyZoneService.js'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export const Register = () => {
const {onAuth} = useContext(AuthContext);
const navigation = useNavigate();

async function onSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const email = formData.get('email');
  const password = formData.get('password');
  const repass = formData.get('rePass');

  if (email.trim() == '' || password == '') {
    return alert('All fields must be completed!');
  }

  if(password != repass){
    return alert('The passwords must be the same!');

  }

  try {
    let result = await register(email, password);
    onAuth(result);
    navigation('/');

  } catch (err) {
    return alert(err.message);
  }
}

  return (

    <form onSubmit={onSubmit} action="">
      <div className={styles.wrapper}>
          <h3>Register form</h3>
        <div className={styles['wrap-div']}>
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" id="" />
        </div>
        <div className={styles['wrap-div']}>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="" />
        </div>
        <div className={styles['wrap-div']}>
          <label htmlFor="rePass">Repeat password: </label>
          <input type="password" name="rePass" id="" />
        </div>
        <button>Submit</button>
      </div>
    </form>
  );
};
