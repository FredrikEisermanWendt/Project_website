import React from "react";
import NavBar from "../components/NavBar";
import netflixMovies from "../components/data/movies";
import Card from "../components/Card";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div>
        {netflixMovies.map((item) => {
          return (
            <Link>
              <Card items={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
