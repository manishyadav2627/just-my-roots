import MainAppLayout from '../../common/components/layout/MainAppLayout';
import '../../common/assets/css/Listing.scss';
import SearchBar from './components/SearchBar';
import ListCategoryTab from './components/ListCategoryTab';
import CategoryItemRow from './components/CategoryItemRow';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setActiveTab } from './reducer/ListingReducer';
import { RootState } from '../../store/Store';
import { DataItemsType } from '../../common/data/DataType';
import { projectData } from '../../common/data/Data';

const ListingsPage = () => {
  const [listOfProducts, setListOfProducts] = useState<DataItemsType[] | []>(
    []
  );
  const { activeTab } = useSelector((state: RootState) => state.listing);

  const searchHandler = (value: string) => {
    if (value === '') {
      activeTabListHandler();
      return;
    }
    const searchedItems = listOfProducts.filter((data) =>
      data.name.includes(value)
    );
    setListOfProducts(searchedItems);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (!activeTab) {
      dispatch(setActiveTab(projectData[0].category));
    }
  }, []);

  const activeTabListHandler = () => {
    const filteredList = projectData.filter(
      (data) => data.category === activeTab && data.items
    );
    setListOfProducts(filteredList[0]?.items);
  };
  useEffect(() => {
    activeTabListHandler();
  }, [activeTab]);
  return (
    <MainAppLayout>
      <div
        className="w_full"
        style={{
          padding: '0 30px',
        }}
      >
        <SearchBar searchHandler={searchHandler} />
      </div>
      <div style={{ paddingTop: 8 }}>
        <ListCategoryTab />
      </div>
      <div style={{ padding: 30, background: '#E5E5E5' }}>
        {listOfProducts.length === 0 && <h1>Oops!! no products found</h1>}
        {listOfProducts?.map((item) => (
          <CategoryItemRow item={item} key={item.id} />
        ))}
      </div>
    </MainAppLayout>
  );
};
export default ListingsPage;
