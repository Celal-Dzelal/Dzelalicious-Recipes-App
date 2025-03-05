import axios from "axios";
import React, { createContext, useState } from "react";

export const RecipeContext = createContext();

const APP_ID = "bfbb3efc";
const APP_KEY = "43faeee790f26cd82b28050d3031619d";

const RecipeProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("username") || "");
  const [pass, setPass] = useState(localStorage.getItem("password") || "");

  const [foods, setFoods] = useState([]);
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("Breakfast");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;

  const getData = async () => {
    const { data } = await axios.get(url);
    setFoods(data.hits);
  };

  return (
    <RecipeContext.Provider
      value={{
        setQuery,
        setMealType,
        getData,
        foods,
        setUser,
        setPass,
        user,
        pass,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
