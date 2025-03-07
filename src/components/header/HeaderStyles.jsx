import styled from "styled-components";

export const HeaderContainer = styled.div`
  /* başlık ve 3 arama kutusunu taşıyan kutu TURUNCU */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background: #00adb5; */
  /* background: orange; */
`;

export const MainHeader = styled.h2`
  /* food app başlık */
  margin-top: 2rem;
  font-size: 3rem;
  color: #d64409;
  /* background-color: yellow; */
`;

export const FormContainer = styled.form`
  /* 3 arama kutusunun toplandığı kutu  MAVİ*/
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  /* ekran küçülünce sıkışmasınlar,alta geçsinler */
  justify-content: center;
  border: 2px solid white;
  border-radius: 5px;
  margin-top: 0;
  margin: 20px;
  padding: 0.5rem;
  background-color: #0a5959;
`;

export const FoodInput = styled.input`
  /* arama yapılacak ürünün yazıldığı input AÇIK MAVİ İNPUT*/
  height: 3rem;
  width: 15rem;
  border: none;
  border-radius: 3px;
  text-indent: 10px;
  /* yazı 10px içten başlasın */
  margin: 5px;
  font-size: 2rem;
  background-color: #f9fafc;
`;

export const Button = styled.button`
  /* search butonu GRİ*/
  /* background-color: #e1f1dd; */
  background-color: #f9fafc;

  padding: 5px;
  /* outline: none; */
  height: 3rem;
  border: none;
  margin: 5px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 2rem;
  &:hover {
    background-color: #d64409;
    transition: all 0.3s ease-in;
    border: 1px solid white;
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const Select = styled.select`
  /* breakfast yazan select */
  background-color: #f9fafc;

  border-radius: 3px;
  margin: 5px;
  padding: 5px;
  height: 3rem;
  border: none;
  font-size: 2rem;
`;
