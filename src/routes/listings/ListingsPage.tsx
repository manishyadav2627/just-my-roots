import MainAppLayout from '../../common/components/layout/MainAppLayout';
import '../../common/assets/css/Listing.scss';
import SearchBar from './components/SearchBar';
import ListCategoryTab from './components/ListCategoryTab';
import CategoryItemRow from './components/CategoryItemRow';

const ListingsPage = () => {
  const searchHandler = (value: string) => {
    console.log({ value });
  };
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
        <ListCategoryTab category="mm" />
      </div>
      <div style={{ padding: 30, background: '#E5E5E5' }}>
        <CategoryItemRow />
        <CategoryItemRow />
        <CategoryItemRow />
        <CategoryItemRow />
        <CategoryItemRow />
        <CategoryItemRow />
        <CategoryItemRow />
        <CategoryItemRow />
      </div>
    </MainAppLayout>
  );
};
export default ListingsPage;
