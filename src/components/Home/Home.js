import styles from './Home.module.css';



export const Home = () => {
  return (
    <div className={styles['wrap-home']}>
      <h1>Welcome to <span className={styles['beauty-font']}> Beauty Zone </span></h1>
      <p className={styles.intro}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        facilis nemo veniam nisi est possimus ex odio. Molestiae soluta illum
        dolore rem unde saepe provident iure ad? Qui, dolor velit.
      </p>

      <div className={styles['wrap-left']}>
        <h3>Comfort</h3>
        <img className={styles['crop-image']} src="https://i.ibb.co/pQYk8jP/1.png" alt="" />
        <p className={styles.introTo}>Microdermabrasion treatment promotes skin rejuvenation through the use of mechanical exfoliation which removes the dead and dull surface layers of the skin and stimulates an increase in collagen production.This non-invasive facial rejuvenation therapy provides excellent results for a range of skin conditions including:Softening fine lines and wrinklesSmoothing coarsely textured skinMaking skin softer and brighterReduction in noticeable age spots and skin pigmentationImproving enlarged and open pores.We also recommend microdermabrasion for acne scars. The diamond-tip microdermabrasion system we use at Tox Bar gently “sandblasts” the skin to strip blackheads from your pores and the suction removes remaining dead skin cells and particles that clog your pores.</p>
      </div>
      <div className={styles['wrap-rigth']}>
        <h3>Relax</h3>
        <img className={styles['crop-image'], styles['float-right']} src="https://i.ibb.co/FbNQvCP/Beautiful-young-woman-receiving-facial-mask-at-beauty-salon.jpg" alt="" />
        <p className={styles.introTo}>Enlarged and open pores.We also recommend microdermabrasion for acne scars. The diamond-tip microdermabrasion system we use at Tox Bar gently “sandblasts” the skin to strip blackheads from your pores and the suction removes remaining dead skin cells and particles that clog your pores and can cause breakouts. The treatment also leads to a reduction or elimination of mild acne scars. Microdermabrasion treatment promotes skin rejuvenation through the use of mechanical exfoliation which removes the dead and dull surface layers of the skin and stimulates an increase in collagen production.This non-invasive facial rejuvenation therapy provides excellent results for a range of skin conditions including:Softening fine lines and wrinklesSmoothing coarsely textured.</p>
      </div>
    </div>
  );
};
