import { Link } from "react-router-dom";

import styles from "./Intro.module.css";

import IntroCircle from "../assets/introCircle.svg"

const Intro = () => {return (
        <Link className="HomeLink" to="/home">
            <div className={styles.locofyIntro}>
                <img className={styles.image24Icon} alt="" src={IntroCircle} />
            </div>
        </Link>
  );
};

export default Intro;
