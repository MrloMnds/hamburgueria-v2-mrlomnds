import { useContext } from "react";
import trash from "../../img/trash.svg";
import { ProductsContext } from "../../contexts/ProductsContext";
import { StyledCartModal } from "./StyledCartModal";
import { StyledButton } from "../Buttons";

export const CartModal = () => {
  const { cart, setCart, totalPrice, setTotalPrice, modal, toggleModal } =
    useContext(ProductsContext);
  
  if (modal) {
    const removeProductFromCart = (id: string) => {
      setCart(cart.filter((element) => element.id + "" !== id));
    };
    setTotalPrice(cart.reduce((acc, current) => acc + current.price, 0));
    return (
      <StyledCartModal>
        <div className="modalContainer">
          <h2 className="title">Carrinho de compras</h2>
          <button className="closeButton" onClick={toggleModal}>
            X
          </button>
          {cart.length === 0 ? (
            <div className="divEmptyCart">
              <h2>Sua sacola está vazia</h2>
              <p>Adicione itens</p>
            </div>
          ) : (
            <div className="cartWithProducts">
              <ul>
                {cart.map(({ id, name, img }) => {
                  return (
                    <li key={id} id={id + ""}>
                      <div className="divCartImage">
                        <img src={img} alt={`imagem do produto ${name}`} />
                      </div>
                      <div className="divCartInfo">
                        <h3>{name}</h3>
                        <div>
                          <button>-</button>
                          <p>0</p>
                          <button>+</button>
                        </div>
                        <button
                          className="trashButton"
                          onClick={() => removeProductFromCart(id + "")}
                        >
                          <img src={trash} alt="lixo" />
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          <div className="divTotal">
            <h4>Total</h4>
            <p>R$ {totalPrice.toFixed(2)}</p>
          </div>
          <StyledButton
            className="removeAllProducts"
            buttonSize="default"
            buttonStyle="gray"
            onClick={() => setCart([])}
          >
            Remover todos
          </StyledButton>
        </div>
      </StyledCartModal>
    );
  }
  return <></>;
};
