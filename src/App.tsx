import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext";
import { ProductsProvider } from "./contexts/ProductsContext";
import { RoutesMain } from "./routes";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ProductsProvider>
          <RoutesMain />
        </ProductsProvider>
      </AuthProvider>

      <ToastContainer />
    </div>
  );
}

export default App;
