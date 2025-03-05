import React from "react";
import {
  DetailContainer,
  DetailPart,
  HeaderContainer,
  ImgContainer,
  IngredContainer,
  OtherPart,
} from "./DetailsStyles";
import dietsvg from "../../assets/Diet.webp";
import { useLocation } from "react-router-dom";

const Details = () => {
  const {
    state: { recipe },
  } = useLocation();
  console.log(recipe);
  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{recipe.label} </h1>
        <img
          style={{
            cursor: "pointer",
            borderRadius: "50%",
            width: "10%",
            margin: "10px",
          }}
          src={dietsvg}
          alt=""
        />
      </HeaderContainer>

      <DetailPart>
        <OtherPart>
          <>Nutrients</>
          <span>
            {recipe.totalNutrients.CA.label}:
            {Math.round(recipe.totalNutrients.CA.quantity)}
            {recipe.totalNutrients.CA.unit}
          </span>
          <span>
            {recipe.totalNutrients.CHOLE.label}:
            {Math.round(recipe.totalNutrients.CHOLE.quantity)}
            {recipe.totalNutrients.CHOLE.unit}
          </span>
          <span>
            {recipe.totalNutrients.ENERC_KCAL.label}:
            {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}
            {recipe.totalNutrients.ENERC_KCAL.unit}
          </span>
          <span>
            {recipe.totalNutrients.CHOCDF.label}:
            {Math.round(recipe.totalNutrients.CHOCDF.quantity)}
            {recipe.totalNutrients.CHOCDF.unit}
          </span>
          <span>Total Weight: {Math.round(recipe.totalWeight)}</span>
          <span>Calories:{Math.round(recipe.calories)} </span>
          <span>
            {recipe.digest.slice(0, 4).map((item, index) => (
              <p key={index}>
                {item.label}: {Math.round(item.total)}
              </p>
            ))}
          </span>
        </OtherPart>

        <ImgContainer>
          <img src={recipe.image} alt="" />
        </ImgContainer>

        <IngredContainer>
          {recipe.ingredientLines.map((item, index) => (
            <div key={index}>
              <p>
                {index + 1} * {item}
              </p>
            </div>
          ))}
        </IngredContainer>
      </DetailPart>
    </DetailContainer>
  );
};

export default Details;
