import React, { useContext } from "react";
import Header from "../../components/header/Header";
import { RecipeContext } from "../../context/RecipeProvider";
import chief from "../../assets/home.jpeg";
import { HomeImg, ImgDiv } from "./HomeStyles";
import RecipeCard from "./RecipeCard";

const Home = () => {
  const { foods } = useContext(RecipeContext);

  return (
    <div>
      <Header />
      {foods.length > 0 ? (
        <div>
          <RecipeCard />
        </div>
      ) : (
        <ImgDiv>
          <HomeImg src={chief} alt="" />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;
