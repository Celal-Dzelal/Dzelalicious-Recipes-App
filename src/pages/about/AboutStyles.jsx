import styled from "styled-components";

export const AboutContainer = styled.div`
  /* bütün about */
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  height: calc(100% - 100px);
  color: #f9fafc;
  /*  Ekran yüksekliğiniz mesela 1000 piksel ise, öğenizin yüksekliği 900 piksele  eşit olacaktır.(1000 pikselin %100'ü ve eksi 100 piksel) */
  line-height: 2;
  span {
    color: #d64409;
    font-family: "Girassol", sans-serif;
    font-size: 3rem;
  }
`;
export const StyledImage = styled.img`
  width: 500px;
  margin-bottom: 2rem;
`;

export const HeaderContainer = styled.div`
  background-color: #0a5959;
  padding: 0 3rem;
  border-radius: 20px;
  margin-bottom: 1rem;
  border: 2px solid #d64409;
  box-shadow: 10px 10px 10px black;
`;

export const InfoContainer = styled.div`
  text-align: right;
  margin: 0 10px 10px 10px;
  max-width: 1000px;
  border: 2px solid #d64409;
  padding: 25px;
  border-radius: 20px;
  background-color: #0a5959;
  text-align: center;
  box-shadow: 10px 10px 10px black;
  /* a {
    color: orange;
  } */
`;
