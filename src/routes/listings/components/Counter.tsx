import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCounterModalVisible } from '../reducer/ListingReducer';

const Counter = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
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
        <button className="counter_btn_bag flex_center">Add to bag</button>
      </div>
    </div>
  );
};
export default Counter;
