import Grid from '../lib/Grid';
import Row from '../lib/Row';
import Col from '../lib/Col';
import style from './ProductMain.module.scss';
import { useState } from 'react';
import BuyBook from '../Function/BuyBook';
function ProductMain({ id, biaSach, tenSach }) {
 const [soLuongMua, setSoLuongMua] = useState(1);
    const muaSach = () => {
        BuyBook(soLuongMua, id);
    }
    return (
        <Grid myClass='mg_t40'>
            <Row>
                <Col pc={6} table={6} mobie={12}>
                    <div className={style.anh_dai_dien} style={{ backgroundImage: `url("${biaSach}")` }}></div>
                </Col>
                <Col pc={6} table={6} mobie={12}>
                    <div className={style.tieu_de}>
                        <h1>{tenSach}</h1>
                    </div>
                    <div className={style.so_luong_mua}>
                        <button
                            onClick={() => { if (soLuongMua > 1) { setSoLuongMua(soLuongMua - 1); } }}>-</button>
                        <span>{soLuongMua}</span>
                        <button onClick={() => setSoLuongMua(soLuongMua + 1)}>+</button>
                    </div>
                    <button onClick={muaSach} className={style.btn}>Mua sách</button>
                </Col>
            </Row>
        </Grid>
    )
}
export default ProductMain;