import React from "react";

import Jumbotron from "../component/Jumbotron.jsx";
import Cards from "../component/Cards.jsx";
import Navbar from "./Navbar.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Cards />

      <div className="card-footer bg-dark text-light text-center py-5">
        CopyRight © your Website 2022
      </div>
    </>
  );
};

export default Home;
