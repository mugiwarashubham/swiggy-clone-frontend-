import { useSelector, useDispatch } from "react-redux";
import { IncrementItems, DecrementItems } from "../store/CartSlicer";

export default function Checkout() {
  const items = useSelector((state) => state.cartslice.items);
  const dispatch = useDispatch();

  return (
    <div className="max-w-lg mx-auto bg-white min-h-screen p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h1>

      {items.length === 0 && (
        <p className="text-gray-500 text-center mt-20">Cart is empty!</p>
      )}

      {items.map((item) => (
        <div key={item.id} className="flex w-full justify-between mb-2 pb-2 border-b border-gray-100">
          <div className="w-[70%]">
            <p className="text-xl text-gray-700 font-semibold mb-1">{item?.name}</p>
            <p className="text-lg">{"₹" + ("defaultPrice" in item ? item?.defaultPrice / 100 : item?.price / 100)}</p>
            <span className="text-green-700">{item?.ratings?.aggregatedRating?.rating}</span>
            <span>{"(" + item?.ratings?.aggregatedRating?.ratingCountV2 + ")"}</span>
            <p className="text-sm text-gray-500">{item?.description}</p>
          </div>

          <div className="w-[20%] relative">
            <img className="w-full h-36 object-cover rounded-3xl"
              src={"https://media-assets.swiggy.com/swiggy/image/upload/" + item.imageId}
              alt={item.name} />
            <div className="absolute bottom-1 left-20 flex gap-3 text-2xl text-green-600 px-6 py-2 shadow-md border border-white bg-white rounded-2xl">
              <button onClick={() => dispatch(DecrementItems(item))}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(IncrementItems(item))}>+</button>
            </div>
          </div>
        </div>
      ))}

      {items.length > 0 && (
        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between text-xl font-bold text-gray-800">
            <span>Total</span>
            <span>₹{items.reduce((acc, item) => {
              const price = "defaultPrice" in item ? item.defaultPrice / 100 : item.price / 100;
              return acc + price * item.quantity;
            }, 0).toFixed(2)}</span>
          </div>
          <button className="w-full mt-4 bg-green-600 text-white text-xl font-semibold py-3 rounded-2xl">
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}