import styles from './Home.module.css';

export const Home = () => {
  return (
    <div className={styles['wrap-home']}>
      <h1>Welcome to <span className={styles['beauty-font']}> Beauty Zone </span></h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        facilis nemo veniam nisi est possimus ex odio. Molestiae soluta illum
        dolore rem unde saepe provident iure ad? Qui, dolor velit.
      </p>
    </div>
  );
};
