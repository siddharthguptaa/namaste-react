import { useDispatch, useSelector } from "react-redux";
import ItemList from "./Common/ItemList";
import { clearCart } from "../Utils/Redux/Slices/CardSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center">
      <h1 className="font-bold text-xl  p-2 m-2">Cart</h1>
      <button className="m-2 p-2 bg-black text-white rounded-xl" onClick={handleClearCart} >Clear Cart</button>
      <div className="w-6/12 m-auto">
        {cartItems.length === 0 ? "Please add something to the cart" : <ItemList items={cartItems[0]} />}
      </div>
    </div>
  );
};

export default Cart;
