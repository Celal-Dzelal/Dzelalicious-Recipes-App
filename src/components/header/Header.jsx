import React, { useContext } from "react";
import { RecipeContext } from "../../context/RecipeProvider";
import {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
  Select,
} from "./HeaderStyles";

const Header = () => {
  const { setQuery, setMealType, getData } = useContext(RecipeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <HeaderContainer>
      <MainHeader>🍕 Dzelalicious</MainHeader>
      <FormContainer onSubmit={handleSubmit}>
        <FoodInput
          type="text"
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">Search</Button>
        <Select
          name="mealTypes"
          id="mealTypes"
          onChange={(e) => setMealType(e.target.value)}
        >
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Teatime">TeaTime</option>
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
