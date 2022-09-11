import CommonModal from '../../common/modal/CommonModal';
import '../../common/assets/css/Product.scss';
import cart from '../../common/assets/images/cart.svg';
import { useNavigate } from 'react-router-dom';

const SingleProduct = () => {
  const navigation = useNavigate();
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
        <div></div>
        <div>
          <div>
            <p>Pure sun farms</p>
            <p>Indica blend</p>
            <div></div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters
            </p>
            <div></div>
          </div>
          <div></div>
        </div>
      </div>
    </CommonModal>
  );
};
export default SingleProduct;
