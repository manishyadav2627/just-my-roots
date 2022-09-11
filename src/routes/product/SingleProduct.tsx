import CommonModal from '../../common/modal/CommonModal';
import '../../common/assets/css/Product.scss';
import cart from '../../common/assets/images/cart.svg';
import { useNavigate } from 'react-router-dom';
import dummy from '../../common/assets/images/dummy.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/Store';
import { projectData } from '../../common/data/Data';
import { addCartItem } from '../cart/reducer/CartReducer';

const SingleProduct = () => {
  const navigation = useNavigate();
  const { activeTab } = useSelector((state: RootState) => state.listing);
  const { cartList } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const productId = window.location.href.split('/')?.reverse()[0];
  console.log({ productId });
  const currentIndex = projectData.findIndex(
    (data) => data.category === activeTab
  );
  const singleItem = projectData[currentIndex]?.items.filter(
    (product) => product.id === +productId
  );
  const addToBagHandler = () => {
    if (count > 0) {
      const available = cartList?.filter((list) => list.id === +productId);
      if (available.length > 0) {
        alert('Product Already In Cart');
      } else {
        if (singleItem[0]) {
          let modifiedDataObject = singleItem[0];
          modifiedDataObject.quantity = count;
          dispatch(addCartItem(modifiedDataObject));
        }
      }
    }
  };
  return (
    <CommonModal>
      <div className="product">
        <div className="product_nav">
          <button
            type="button"
            style={{ fontWeight: 900, fontSize: 20 }}
            onClick={() => navigation('/')}
          >
            &larr;
          </button>
          <button type="button" onClick={() => navigation('/cart')}>
            <img src={cart} alt="cart" />
          </button>
        </div>
        <div className="product_img_cont">
          <img src={dummy} alt="dummy" />
        </div>
        <div className="product_desc">
          <div style={{ width: '100%' }}>
            <p className="product_desc_farms">Pure sun farms</p>
            <p className="product_desc_name">Indica blend</p>
            <div></div>
            <p className="product_desc_info">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters
            </p>
            <div className="product_counter">
              <div className="product_counter_btns">
                <button
                  type="button"
                  className="product_counter_btns_increment"
                  onClick={() => setCount(count + 1)}
                >
                  <p>+</p>
                </button>
                <p className="cart_btn_text"> {count} </p>
                <button
                  type="button"
                  onClick={() => {
                    setCount(count < 1 ? count : count - 1);
                  }}
                  className="product_counter_btns_increment"
                >
                  <p style={{ marginBottom: '3px' }}>-</p>
                </button>
              </div>
              <div style={{ display: 'flex', columnGap: '6px' }}>
                <p className="product_desc_name">$20</p>
                <p className="product_desc_farms">/GRAM</p>
              </div>
            </div>
          </div>
          <div className="product_add_to_bag">
            <div className="product_add_to_bag_left">
              <p className="product_desc_farms">TOTAL:</p>
              <p className="product_desc_name">$20</p>
            </div>
            <button
              className="product_add_to_bag_btn"
              type="button"
              onClick={() => addToBagHandler()}
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </CommonModal>
  );
};
export default SingleProduct;
