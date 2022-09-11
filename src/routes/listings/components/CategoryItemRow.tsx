import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../../store/Store';
import { setCounterModalVisible } from '../reducer/ListingReducer';
import Counter from './Counter';

const CategoryItemRow = () => {
  const manish = 'manish';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { counterModalVisible } = useSelector(
    (state: RootState) => state.listing
  );
  return (
    <div
      className="category_item_row"
      onClick={() => {
        console.log('parent');
        navigate(`/${manish}`);
      }}
    >
      {counterModalVisible && <Counter />}
      <div>
        <img src="" className="category_item_row_img" alt="item" />
      </div>
      <div>
        <p className="category_item_row_farm">Pure sun farms</p>
        <p className="category_item_row_name">Indica blend</p>
        <p className="category_item_row_price">$20</p>
      </div>
      <button
        type="button"
        onClick={(e) => {
          e?.stopPropagation();
          dispatch(setCounterModalVisible(true));
        }}
        className="category_item_row_btn"
      >
        +
      </button>
    </div>
  );
};
export default CategoryItemRow;
