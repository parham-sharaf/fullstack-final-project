import { Link } from "react-router-dom";
import styles from "./Recipepage.module.css";
import { useLocation } from "react-router-dom";

import Logo from "../assets/image_5.svg"
import image23 from "../assets/image_23.jpg"
import imagedo from "../assets/image_20.jpg"

const RecipePage = () => {
  const location = useLocation();
  const recipesearch = location.state?.recipes || [];

  const ingredients = recipesearch.ingredients[0]
  const ingredientsArray = ingredients.split('. ');

  const instructons = recipesearch.instructions[0]
  const instructionsArray = instructons.split('. ');

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
          <div className={styles.recipeTitle}>{recipesearch.name}</div>
          <p className={styles.ingredients}>Ingredients:</p>
          <ul>
            {ingredientsArray.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
          <p className={styles.instructions}>Instructions:</p>
          <ol className={styles.instructionsList}>
          {instructionsArray.map((instruction, index) => (
        <li key={index}>{instruction}</li>
      ))}
          </ol>
        </div>
        <img className={styles.image23Icon} alt="" src={imagedo} />
      </div>
    </>
  );
};

export default RecipePage;
