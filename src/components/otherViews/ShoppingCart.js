import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import image from "../../image/coctel_card.jpg";
import styled from "styled-components";
import cartShopping from "../../image/cartShopping.png";

const ShoppingCart = () => {
  const [trash, setTrash] = useState(false);
  return (
    <div>
      <Navbar />
      <ShoppingCartImage src={cartShopping} alt="shoppingCart" />
      {/*principal card*/}
      <PrincipalContent>
        {/*a element*/}
        <ContentProduct>
          <ImageCart src={image} alt="x" />
          <div>
            <NameProduct>Nombre</NameProduct>
            <ValueProduct>$0000</ValueProduct>
          </div>
          <div>
            {trash != false ? (
              // tapa
              <Trash
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                onMouseLeave={() => setTrash(false)}
              >
                <path d="M3 8v16h18v-16h-18zm5 12c0 .552-.448 1-1 1s-1-.448-1-1v-8c0-.552.448-1 1-1s1 .448 1 1v8zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-8c0-.552.448-1 1-1s1 .448 1 1v8zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-8c0-.552.448-1 1-1s1 .448 1 1v8zm4-15.375l-.409 1.958-19.591-4.099.409-1.958 5.528 1.099c.881.185 1.82-.742 2.004-1.625l5.204 1.086c-.184.882.307 2.107 1.189 2.291l5.666 1.248z" />
              </Trash>
            ) : (
              //este se muestra al comienzo
              <Trash
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                onMouseEnter={() => setTrash(true)}
              >
                <path d="M19.5 15c-2.484 0-4.5 2.015-4.5 4.5s2.016 4.5 4.5 4.5c2.482 0 4.5-2.015 4.5-4.5s-2.018-4.5-4.5-4.5zm2.5 5h-5v-1h5v1zm-2-16h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711v2zm-7 15.5c0-1.267.37-2.447 1-3.448v-6.052c0-.552.447-1 1-1s1 .448 1 1v4.032c.879-.565 1.901-.922 3-1.006v-7.026h-18v18h13.82c-1.124-1.169-1.82-2.753-1.82-4.5zm-7 .5c0 .552-.447 1-1 1s-1-.448-1-1v-10c0-.552.447-1 1-1s1 .448 1 1v10zm5 0c0 .552-.447 1-1 1s-1-.448-1-1v-10c0-.552.447-1 1-1s1 .448 1 1v10z" />
              </Trash>
            )}
          </div>
        </ContentProduct>
        <div>
          <ContentTotal>
            <p>Total:</p>
            <p>$5.000</p>
          </ContentTotal>
          <Pay>pagar</Pay>
        </div>
      </PrincipalContent>
    </div>
  );
};

const PrincipalContent = styled.div`
  box-shadow: 2px 10px 16px gray;
  border-radius: 15px;
  width: 50%;
  min-height: 20rem;
  margin: 0 auto;
  padding-top: 1rem;
`;

const ImageCart = styled.img`
  width: 5rem;
  height: 5rem;
  margin: 1rem;
  border-radius: 15px;
`;

const ContentProduct = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  /* background: rgb(255, 255, 255); */
  background: linear-gradient(
    141deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(245, 176, 122, 0.8407738095238095) 78%,
    rgba(255, 119, 0, 0.7791491596638656) 100%
  );
  border-radius: 15px;
  margin: 1rem;
`;

const ContentTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem;
`;

const NameProduct = styled.p`
  margin: 1rem;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.5rem;
`;

const ValueProduct = styled.p`
  font-family: "Dancing Script", cursive;
  margin: 0 0 0 2rem;
`;

const Trash = styled.svg`
  margin: 2.5rem 1rem 1rem 1rem;
`;

const Pay = styled.button`
  width: 100%;
  background-color: #ff7700;
  font-size: 1.7rem;
  border: none;
  color: #fff;
  font-family: "Josefin Sans", sans-serif;
  padding: 1rem;
  &:hover {
    background: rgb(255, 119, 0);
    background: radial-gradient(
      circle,
      rgba(255, 119, 0, 1) 0%,
      rgba(148, 187, 233, 1) 68%,
      rgba(255, 255, 255, 1) 100%
    );
  }
`;

const ShoppingCartImage = styled.img`
  width: 4rem;
  margin-left: 46%;
`;

export default ShoppingCart;
