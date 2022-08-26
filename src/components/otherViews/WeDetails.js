import React from "react";
import styled from "styled-components";
import Navbar from "../navbar/navbar";
import iconCake from "../../image/iconCake.png";
import cupCakeIcon from "../../image/cupCakeIcon.png";

const WeDetails = () => {
  return (
    <ContentAll>
      <Navbar />
      <BodyWeDetails>
        <Title>Sobre Nosotros</Title>
        <Description>
          Excepteur est nulla do est. Laborum ipsum anim quis aute. Tempor
          deserunt laboris dolore dolore occaecat aliqua. Aute adipisicing sint
          cillum sunt amet veniam anim nostrud consequat. Duis proident
          reprehenderit eiusmod quis adipisicing nostrud Lorem sit laborum
          reprehenderit fugiat Lorem laboris. Reprehenderit veniam deserunt esse
          eiusmod. Excepteur est incididunt nulla commodo eiusmod ut ex
          incididunt tempor ipsum quis irure in eu occaecat consectetur. Laboris
        </Description>
        <IconCake left="10rem" src={iconCake} alt="iconCake" />
        <IconCupCake left="60rem" src={cupCakeIcon} alt="iconCake" />
      </BodyWeDetails>
    </ContentAll>
  );
};

const BodyWeDetails = styled.div`
  position: absolute;
`;

const IconCupCake = styled.img`
  top: 60%;
  left: ${(props) => props.left || "10rem"};
  position: absolute;
  z-index: 1;
  transform: rotate(20deg);
`;

const IconCake = styled.img`
  top: 60%;
  left: ${(props) => props.left || "10rem"};
  position: absolute;
  z-index: 1;
  transform: rotate(-20deg);
`;

const ContentAll = styled.div`
  height: 100vh;
  background: rgb(152, 56, 0);
  background: linear-gradient(
    0deg,
    rgba(152, 56, 0, 1) 0%,
    rgba(215, 104, 38, 1) 15%,
    rgba(236, 136, 77, 1) 23%,
    rgba(242, 192, 163, 1) 37%,
    rgba(251, 231, 220, 1) 50%,
    rgba(255, 255, 255, 1) 72%
  );
`;

const Title = styled.p`
  text-align: center;
  font-family: "Dancing Script", cursive;
  font-size: 3rem;
  font-weight: 600;
  color: #fff;
  text-shadow: 2px 2px 2px #403f3f;
  margin: 1.5rem auto;
`;

const Description = styled.p`
  text-align: center;
  width: 50%;
  margin: 0 auto;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.8rem;
  color: #fff;
  text-shadow: 2px 2px 2px #000;
  position: relative;
  z-index: 10;
`;

export default WeDetails;
