import React from "react";
import tarta from "../../image/tarta_card.jpg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardHighlights = ({ top }) => {
  return (
    <>
      <ContentAll>
        <Link to="/aproduct">
          <ImageCard src={tarta} alt="x" />
        </Link>
        <ContetCardDetails top={top}>
          <NameCard>nombre</NameCard>
          <ValueCard>valor</ValueCard>
        </ContetCardDetails>
      </ContentAll>
    </>
  );
};

//styled components

const ContentAll = styled.div`
  position: relative;
  z-index: 1;
  height: 16rem;
  width: 13rem;
  margin: 0.5rem auto;
  display: flex;
  flex-wrap: nowrap;
  &:hover {
    transition: transform 0.5s ease;
    transform: scale(1.1);
  }
`;

const ContetCardDetails = styled.div`
  font-family: "Josefin Sans", sans-serif;
  position: relative;
  z-index: 10;
  top: ${({ top }) => top};
  height: 20%;
  padding-bottom: 1rem;
  text-align: center;
  backdrop-filter: blur(30px);
  width: 13rem;
  border-radius: 0 0 9px 9px;
`;

const NameCard = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  margin-bottom: 0.1rem;
`;

const ValueCard = styled.p`
  margin: 0.3rem;
`;

const ImageCard = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
  object-fit: cover;
  border-radius: 10px;
`;

export default CardHighlights;
