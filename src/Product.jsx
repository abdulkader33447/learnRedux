import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./redux/slice";

const Product = () => {
  const dispatch = useDispatch();

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4 m-10">
      <img
        src="https://assets.gadgetandgear.com/upload/media/logitech-mx-anywhere-3s-wireless-and-bluetooth-mouse713.jpeg"
        alt="mouse"
      />
      <h2 className="text-2xl font-bold mb-4">
        Logitech MX Anywhere 3S Rechargeable Compact Wireless Mouse
      </h2>
      <p className="text-gray-700 mb-4">
        This is a great product that you will love!
      </p>
      <button
        onClick={() => dispatch(addItem(1))}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Add to Cart
      </button>
      <button
        onClick={() => dispatch(removeItem(1))}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-5">
        Remove from Cart
      </button>
    </div>
  );
};

export default Product;
