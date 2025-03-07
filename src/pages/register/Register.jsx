import React, { useContext, useState } from "react";
import { AuthContextArea } from "../../context/AuthContext";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledInput,
} from "../login/LoginStyles";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const { createUser } = useContext(AuthContextArea);

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`;
    createUser(email, password, displayName);
  };
  return (
    <LoginContainer>
      <FormContainer>
        <Header>Register</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="firstName"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
          <StyledInput
            type="text"
            placeholder="lastName"
            required
            onChange={(e) => setLastName(e.target.value)}
          />
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
          <StyledButton type="submit">Register</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Register;
