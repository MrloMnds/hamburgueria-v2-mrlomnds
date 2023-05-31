import { useState, useContext } from "react";
import { iProduct } from "../../contexts/ProductsContext";
import { Container } from "../../components/Container";
import logo from "../../img/logo.svg";
import search from "../../img/search.svg";
import searchWhite from "../../img/searchWhite.svg";
import exit from "../../img/exit.svg";
import cartImg from "../../img/cart.svg";
import { HeaderMobile } from "../../components/Header";
import { Card } from "../../components/Card";
import { StyledButton } from "../../components/Buttons";
import { StyledList } from "../../components/StyledProductsList";
import { useNavigate } from "react-router-dom";
import {
  ProductsContext,
} from "../../contexts/ProductsContext";
import { CartModal } from "../../components/CartModal";
import { StyledSearchBar } from "../../components/SearchBar";

export const Dashboard = () => {
  const [searchBar, setSearchBar] = useState(false);
  const { cart, setCart, toggleModal, products } = useContext(ProductsContext);
  const navigate = useNavigate();

  const addProductToCart = (productData: iProduct) => {
    !cart.includes(productData) && setCart((cart) => [...cart, productData]);
  };

  const toggleSearchBar = () => {
    setSearchBar(!searchBar);
  };
  
  return (
    <>
      <HeaderMobile>
        <img src={logo} alt="logo burguer kenzie" />
        <div className="divButtonsHeader">
          <img
            src={search}
            alt="lupa para buscar itens"
            onClick={toggleSearchBar}
          />
          <div className="cartDiv" onClick={toggleModal}>
            <img src={cartImg} alt="carrinho de compras" />
            <div className="productsOnCart">
              <p>{cart?.length}</p>
            </div>
          </div>
          <img
            src={exit}
            alt="indicador de logout"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("userId");
              navigate("/login");
            }}
          />
        </div>
      </HeaderMobile>
      <Container>
        {searchBar && (
          <div className="divInput">
            <StyledSearchBar />
            <img src={searchWhite} alt="lupa para busca de itens" />
          </div>
        )}
        <StyledList>
          {products?.map(({ id, name, category, price, img }) => (
            <Card key={id} id={id + ""}>
              <div className="imgDiv">
                <img src={img + ""} alt={`Imagem do produto ${name}`} />
              </div>
              <div
                className="infoDiv"
                onClick={(event) => {
                  const tagLi = event.currentTarget.parentElement;

                  if ((event.target as Element).nodeName === "BUTTON") {
                    const currentProduct = products.filter(
                      (product) => product.id + "" === tagLi?.id
                    );
                    addProductToCart(currentProduct[0]);
                  }
                }}
              >
                <h3>{name}</h3>
                <p>{category}</p>
                <span>R$ {price.toFixed(2)}</span>
                <StyledButton
                  type="button"
                  buttonSize="medium"
                  buttonStyle="green"
                >
                  Adicionar
                </StyledButton>
              </div>
            </Card>
          ))}
        </StyledList>
        <CartModal />
      </Container>
    </>
  );
};
