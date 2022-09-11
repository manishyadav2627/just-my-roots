import CommonModal from '../../common/modal/CommonModal';
import '../../common/assets/css/Cart.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/Store';
import { modifyQuantityInCart, removeCartItem } from './reducer/CartReducer';
import { useEffect, useState } from 'react';
import dummyImg from '../../common/assets/images/dummy.svg';

const Cart = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { cartList } = useSelector((state: RootState) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);
  const totalValueHandler = () => {
    const result = cartList?.reduce((prev, current) => {
      return prev + current.quantity * +current.priceInDollarPerGram;
    }, 0);
    setTotalAmount(result);
  };
  useEffect(() => {
    totalValueHandler();
  }, [cartList]);
  return (
    <CommonModal>
      <div className="cart">
        <div className="cart_nav">
          <button
            type="button"
            style={{ fontWeight: 700, fontSize: 30 }}
            onClick={() => navigation('/')}
          >
            &#8592;
          </button>
          <p>Your bag</p>
        </div>
        <div className="cart_items">
          {cartList.length === 0 && <h1>Oops!! no items in your cart</h1>}
          {cartList?.map((item) => (
            <div
              className="category_item_row"
              style={{ position: 'relative' }}
              key={item.id}
            >
              <div>
                <img
                  src={dummyImg}
                  className="category_item_row_img"
                  alt="item"
                />
              </div>
              <div>
                <p className="category_item_row_farm">{item.farms}</p>
                <p className="category_item_row_name">{item.name}</p>
                <p className="category_item_row_price">
                  ${item.priceInDollarPerGram}
                </p>
              </div>
              <div className="cart_btn_counter">
                <button
                  type="button"
                  className="cart_btn"
                  onClick={() => {
                    let value = item.quantity + 1;
                    dispatch(
                      modifyQuantityInCart({ id: item.id, count: value })
                    );
                  }}
                >
                  +
                </button>
                <p className="cart_btn_text"> {item.quantity}</p>
                <button
                  type="button"
                  className="cart_btn"
                  onClick={() => {
                    if (item.quantity > 0) {
                      let value = item.quantity - 1;
                      dispatch(
                        modifyQuantityInCart({ id: item.id, count: value })
                      );
                    }
                  }}
                >
                  -
                </button>
              </div>
              <button
                type="button"
                className="cart_items_delete"
                onClick={() => {
                  dispatch(removeCartItem(item.id));
                }}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
        <div className="cart_total">
          <p>Total:</p>
          <p className="cart_total_amount">${totalAmount}</p>
        </div>
        <button
          className="cart_create_acc flex_center"
          onClick={() => navigation('/')}
        >
          Create an account
        </button>
      </div>
    </CommonModal>
  );
};
export default Cart;
