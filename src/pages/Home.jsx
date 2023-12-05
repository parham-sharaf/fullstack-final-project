import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Logo from "../assets/image_5.svg";

const Home = () => {
  const [searchValue, setSearchValue] = useState(""); // State to hold the search value

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const handleSearchSubmit = () => {
    console.log("Searched value:", searchValue);
    fetch(`http://localhost:3001/searchRecipe?searchValue=${searchValue}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Received data:', data); // Log the received data
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
      });
  };


  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
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
              {/* Search bar input */}
              <input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={handleSearchChange}
              />
              {/* Search button */}
              <button type="submit" onClick={handleSearchSubmit}>
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.pageChild}>
          <div className={styles.searchUpYour}>
            Search up your favorite recipes, learn to cook it, and enjoy!
          </div>
          <div className={styles.searchbar1}>
            {/* Another search bar */}
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={handleSearchChange}
            />
            <button type="submit" onClick={handleSearchSubmit}>
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
