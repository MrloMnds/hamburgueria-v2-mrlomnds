import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { AuthContext } from "./AuthContext";

interface iProductsProviderValues {
  cart: iProduct[];
  setCart: React.Dispatch<React.SetStateAction<iProduct[]>>;
  totalPrice: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  modal: boolean;
  toggleModal: () => void;
  products: iProduct[];
  setProducts: React.Dispatch<React.SetStateAction<iProduct[]>>;
  loadingProducts: boolean;
}
interface iProductsProviderProps {
  children: React.ReactNode;
}
export interface iProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export const ProductsContext = createContext({} as iProductsProviderValues);

export const ProductsProvider = ({ children }: iProductsProviderProps) => {
  const [cart, setCart] = useState([] as iProduct[]);
  const [products, setProducts] = useState<iProduct[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [modal, setModal] = useState(false);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const { loading, user } = useContext(AuthContext);

  const toggleModal = () => {
    setModal(!modal);
  };

  const getProducts = async (): Promise<iProduct[]> => {
    const token = localStorage.getItem("token");
    const { data } = await api.get<iProduct[]>("products", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return data;
  };

  useEffect(() => {
    const getProductsData = async () => {
      try {
        const response = await getProducts();
        setProducts(response);
      } catch (error) {
      } finally {
        setLoadingProducts(false);
      }
    };

    getProductsData();
  }, [user]);

  if (loading) {
    return null;
  }
  return (
    <ProductsContext.Provider
      value={{
        cart,
        setCart,
        totalPrice,
        setTotalPrice,
        modal,
        toggleModal,
        products,
        setProducts,
        loadingProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
