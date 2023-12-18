import { useDispatch } from "react-redux";
import { addItem } from "../../Utils/Redux/Slices/CardSlice";
const ItemList = ({ items }) => {
 
 console.log(items);
  const dispatch = useDispatch();
  const handleAddItem = () => {
    //Dispatch an Action
    dispatch(addItem(items));
  };

  return (
    <div className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between">
      <div className="w-9/12">
        <h1 className="m-2 text-lg font-semibold">{items.email}</h1>
        <h1>
          Crispy on the outside and soft and fluffy on the inside, our ghee pudi
          masala dosas are roasted to perfection in pure nandini ghee. We serve
          this with a combination of chutney pudi and aloo palya on the inside
          and 2 types of chutneys and our signature drumstick sambar.
        </h1>
      </div>

      <div className="w-3/12 p-4 ">
        <div className="absolute  ">
          <button
            className="p-2 shadow-lg  mx-10 bg-black text-white rounded-lg"
            onClick={handleAddItem}
          >
            Add+
          </button>
        </div>
        <img src={items.avatar} alt="logo"></img>
      </div>
    </div>
  );
};

export default ItemList;
