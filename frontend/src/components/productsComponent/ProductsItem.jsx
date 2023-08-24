import style from './ProductsItem.module.scss';

import { Link } from 'react-router-dom';

function ProductsItem({ biaSach, tenSach, tacGia, to }) {

    return (
        <Link to={to} className={style.products_item}>
            <div className={style.wrap_img}>
                <div className={style.img} style={{backgroundImage: `url("${biaSach}")`}}/>
            </div>
            <div className='style_container'>
            <p className={style.name} style={{ marginBottom: '-10px' }}>{tenSach}</p>
            <p className={style.name} style={{ marginBottom: '40px' }}>{tacGia}</p>
            </div>
        </Link>
    )
}

export default ProductsItem;