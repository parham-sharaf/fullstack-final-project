import { Link } from "react-router-dom";

import styles from "./Home.module.css";

import Logo from "../assets/image 5.svg"

const Home = () => {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className={styles.locofyHomePage}>
      <div className={styles.homeParent}>
        <img className={styles.image5Icon} alt="" src={Logo} />
        <Link className="HomeLink" to="/home">
          <div className={styles.home}>HOME</div>
        </Link>
        <Link className="HomeLink" to="/recipes">
          <div className={styles.history}>HISTORY</div>
        </Link>
        <div className={styles.searchbar}>
          <div className={styles.content}>
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      </div>
      
      <div className={styles.pageChild}>
        <div className={styles.searchUpYour}>
          Search up your favorite recipes, learn to cook it, and enjoy!
        </div>
        <div className={styles.searchbar1}>
          <input type="text" placeholder="Search..." />
          <button type="submit"><i className="fa fa-search"></i></button>
        </div>
      </div>
    </div>
    </> 
  );
};

export default Home;