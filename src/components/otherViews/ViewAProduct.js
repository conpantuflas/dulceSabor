import React, { useRef } from "react";
import { ReactComponent as ArrowLeft } from "../../image/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../image/arrowRight.svg";
import styled from "styled-components";
import Navbar from "../navbar/navbar";
import img1 from "../../image/calugas_card.jpg";
import img2 from "../../image/tarta_card.jpg";
import img3 from "../../image/calugas_card.jpg";
import img4 from "../../image/tortaChocolate.jpg";

const ViewAProduct = () => {
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
    <All>
      <Navbar />
      <ContentSliderAndInfo>
        {/* slider */}
        <ContentAllSlider>
          <ContenedorPrincipal>
            {/* slideshow */}
            <ContenedorSlideShow ref={slideshow}>
              <Slide>
                <a href="https://www.google.com">
                  <img src={img1} alt="" />
                </a>
              </Slide>

              <Slide>
                <a href="https://www.google.com">
                  <img src={img2} alt="" />
                </a>
              </Slide>

              <Slide>
                <a href="https://www.google.com">
                  <img src={img3} alt="" />
                </a>
              </Slide>

              <Slide>
                <a href="https://www.google.com">
                  <img src={img4} alt="" />
                </a>
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
        </ContentAllSlider>
        {/* info */}
        <ContentInfo>
          <ProductName>Bombones</ProductName>
          <p>$3000</p>
          <TextAdd>Añadir a:</TextAdd>
          <ContentFavoriteAndShopping>
            <ContentIconFavorite>
              <p>Favoritos</p>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z" />
              </Svg>
            </ContentIconFavorite>
            <ContentIconShopping>
              <p>Shopping cart</p>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M16.53 7l-.564 2h-15.127l-.839-2h16.53zm-14.013 6h12.319l.564-2h-13.722l.839 2zm5.983 5c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm11.305-15l-3.432 12h-13.017l.839 2h13.659l3.474-12h1.929l.743-2h-4.195zm-6.305 15c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z" />
              </Svg>
            </ContentIconShopping>
          </ContentFavoriteAndShopping>
        </ContentInfo>
      </ContentSliderAndInfo>
      <ContentDetails>
        <h3>Detalles</h3>
        <p>
          Commodo ea enim elit sint excepteur. In tempor voluptate ut officia
          dolore cillum est cupidatat labore. Pariatur fugiat ullamco cillum
          dolor. Mollit aliquip ullamco enim enim voluptate ullamco enim nostrud
          culpa. Sint officia et aliquip commodo labore veniam aliquip ex duis
          occaecat nostrud ex. Aliquip occaecat cillum aute in anim. Amet fugiat
          id exercitation consequat. Qui consectetur proident laborum est suntS
        </p>
      </ContentDetails>
    </All>
  );
};

const All = styled.div`
  display: block;
`;

const ContentAllSlider = styled.div`
  overflow: hidden;
  width: 30%;
`;

const ContenedorPrincipal = styled.div`
  position: relative;
`;

const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: 0.3s ease all;
  z-index: 9;
  img {
    width: 400px;
    height: 300px;
    object-fit: cover;
    margin-top: 0;
    border-radius: 10px;
  }
`;

const ContenedorSlideShow = styled.div`
  display: flex;
  flex-wrap: nowrap;
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
  ${(props) => (props.izquierdo ? "right:166px" : "left:166px")}
`;

const ContentSliderAndInfo = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ContentInfo = styled.div`
  margin-left: 3rem;
`;

const ProductName = styled.h2`
  margin: 0;
  font-family: "Dancing Script", cursive;
  font-size: 2rem;
  font-weight: 200;
`;

const ContentFavoriteAndShopping = styled.div`
  display: flex;
`;

const ContentDetails = styled.div`
  margin-left: 3rem;
  margin: 2rem auto 0 auto;
  box-shadow: 2px 2px 10px gray;
  width: 75%;
  border-radius: 15px;
  font-family: "Josefin Sans", sans-serif;
  padding: 2rem;
  text-align: center;
`;

const ContentIconFavorite = styled.div`
  display: flex;
  background-color: red;
  width: 6rem;
  height: 1rem;
  color: #fff;
  fill: #fff;
  align-items: center;
  padding: 1rem;
  border-radius: 15px;
`;

const ContentIconShopping = styled.div`
  display: flex;
  background-color: green;
  width: 9rem;
  height: 1rem;
  margin-left: 1rem;
  color: #fff;
  fill: #fff;
  align-items: center;
  padding: 1rem;
  border-radius: 15px;
`;

const TextAdd = styled.p`
  margin-top: 9rem;
`;

const Svg = styled.svg`
  margin-left: 0.5rem;
`;

export default ViewAProduct;
