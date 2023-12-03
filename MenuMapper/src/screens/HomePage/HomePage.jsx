import React from "react";
import { SearchBar } from "../../components/SearchBar";
import "./style.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <p className="p">Search up your favorite recipes, learn to cook it, and enjoy!</p>
          <div className="overlap-group">
            <img className="group" alt="Group" src="/img/group-192.png" />
            <div className="overlap-group-2">
              <img className="image" alt="Image" src="/img/image-7.png" />
              <img className="img" alt="Image" src="/img/image-8.png" />
              <img className="image-2" alt="Image" src="/img/image-12.png" />
              <img className="image-3" alt="Image" src="/img/image-13.png" />
              <img className="image-4" alt="Image" src="/img/image-15.png" />
            </div>
            <div className="overlap-2">
              <img className="image-5" alt="Image" src="/img/image-9.png" />
              <img className="image-6" alt="Image" src="/img/image-14.png" />
            </div>
          </div>
          <img className="image-7" alt="Image" src="/img/image-6.png" />
          <SearchBar className="search-bar-instance" clearIcon mic={false} state="default" topbar={false} />
        </div>
      </div>
    </div>
  );
};
