import styles from './Home.module.css';



export const Home = () => {
  return (
    <div className={styles['wrap-home']}>
      <h1>Welcome to <span className={styles['beauty-font']}> Beauty Zone </span></h1>
      <p className={styles.intro}>
        Beauty Zone has newest and best technologies which garantee stable, long and unbelievable results.
        Our cosmetics and specialists have medical degrees.
        Here you will receive Calm, Relax, Professionalism, Personal attention at good price. 
        Thank YOU choosing us!
      </p>

      <div className={styles['display-info-1']}>
        <h3 className={styles['display-info-header']}>Comfort</h3>
        <img className={styles['crop-image']} src="https://i.ibb.co/pQYk8jP/1.png" alt="" />
        <p className={styles.introTo}>Microdermabrasion treatment promotes skin rejuvenation through the use of mechanical exfoliation which removes the dead and dull surface layers of the skin and stimulates an increase in collagen production.This non-invasive facial rejuvenation therapy provides excellent results for a range of skin conditions including:Softening fine lines and wrinklesSmoothing coarsely textured skinMaking skin softer and brighterReduction in noticeable age spots and skin pigmentationImproving enlarged and open pores.We also recommend microdermabrasion for acne scars. The diamond-tip microdermabrasion system we use at Tox Bar gently “sandblasts” the skin to strip blackheads from your pores and the suction removes remaining dead skin cells and particles that clog your pores.</p>
      </div>
      <div className={styles['display-info-2']}>
        <h3 className={styles['display-info-header']}>Relax</h3>
        <img className={styles['crop-image'], styles['float-right']} src="https://i.ibb.co/FbNQvCP/Beautiful-young-woman-receiving-facial-mask-at-beauty-salon.jpg" alt="" />
        <p className={styles.introTo}>Enlarged and open pores.We also recommend microdermabrasion for acne scars. The diamond-tip microdermabrasion system we use at Tox Bar gently “sandblasts” the skin to strip blackheads from your pores and the suction removes remaining dead skin cells and particles that clog your pores and can cause breakouts. The treatment also leads to a reduction or elimination of mild acne scars. Microdermabrasion treatment promotes skin rejuvenation through the use of mechanical exfoliation which removes the dead and dull surface layers of the skin and stimulates an increase in collagen production.This non-invasive facial rejuvenation therapy provides excellent results for a range of skin conditions including:Softening fine lines and wrinklesSmoothing coarsely textured.</p>
      </div>
    </div>
  );
};
