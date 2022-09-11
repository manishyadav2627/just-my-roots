import { useNavigate } from 'react-router-dom';
import { DataItemsType } from '../../../common/data/DataType';
import dummyImg from '../../../common/assets/images/dummy.svg';

const CategoryItemRow = ({ item }: { item: DataItemsType }) => {
  const navigate = useNavigate();
  return (
    <div
      className="category_item_row"
      onClick={() => {
        console.log('parent');
        navigate(`/${item.id}`);
      }}
    >
      <div>
        <img src={dummyImg} className="category_item_row_img" alt="item" />
      </div>
      <div>
        <p className="category_item_row_farm">{item.farms}</p>
        <p className="category_item_row_name">{item.name}</p>
        <p className="category_item_row_price">{item.priceInDollarPerGram}</p>
      </div>
      <button type="button" className="category_item_row_btn">
        +
      </button>
    </div>
  );
};
export default CategoryItemRow;
