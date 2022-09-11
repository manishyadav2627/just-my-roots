import CommonModal from '../../common/modal/CommonModal';
import '../../common/assets/css/Cart.scss';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigation = useNavigate();
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
          <div className="category_item_row">
            <div>
              <img src="" className="category_item_row_img" alt="item" />
            </div>
            <div>
              <p className="category_item_row_farm">Pure sun farms</p>
              <p className="category_item_row_name">Indica blend</p>
              <p className="category_item_row_price">$20</p>
            </div>
            <div className="cart_btn_counter">
              <button type="button" className="cart_btn" onClick={() => {}}>
                +
              </button>
              <p className="cart_btn_text">0</p>
              <button type="button" className="cart_btn" onClick={() => {}}>
                -
              </button>
            </div>
          </div>
          <div className="category_item_row">
            <div>
              <img src="" className="category_item_row_img" alt="item" />
            </div>
            <div>
              <p className="category_item_row_farm">Pure sun farms</p>
              <p className="category_item_row_name">Indica blend</p>
              <p className="category_item_row_price">$20</p>
            </div>
            <div className="cart_btn_counter">
              <button type="button" className="cart_btn" onClick={() => {}}>
                +
              </button>
              <p className="cart_btn_text">0</p>
              <button type="button" className="cart_btn" onClick={() => {}}>
                -
              </button>
            </div>
          </div>
          <div className="category_item_row">
            <div>
              <img src="" className="category_item_row_img" alt="item" />
            </div>
            <div>
              <p className="category_item_row_farm">Pure sun farms</p>
              <p className="category_item_row_name">Indica blend</p>
              <p className="category_item_row_price">$20</p>
            </div>
            <div className="cart_btn_counter">
              <button type="button" className="cart_btn" onClick={() => {}}>
                +
              </button>
              <p className="cart_btn_text">0</p>
              <button type="button" className="cart_btn" onClick={() => {}}>
                -
              </button>
            </div>
          </div>
          <div className="category_item_row">
            <div>
              <img src="" className="category_item_row_img" alt="item" />
            </div>
            <div>
              <p className="category_item_row_farm">Pure sun farms</p>
              <p className="category_item_row_name">Indica blend</p>
              <p className="category_item_row_price">$20</p>
            </div>
            <div className="cart_btn_counter">
              <button type="button" className="cart_btn" onClick={() => {}}>
                +
              </button>
              <p className="cart_btn_text">0</p>
              <button type="button" className="cart_btn" onClick={() => {}}>
                -
              </button>
            </div>
          </div>
        </div>
        <div className="cart_total">
          <p>Total:</p>
          <p className="cart_total_amount">$20</p>
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
