import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.locofyHomePage}>
      <div className={styles.searchUpYour}>
        Search up your favorite recipes, learn to cook it, and enjoy!
      </div>
      <div className={styles.homeParent}>
        <div className={styles.home}>HOME</div>
        <div className={styles.history}>HISTORY</div>
        <div className={styles.searchbar}>
          <div className={styles.content}>
            <div className={styles.magnifyingglass}>
              <div className={styles.magnifyingglass1}>􀊫</div>
            </div>
            <div className={styles.placeholderLabel}>Search</div>
          </div>
        </div>
        <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
      </div>
      <img className={styles.image6Icon} alt="" src="/image-64@2x.png" />
      <img className={styles.image7Icon} alt="" src="/image-74@2x.png" />
      <div className={styles.searchbar1}>
        <div className={styles.content}>
          <div className={styles.magnifyingglass}>
            <div className={styles.magnifyingglass3}>􀊫</div>
          </div>
          <div className={styles.placeholderLabel1}>Search</div>
          <img className={styles.closeIcon} alt="" src="/-close.svg" />
        </div>
      </div>
      <img className={styles.image8Icon} alt="" src="/image-84@2x.png" />
      <img className={styles.image9Icon} alt="" src="/image-94@2x.png" />
      <img className={styles.image12Icon} alt="" src="/image-124@2x.png" />
      <img className={styles.image13Icon} alt="" src="/image-134@2x.png" />
      <img className={styles.image14Icon} alt="" src="/image-144@2x.png" />
      <img className={styles.image15Icon} alt="" src="/image-154@2x.png" />
      <div className={styles.locofyHomePageChild} />
    </div>
  );
};

export default Home;