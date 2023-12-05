import { Link } from "react-router-dom";
import styles from "./history.module.css";

import Logo from "../assets/image_5.svg"
import image23 from "../assets/image_23.jpg"

const HistoryPage = () => {

  return (
    <>
      <div className={styles.homeParent}>
        <img className={styles.image5Icon} alt="" src={Logo} />
        <Link className="HomeLink" to="/home">
          <div className={styles.home}>HOME</div>
        </Link>
        <Link className="HomeLink" to="/history">
          <div className={styles.history}>HISTORY</div>
        </Link>
        <div className={styles.searchbar}>
          <div className={styles.content}>
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      </div>
      <div className={styles.recipePage}>
        <div className={styles.recipeText}>
          <div className={styles.recipeTitle}>Hamburger</div>
          <p className={styles.ingredients}>Ingredients:</p>
          <ul className={styles.ingredientList}>
            <li>Ground beef</li>
            <li>Salt</li>
            <li>Pepper</li>
            <li>Hamburger buns</li>
          </ul>
          <p className={styles.instructions}>Instructions:</p>
          <ol className={styles.instructionsList}>
            <li className={styles.bulletPt}>Form Patties:</li>
            <li className={styles.bulletPt}>
              Take some ground beef and shape it into patties. Sprinkle a pinch of
              salt and pepper on each side.
            </li>
            <li className={styles.bulletPt}>Cook Patties:</li>
            <li className={styles.bulletPt}>
              Cook the patties in a pan on medium-high heat for about 3-4 minutes
              on each side. Adjust for your preferred doneness.
            </li>
            <li className={styles.bulletPt}>Toast Buns:</li>
            <li className={styles.bulletPt}>
              Toast the hamburger buns in the same pan or a toaster until slightly
              golden.
            </li>
            <li className={styles.bulletPt}>Assemble:</li>
            <li className={styles.bulletPt}>
              Place the cooked patties on the bottom half of each bun.
            </li>
            <li className={styles.bulletPt}>
              Add your favorite toppings (lettuce, tomato, onion, etc.).
            </li>
            <li className={styles.bulletPt}>Top with Other Bun Half:</li>
            <li className={styles.bulletPt}>
              Put the top half of the bun on each burger.
            </li>
            <li className={styles.bulletPt}>Serve:</li>
            <li>
              Your simple and delicious homemade hamburgers are ready to be
              enjoyed!
            </li>
            <p/>
            <p/>
          </ol>
        </div>
        <img className={styles.image23Icon} alt="" src={image23} />
      </div>
    </>
  );
};

export default HistoryPage;