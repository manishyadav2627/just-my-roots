import { useState } from 'react';
import search from '../../../common/assets/images/search.svg';

const SearchBar = ({
  searchHandler,
}: {
  searchHandler: (value: string) => void;
}) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div style={{ position: 'relative', maxWidth: 316, margin: 'auto' }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="search">
          <input
            type="text"
            name="search"
            id="search"
            onChange={({ target: { value } }) => setInputValue(value)}
            placeholder="Search Here"
            value={inputValue}
            className="search_bar"
          />
        </label>
      </form>
      <button
        type="button"
        onClick={() => searchHandler(inputValue)}
        style={{
          position: 'absolute',
          top: 15,
          right: 20,
          width: 18,
        }}
      >
        <img src={search} alt="search-bar" />
      </button>
    </div>
  );
};
export default SearchBar;
