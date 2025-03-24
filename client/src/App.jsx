import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import InvoicesPage from "./pages/InvoicesPage";
import CustomerPage from "./pages/CustomerPage";
import StatsPage from "./pages/StatsPage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/auth/RegisterPage";
import LoginPage from "./pages/auth/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouteControl>
          <HomePage />
        </RouteControl>} />
        <Route path="/cart" element={<RouteControl>
          <CartPage />
        </RouteControl>
          } />
        <Route path="/invoices" element={<RouteControl>
          <InvoicesPage />
        </RouteControl>
        } />
        <Route path="/customers" element={<RouteControl>
          <CustomerPage />
        </RouteControl>
        } />
        <Route path="/stats" element={<RouteControl>
          <StatsPage />
        </RouteControl>} />
        <Route path="/products" element={<RouteControl>
          <ProductPage />
        </RouteControl>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

export const RouteControl = ({children}) => {
  if(localStorage.getItem("posUser")) {
    return children
  }else {
    return <Navigate to="/login" />
  }
}
