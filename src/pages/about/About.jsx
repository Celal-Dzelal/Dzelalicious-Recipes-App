import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyles";
import codingSvg from "../../assets/profile-image.jpg";

const About = () => {
  return (
    <div>
      <AboutContainer>
        <StyledImage
          src={codingSvg}
          style={{
            borderRadius: "50%",
            marginTop: "1rem",
            width: "20%",
            boxShadow: "10px 10px 10px black",
            border: "2px solid #d64409",
          }}
          alt=""
        />

        <HeaderContainer>
          <h1>
            About Software Developer <span>Dzelal Zmajevic </span>
          </h1>
        </HeaderContainer>

        <InfoContainer>
          <h2>Hi, I'am Dzelal Zmajevic</h2>
          <h3>I’m currently learning Full-Stack Development Languages.</h3>
          <h4>I've already known JS, ReactJS, Python, Redux.</h4>
          {/* <h2>
            <a href="">Send email</a> :
          </h2> */}
          {/* whatsapp://tel:3216541234 */}
        </InfoContainer>
      </AboutContainer>
    </div>
  );
};

export default About;
