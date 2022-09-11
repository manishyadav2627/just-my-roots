import { useState } from 'react';

const ListCategoryTab = ({ category }: { category: string }) => {
  const [active, setActive] = useState(0);
  const data = ['manish', 'manishj', 'manishk', 'manishl'];
  return (
    <div className="category_nav">
      {data?.map((category, index) => (
        <button
          type="button"
          key={category}
          onClick={() => setActive(index)}
          className={` category_nav_item ${
            active === index && 'category_nav_item_active'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
export default ListCategoryTab;
