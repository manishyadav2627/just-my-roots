import { useDispatch, useSelector } from 'react-redux';
import { projectData } from '../../../common/data/Data';
import { RootState } from '../../../store/Store';
import { setActiveTab } from '../reducer/ListingReducer';

const ListCategoryTab = () => {
  const { activeTab } = useSelector((state: RootState) => state.listing);
  const dispatch = useDispatch();
  return (
    <div className="category_nav">
      {projectData?.map((product) => (
        <button
          type="button"
          key={product.category}
          onClick={() => dispatch(setActiveTab(product.category))}
          className={` category_nav_item ${
            activeTab === product.category && 'category_nav_item_active'
          }`}
        >
          {product.category}
        </button>
      ))}
    </div>
  );
};
export default ListCategoryTab;
