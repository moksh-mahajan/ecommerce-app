import "./App.css";
import { FiltersProvider } from "./contexts/FiltersContext";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Mockman from "mockman-js";

function App() {
  return (
    <FiltersProvider>
      <Cart />
      {/* <Products /> */}
    </FiltersProvider>
  );
}

export default App;
