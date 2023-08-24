import {useState } from 'react';
import style from './ProductBottom.module.scss';
import { FaStar } from 'react-icons/fa';
import Grid from '../lib/Grid';
import Row from '../lib/Row';
import Col from '../lib/Col';
import ShowDate from '../Function/ShowDate';
function ProductBottom({ sachId, tacGia, theLoai, ngayPhatHanh, soTrang, danhSachhBinhLuan, moTa }) {
    const [luaChon, setLuaChon] = useState(0);
    const [star, setStar] = useState(5);
    return (
        <Grid myClass='mg_bt40'>
            <Row>
                <Col pc={12} table={12} mobie={12}>
                    
                    <button className={`${style.the_tren} ${luaChon === 0 ? style.focus_lua_chon : ""}`} onClick={() => setLuaChon(0)}>Mô Tả</button>
                    <button className={`${style.the_tren} ${luaChon === 1 ? style.focus_lua_chon : ""}`} onClick={() => setLuaChon(1)}>Đánh Giá</button>
                    <div className={style.conntainer}>
                        {
                            luaChon === 0
                                ?
                                <div className={style.mo_ta}>
                                    <p>Tác giả: {tacGia}</p>
                                    <p>Thể loại: {theLoai}</p>
                                    <p>Ngày phát hành: {ShowDate(ngayPhatHanh)}</p>
                                    <p>Số trang: {soTrang}</p>
                                    <p>Mô tả: {moTa}</p>
                                </div>
                                :
                                <div>
                                    <Grid myClass={style.them_binh_luan} checkWide={false}>
                                        <Row>
                                            <Col pc={12} table={12} mobie={12}>
                                                <label htmlFor="">Đánh giá của bạn :</label>
                                                <div className={style.list_star}>
                                                    <span className={star === 1 ? style.choose_star : ""} onClick={() => setStar(1)}><FaStar /></span>
                                                    <span className={star === 2 ? style.choose_star : ""} onClick={() => setStar(2)}><FaStar /><FaStar /></span>
                                                    <span className={star === 3 ? style.choose_star : ""} onClick={() => setStar(3)}><FaStar /><FaStar /><FaStar /></span>
                                                    <span className={star === 4 ? style.choose_star : ""} onClick={() => setStar(4)}><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                                    <span className={star === 5 ? style.choose_star : ""} onClick={() => setStar(5)}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                                </div>
                                            </Col>
                                        </Row>
                                    
                                        <Row myClass='mg_t20'>
                                            <Col pc={12} table={12} mobie={12}>
                                                <label htmlFor="">Bình Luận:</label>
                                                <textarea className={style.cho_noi_dung} placeholder='Nhận xét...' type="email"/>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col myClass='mg_t20 mg_bt40' pc={12} table={12} mobie={12}>
                                                <button className={style.gui_di} >Thêm Bình luận</button>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </div>
                        }
                    </div>
                </Col>
            </Row>
        </Grid>
    )
}

export default ProductBottom;