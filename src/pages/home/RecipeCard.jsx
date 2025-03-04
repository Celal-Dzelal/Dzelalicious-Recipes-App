import React, { useContext } from "react";
import { RecipeContext } from "../../context/RecipeProvider";
import {
  Button,
  Cards,
  MainContainer,
  RecipeHeader,
  RecipeImage,
} from "./HomeStyles";
import { useNavigate } from "react-router-dom";

const RecipeCard = () => {
  const { foods } = useContext(RecipeContext);
  const navigate = useNavigate();
  return (
    <MainContainer>
      {foods.map(({ recipe }) => (
        <Cards key={recipe.calories}>
          <RecipeHeader>{recipe.label}</RecipeHeader>
          <RecipeImage src={recipe.image} />
          <Button onClick={() => navigate("/details", { state: { recipe } })}>
            Details
          </Button>
        </Cards>
      ))}
    </MainContainer>
  );
};

export default RecipeCard;
