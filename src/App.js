import "./App.css";
import { FiltersProvider } from "./contexts/FiltersContext";
import logo from "./logo.png";
import Products from "./pages/products";

function App() {
  return (
    <FiltersProvider>
      <Products />
    </FiltersProvider>
  );
}

export default App;
