import Grid from "../components/lib/Grid"
import Col from "../components/lib/Col"
import Row from "../components/lib/Row"
import BoughtItem from "../components/cartComponent/BoughtItem";
import { useEffect, useState } from "react";
import GetCart from "../components/Function/GetCart";
import DeleteCart from "../components/Function/DeleteCart";

function Cart() {
    const [danhsach, setDanhSach] = useState([]);

    useEffect(() => {
        GetCart(setDanhSach);
    }, []);

    const afterDelete = (idGioHang) => {
        setDanhSach(danhsach.map((value) => {
            if (value.id === idGioHang) {
                return { ...value, trangThai: false };
            }
            return value;
        }))
    }

    const huyDon = (idGioHang) => {
        DeleteCart(idGioHang, afterDelete);
    }
    return (
        <Grid>
            <Row>
                <Col myClass="mg_t40" pc={12} table={12} mobie={12}><h1>Sản phẩm đã mua</h1></Col>
            </Row>
            <Row>
                {
                    danhsach.map(value => (
                        <Col key={value.id} pc={3} table={6} mobie={12}>
                            <BoughtItem
                                key={value.id}
                                sachId={value.sachId}
                                biaSach={value.biaSach}
                                tenSach={value.tenSach}
                                soLuong={value.soLuong}
                                trangThai={value.trangThai}
                                huyDonFunc={() => huyDon(value.id)}
                            />
                        </Col>
                    ))
                }
            </Row>
        </Grid>
    )
}

export default Cart;