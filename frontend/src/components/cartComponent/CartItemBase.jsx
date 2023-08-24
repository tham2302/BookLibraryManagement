import style from './CartItemBase.module.scss';
import { Link } from 'react-router-dom';

function CartItemBase({sachId, biaSach, tenSach, children}) {

    return (
        <div className={style.cart_item}>
            <div className={style.cart_img} style={{ backgroundImage: `url(${biaSach})` }}></div>
            <div className={style.cart_text}>
                <Link className={style.ten_san_pham} to={`/product/${sachId}`}>{tenSach}</Link>
                {children}
            </div>
        </div>
    )
};

export default CartItemBase;