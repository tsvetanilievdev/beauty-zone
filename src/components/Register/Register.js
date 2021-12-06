import styles from './Register.module.css'

export const Register = () => {
  return (

    <form action="">
      <div className={styles.wrapper}>
          <h3>Register form</h3>
        <div className={styles['wrap-div']}>
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" id="" />
        </div>
        <div className={styles['wrap-div']}>
          <label htmlFor="password">Password: </label>
          <input type="text" name="password" id="" />
        </div>
        <div className={styles['wrap-div']}>
          <label htmlFor="rePass">Repeat password: </label>
          <input type="text" name="rePass" id="" />
        </div>
        <button>Submit</button>
      </div>
    </form>
  );
};
