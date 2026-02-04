import "./App.css";
import CartList from "./CartList";
import Header from "./Header";
import Product from "./Product";

// import { useDispatch } from "react-redux";
// import { clearItems } from "./redux/slice";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  // const dispatch = useDispatch();

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Product />}/>
          <Route path="/cart" element={<CartList />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
