import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RecipePage.module.css";

const RecipePage = () => {
  const navigate = useNavigate();

  const onHOMETextClick = useCallback(() => {
    navigate("/locofy-home-page");
  }, [navigate]);

  return (
    <div className={styles.locofyRecipePage}>
      <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
      <div className={styles.hamburger}>
        <p className={styles.ingredients}>Hamburger</p>
      </div>
      <div className={styles.ingredientsGroundBeefContainer}>
        <p className={styles.ingredients}>Ingredients:</p>
        <ul className={styles.groundBeefSaltPepperHambur}>
          <li className={styles.groundBeef}>Ground beef</li>
          <li className={styles.groundBeef}>Salt</li>
          <li className={styles.groundBeef}>Pepper</li>
          <li className={styles.groundBeef}>Hamburger buns</li>
        </ul>
        <p className={styles.ingredients}>&nbsp;</p>
        <p className={styles.ingredients}>Instructions:</p>
        <ul className={styles.groundBeefSaltPepperHambur}>
          <li className={styles.groundBeef}>Form Patties:</li>
        </ul>
        <ul className={styles.groundBeefSaltPepperHambur}>
          <li className={styles.groundBeef}>
            Take some ground beef and shape it into patties. Sprinkle a pinch of
            salt and pepper on each side.
          </li>
        </ul>
        <ul className={styles.groundBeefSaltPepperHambur}>
          <li className={styles.groundBeef}>Cook Patties:</li>
        </ul>
        <ul className={styles.groundBeefSaltPepperHambur}>
          <li className={styles.groundBeef}>
            Cook the patties in a pan on medium-high heat for about 3-4 minutes
            on each side. Adjust for your preferred doneness.
          </li>
        </ul>
        <ul className={styles.groundBeefSaltPepperHambur}>
          <li className={styles.groundBeef}>Toast Buns:</li>
        </ul>
        <ul className={styles.groundBeefSaltPepperHambur}>
          <li className={styles.groundBeef}>
            Toast the hamburger buns in the same pan or a toaster until slightly
            golden.
          </li>
        </ul>
        <ul className={styles.groundBeefSaltPepperHambur}>
          <li className={styles.groundBeef}>Assemble:</li>
        </ul>
        <ul className={styles.groundBeefSaltPepperHambur}>
          <li className={styles.groundBeef}>
            Place the cooked patties on the bottom half of each bun.
          </li>
          <li className={styles.groundBeef}>
            Add your favorite toppings (lettuce, tomato, onion, etc.).
          </li>
        </ul>
        <ul className={styles.groundBeefSaltPepperHambur}>
          <li className={styles.groundBeef}>Top with Other Bun Half:</li>
        </ul>
        <ul className={styles.groundBeefSaltPepperHambur}>
          <li className={styles.groundBeef}>
            Put the top half of the bun on each burger.
          </li>
        </ul>
        <ul className={styles.groundBeefSaltPepperHambur}>
          <li className={styles.groundBeef}>Serve:</li>
        </ul>
        <ul className={styles.groundBeefSaltPepperHambur}>
          <li>
            Your simple and delicious homemade hamburgers are ready to be
            enjoyed!
          </li>
        </ul>
      </div>
      <div className={styles.homeParent}>
        <div className={styles.home} onClick={onHOMETextClick}>
          HOME
        </div>
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
      <img className={styles.image16Icon} alt="" src="/image-16@2x.png" />
      <img className={styles.image16Icon} alt="" src="/image-16@2x.png" />
      <img
        className={styles.locofyRecipePageChild}
        alt=""
        src="/rectangle-1.svg"
      />
      <img className={styles.image21Icon} alt="" src="/image-21@2x.png" />
      <img className={styles.image23Icon} alt="" src="/image-23@2x.png" />
      <img className={styles.image19Icon} alt="" src="/image-19@2x.png" />
      <img className={styles.image20Icon} alt="" src="/image-20@2x.png" />
    </div>
  );
};

export default RecipePage;
