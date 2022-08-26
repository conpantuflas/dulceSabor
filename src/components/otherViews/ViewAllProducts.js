import React from "react";
import Navbar from "../navbar/navbar";
import styled from "styled-components";
import CardHighlights from "../home/CardHighlights";

const ViewAllProducts = () => {
  return (
    <div>
      <Navbar />
      {/*filtro*/}
      <ContentForm>
        <ContentSelect>
          <NameFilter>Productos</NameFilter>
          <Selector nameProduct="select">
            <option value="tortas">Tortas</option>
            <option value="tortasSinAzucar">Tortas sin azucar</option>
            <option value="pastelitos">Pastelitos</option>
            <option value="chocolates">Chocolates</option>
            <option value="galletasYDulces">Galletas y dulces</option>
            <option value="tartas">Tartas</option>
            <option value="tartasSinAzucar">Tartas sin azucar</option>
          </Selector>
        </ContentSelect>
        <ContentSelect>
          <NameFilter>Precio</NameFilter>
          <Selector namePrice="select">
            <option value="menor-mayor">Menor a Mayor</option>
            <option value="mayor-menor">Mayor a Menor</option>
          </Selector>
        </ContentSelect>
        <Boton>Aplicar</Boton>
      </ContentForm>
      <div>
        <CategoryName>Nombre productos</CategoryName>
        <ContentAllProducts>
          <CardHighlights top={"75.5%"} />
          <CardHighlights top={"75.5%"} />
          <CardHighlights top={"75.5%"} />
          <CardHighlights top={"75.5%"} />
          <CardHighlights top={"75.5%"} />
          <CardHighlights top={"75.5%"} />
          <CardHighlights top={"75.5%"} />
          <CardHighlights top={"75.5%"} />
          <CardHighlights top={"75.5%"} />
          <CardHighlights top={"75.5%"} />
          <CardHighlights top={"75.5%"} />
          <CardHighlights top={"75.5%"} />
        </ContentAllProducts>
      </div>
    </div>
  );
};

const ContentForm = styled.form`
  box-shadow: 2px 2px 5px gray;
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  border-radius: 15px;
`;

const ContentSelect = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Selector = styled.select`
  height: 2rem;
  border: 1px solid #ff7710;
  border-radius: 15px;
  outline: none;
  background: none;
  margin: 2rem;
  font-family: "Josefin Sans", sans-serif;
  cursor: pointer;
`;

const Boton = styled.button`
  background-color: #ff7710;
  color: #fff;
  border: none;
  border-radius: 0 15px 15px 0;
  width: 13%;
  font-family: "Dancing Script", cursive;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    transition: width 0.5s ease;
    width: 15%;
    font-family: "Josefin Sans", sans-serif;
    background: rgb(255, 119, 0);
    background: radial-gradient(
      circle,
      rgba(255, 119, 0, 1) 0%,
      rgba(148, 187, 233, 1) 68%,
      rgba(255, 255, 255, 1) 100%
    );
  }
`;

const NameFilter = styled.p`
  display: flex;
  align-items: center;
  font-family: "Josefin Sans", sans-serif;
  margin-left: 1rem;
  font-weight: 500;
  font-size: 1.4rem;
  cursor: default;
`;

const ContentAllProducts = styled.div`
  width: 80%;
  min-height: 57rem;
  box-shadow: 2px 2px 5px gray;
  border-radius: 16px;
  margin: 0 auto 5rem auto;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 33% 33% 33%;
`;

const CategoryName = styled.p`
  text-align: center;
  padding: 1rem 0;
  font-size: 2rem;
  font-family: "Dancing Script", cursive;
`;

export default ViewAllProducts;
