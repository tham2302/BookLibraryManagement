import style from './BoughtItem.module.scss';
import CartItemBase from './CartItemBase';

function BoughtItem({ sachId, biaSach, tenSach, soLuong, trangThai, huyDonFunc }) {

    return (
        <CartItemBase
            sachId={sachId}
            biaSach={biaSach}
            tenSach={tenSach}
        >
            <span className={style.bought_span}>Số lượng: {soLuong}</span>
            <span className={style.bought_span}>Trạng thái: {trangThai ? "Đã đặt" : "Đã hủy"}</span>
            <button onClick={() => huyDonFunc()} className={style.choose} disabled={!trangThai}>Hủy đơn hàng</button>
        </CartItemBase>
    )
};

export default BoughtItem;