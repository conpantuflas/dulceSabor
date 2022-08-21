import React, { useRef } from "react";
import { ReactComponent as ArrowLeft } from "../../image/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../image/arrowRight.svg";

import styled from "styled-components";
import img1 from "../../image/pasteles.jpg";
import img2 from "../../image/macarron.jpg";
import img3 from "../../image/tortaChocolate.jpg";

const HomeSlider = () => {
  const slideshow = useRef(null);

  const siguiente = () => {
    if (slideshow.current.children.length > 0) {
      const primerElemento = slideshow.current.children[0];
      slideshow.current.style.transition = `300ms ease-out all`;
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
        slideshow.current.style.transition = `300ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  return (
    <ContenedorPrincipal>
      {/* slideshow */}
      <ContenedorSlideShow ref={slideshow}>
        <Slide>
          <img src={img1} alt="" />
          <div>
            <Pragraph fontSize="2.2rem" width="22rem" color="#8c0101" top="20%">
              Ven a probar nuestaras delicias de dulce sabor, todo elaborado con
              dedicacion y cariño al arte de cocinar
            </Pragraph>
            <Click
              top="63%"
              marginLeft="-30rem"
              background="#8c0101 "
              borderHover="#8c0101"
              colorHover="#8c0101"
            >
              Ver más
            </Click>
          </div>
        </Slide>

        <Slide>
          <img src={img2} alt="" />
          <div>
            <Pragraph
              fontSize="2.6rem"
              width="25rem"
              marginLeft="60%"
              top="15%"
            >
              Batir con amor, Hornear con pasion, Decorar con el corazon.
            </Pragraph>
            <Click
              top="50%"
              marginLeft="16%"
              background="#a9de6b"
              borderHover="#a9de6b"
              colorHover="#a9de6b"
            >
              Ver más
            </Click>
          </div>
        </Slide>

        <Slide>
          <img src={img3} alt="" />
          <div>
            <Pragraph
              fontSize="3rem"
              width="18rem"
              marginLeft="15%"
              color="#fff"
              top="30%"
            >
              Es un placer ser tu placer
            </Pragraph>
            <Click
              top="60%"
              marginLeft="-34%"
              background="#d98105"
              borderHover="#d98105"
              colorHover="#d98105"
            >
              Ver más
            </Click>
          </div>
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
  );
};

const ContenedorPrincipal = styled.div`
  position: absolute;
  z-index: 0;
`;

const ContenedorSlideShow = styled.div`
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
`;

const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: 0.3s ease all;
  z-index: 9;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    margin-top: 0;
  }
`;

const Controls = styled.div`
  position: absolute;
  top: 50%;
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
  ${(props) => (props.izquierdo ? "right:600px" : "left:600px")}
`;

const Pragraph = styled.p`
  position: absolute;
  top: ${(props) => props.top || "30%"};
  z-index: 15;
  font-size: ${(props) => props.fontSize};
  font-family: "Josefin Sans", sans-serif;
  color: ${(props) => props.color || "#fff"};
  width: ${(props) => props.width};
  margin-left: ${(props) => props.marginLeft || "7rem"};
  background: ${(props) => props.background || "none"};
`;

const Click = styled.button`
  position: absolute;
  top: ${(props) => props.top || "70%"};
  z-index: 15;
  width: 15rem;
  height: 2.5rem;
  margin-left: ${(props) => props.marginLeft || "8rem"};
  border: none;
  font-size: 1.1rem;
  background: ${(props) => props.background || "gray"};
  color: #fff;

  &:hover {
    background: none;
    border: 2px solid ${(props) => props.borderHover};
    color: ${(props) => props.colorHover};
  }
`;

export default HomeSlider;
