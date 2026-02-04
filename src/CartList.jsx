import React from "react";
import { useSelector } from "react-redux";

const CartList = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between">
        <h1 className="text-3xl text-blue-700 font-bold mb-6">
          Your Cart List
        </h1>
        <span>{cartItems.length} Items</span>
      </div>

      {cartItems.length > 0 ? (
        <div className="space-y-4  border border-blue-100 p-4 rounded-lg shadow">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b-2 border-gray-200">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-20 h-20 object-cover"
              />

              <div className="flex-1">
                <h2 className="font-semibold text-xl">{item.title}</h2>
                <p className="font-semibold">{item.brand}</p>
                <p className="text-gray-600">Price: ${item.price}</p>
                {/* <p className="text-gray-600">
                  Quantity: {item.quantity}
                </p> */}
              </div>

              {/* <p className="font-bold text-blue-600">
                ${item.price * item.quantity}
              </p> */}
              <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-5 cursor-pointer">
                Remove
              </button>
            </div>
          ))}
          <h1 className="text-lg font-semibold">
            Total Price ${cartItems.reduce((sum, item) => sum + item.price, 0)}
          </h1>
        </div>
      ) : (
        <h2 className="text-gray-500 text-xl">No cart items yet</h2>
      )}
    </div>
  );
};

export default CartList;
