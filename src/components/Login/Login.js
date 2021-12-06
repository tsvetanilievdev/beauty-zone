import styles from './Login.module.css'

export const Login = () => {
  return (

    <form action="">
      <div className={styles.wrapper}>
          <h3>Login form</h3>
        <div className={styles['wrap-div']}>
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" id="" />
        </div>
        <div className={styles['wrap-div']}>
          <label htmlFor="password">Password: </label>
          <input type="text" name="password" id="" />
        </div>
        <button>Submit</button>
      </div>
    </form>
  );
};
