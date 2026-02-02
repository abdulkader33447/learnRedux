import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./redux/slice";
import { fetchProducts } from "./redux/productSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const selectore = useSelector((state) => state.products.items?.products);
  console.log(selectore);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {selectore?.map((product) => (
        <div
          key={product.id}
          className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4 m-10 transition-transform duration-500 hover:scale-105">
          <img className="transition-transform duration-500 hover:scale-105" src={product.thumbnail} alt="mouse" />
          <p className="pt-1 px-2 bg-green-100 w-fit rounded-2xl">
            {product.category}
          </p>
          <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="flex items-center justify-between">
            <p className="pt-1 px-2 bg-amber-200 rounded-xl w-fit">
              Rating {product.rating}
            </p>
            <h2>${product.price}</h2>
          </div>
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
      ))}
      {/* <img
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
      </button> */}
    </div>
  );
};

export default Product;
