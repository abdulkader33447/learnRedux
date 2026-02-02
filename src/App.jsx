import "./App.css";
import Header from "./Header";
import Product from "./Product";
import {useDispatch} from "react-redux";
import { clearItems } from "./redux/slice";

function App() {

  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <button onClick={() => dispatch(clearItems())} className=" mx-auto px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-5">
        Clear Cart
      </button>
      <Product />
    </>
  );
}

export default App;
