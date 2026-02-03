import { useSelector } from "react-redux";

const AddToCart = () => {
  const cartSelector = useSelector((state) => state.cart.items);

  // console.log(cartSelector, "selector");

  return (
    <div>
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6H19M7 13L5.4 5M19 19a2 2 0 11-4 0 2 2 0 014 0zm-10 0a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>

        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
          {cartSelector.length ? cartSelector.length : 0}
        </span>
      </div>
    </div>
  );
};

export default AddToCart;
