import React, { useRef } from "react";
import { ReactComponent as ArrowLeft } from "../../image/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../image/arrowRight.svg";
import styled from "styled-components";
import CardHighlights from "../home/CardHighlights";
import Navbar from "../navbar/navbar";
import profile from "../../image/profile.png";

const Favorites = () => {
  const slideshow = useRef(null);

  const siguiente = () => {
    if (slideshow.current.children.length > 0) {
      const primerElemento = slideshow.current.children[0];
      slideshow.current.style.transition = `200ms ease-out all`;
      const tamañoSlider = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlider}px)`;

      const transicion = () => {
        slideshow.current.style.transition = `none`;
        slideshow.current.style.transform = `translateX(0)`;
        slideshow.current.appendChild(primerElemento);

        slideshow.current.removeEventListener("transitionend", transicion);
      };

      slideshow.current.addEventListener("transitionend", transicion);
    }
  };

  const anterior = () => {
    if (slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];
      slideshow.current.insertBefore(
        ultimoElemento,
        slideshow.current.firstChild
      );

      slideshow.current.style.transition = `none`;
      const tamañoSlider = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlider}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `200ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <IconProfile src={profile} alt="imageProfile" />
      </div>
      <ContenedorPrincipal>
        {/* slideshow */}
        <ContenedorSlideShow ref={slideshow}>
          <Slide>
            <CardHighlights />
          </Slide>

          <Slide>
            <CardHighlights />
          </Slide>

          <Slide>
            <CardHighlights />
          </Slide>

          <Slide>
            <CardHighlights />
          </Slide>

          <Slide>
            <CardHighlights />
          </Slide>

          <Slide>
            <CardHighlights />
          </Slide>
        </ContenedorSlideShow>

        {/* controles */}
        <Controls>
          <Boton izquierdo onClick={anterior}>
            <ArrowLeft />
          </Boton>
          <Boton onClick={siguiente}>
            <ArrowRight />
          </Boton>
        </Controls>
      </ContenedorPrincipal>
    </div>
  );
};

//styled component

const ContenedorPrincipal = styled.div`
  margin: 0 auto;
  position: relative;
  z-index: 0;
  width: 100%;
  overflow-x: hidden;
  overflow-y: visible;
`;

const ContenedorSlideShow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: 0 auto;
  height: 30rem;
  width: 85%;
  align-items: center;
  overflow: hidden;
`;

const Slide = styled.div`
  width: 15rem;
  transition: 0.3s ease all;
  z-index: 9;
  margin-bottom: 3rem;
  img {
    width: 10rem;
    height: 20rem;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

const Controls = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  z-index: 15;
  pointer-events: none;
`;

const Boton = styled.button`
  pointer-events: all;
  background: none;
  border: none;
  width: 30px;
  outline: none;
  position: absolute;
  transition: 0.9s ease all;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    path {
      fill: #fff;
    }
  }
  path {
    filter: ${(props) =>
      props.izquierdo
        ? "drop-shadow(2px 0px 0px #fff)"
        : "drop-shadow(-2px 0px 0px #fff)"};
  }
  ${(props) => (props.izquierdo ? "right:570px" : "left:610px")}
`;

const IconProfile = styled.img`
  margin-left: 46%;
  width: 4rem;
`;

export default Favorites;
