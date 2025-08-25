import axios from "axios";
import React, { createContext, useState } from "react";
import Error from "../assets/Error.webp";
import Loading from "../assets/Loading.webp";

export const RecipeContext = createContext();

const APP_ID = process.env.REACT_APP_APP_ID;
const APP_KEY = process.env.REACT_APP_APP_KEY;

const RecipeProvider = ({ children }) => {
  const [foods, setFoods] = useState([]);
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("Breakfast");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Updated API endpoint - use v2 recipes endpoint
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;

  const getData = async () => {
    setLoading(true);
    setError(false);

    try {
      const { data } = await axios.get(url);

      // Note: The response structure is different in v2 API
      setFoods(data.hits);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return (
      <img src={Error} alt="" style={{ width: "100vw", height: "100vh" }} />
    );
  }

  if (loading) {
    return (
      <img
        src={Loading}
        alt=""
        style={{ width: "100vw", height: "100vh" }}
      ></img>
    );
  }

  return (
    <RecipeContext.Provider
      value={{
        setQuery,
        setMealType,
        getData,
        foods,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
