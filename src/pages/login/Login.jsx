import React, { useContext, useState } from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";
import mealSvg from "../../assets/meal.svg";
import { Link } from "react-router-dom/dist";
import { AuthContextArea } from "../../context/AuthContext";
const Login = () => {
  const { loginUser } = useContext(AuthContextArea);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg} />

        <Header>Dzelalicious Recipes</Header>

        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="email"
            placeholder="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <StyledInput
            type="password"
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
        <Link to="/register">Not registered? Sign up.</Link>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
