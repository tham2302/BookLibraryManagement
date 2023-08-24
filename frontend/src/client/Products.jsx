import Grid from '../components/lib/Grid';
import Col from '../components/lib/Col';
import Row from '../components/lib/Row';
import ProductsListItem from "../components/productsComponent/ProductsListItem";
import { checkUserLogin, removeUserToken } from '../components/Function/Token';
import ClientLogin from './ClientLogin';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import GetAllBook from '../components/Function/GetAllBook';
import { Link } from 'react-router-dom';
function Products() {
    const [danhsach, setDanhSach] = useState([]);

    useEffect(()=>{
        GetAllBook(setDanhSach);
    }, []);
    
    const logout = ()=>{
        removeUserToken();
        window.location.reload();
    }
    return (
        <div className="products">
            {
                checkUserLogin()
                    ? <Grid myClass="mg_t40">
                        <Row>
                            <Col myClass="" pc={15} table={12} mobie={12}>
                            <div style={{ marginBottom: '10px', width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                            <button className='btn btn-primary btn-medium' style={{ width: '150px',height:'30px' }} title='Đăng xuất' onClick={logout}><FiLogOut />đăng xuất</button>
                            </div>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                            <Link to={"/cart"}> <button className='btn btn-primary btn-medium' style={{ width: '150px',height:'30px' }} title='Giỏ hàng'><AiOutlineShoppingCart/>đơn hàng</button></Link>
                            </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col myClass="" pc={12} table={12} mobie={12}>
                                <ProductsListItem title={"Danh sách sách"} danhsach={danhsach} />
                            </Col>
                        </Row>
                    </Grid>
                    : <ClientLogin />
            }
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <p>&copy; Nguyễn Trung Kiên-B20DCCN357</p>
</div>

        </div>
    )
}

export default Products;