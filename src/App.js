import "./App.css";
import { FiltersProvider } from "./contexts/FiltersContext";
import Products from "./pages/Products";

function App() {
  return (
    <FiltersProvider>
      <Products />
    </FiltersProvider>
  );
}

export default App;
