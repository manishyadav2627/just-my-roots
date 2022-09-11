import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataItemsType } from '../../data/DataType';
import { RootState } from '../../../store/Store';
import { addCartItem } from '../../../routes/cart/reducer/CartReducer';
import { setCounterModalVisible } from '../../../routes/listings/reducer/ListingReducer';

const Counter = ({ item }: { item: DataItemsType }) => {
  const [count, setCount] = useState(0);
  const { cartList } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const addToBagHandler = () => {
    if (count > 0) {
      console.log({ cartList });
      console.log({ item });
      const available = cartList?.filter((list) => list.id === item.id);
      if (available.length > 0) {
        alert('Product Already In Cart');
      } else {
        let modifiedDataObject = item;
        modifiedDataObject.quantity = count;
        dispatch(addCartItem(modifiedDataObject));
      }
    }
  };
  return (
    <div
      className="listing_modal flex_center"
      onClick={(e) => {
        e?.stopPropagation();
        dispatch(setCounterModalVisible(false));
      }}
    >
      <div
        className="counter"
        onClick={(e) => {
          e?.stopPropagation();
        }}
      >
        <button
          onClick={(e) => {
            e?.stopPropagation();
            setCount(count + 1);
          }}
          className="counter_btn flex_center"
        >
          +
        </button>
        <p className="counter_text">{count}</p>
        <button
          onClick={(e) => {
            e?.stopPropagation();
            setCount(count < 1 ? count : count - 1);
          }}
          className="counter_btn flex_center"
        >
          -
        </button>
        <button
          onClick={() => {
            addToBagHandler();
          }}
          className="counter_btn_bag flex_center"
        >
          Add to bag
        </button>
      </div>
    </div>
  );
};
export default Counter;
