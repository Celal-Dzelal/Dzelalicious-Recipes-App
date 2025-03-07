import React from "react";
import AppRouter from "./router/AppRouter";
import RecipeProvider from "./context/RecipeProvider";
import AuthContext from "./context/AuthContext";

const App = () => {
  return (
    <div>
      <AuthContext>
        <RecipeProvider>
          <AppRouter />
        </RecipeProvider>
      </AuthContext>
    </div>
  );
};

export default App;
