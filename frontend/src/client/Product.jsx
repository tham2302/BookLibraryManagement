import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ProductMain from '../components/productComponent/ProductMain';
import ProductBottom from '../components/productComponent/ProductBottom';
import { Fragment, useState } from 'react';
import GetBookById from '../components/Function/GetBookById';
function Product() {
    const { id } = useParams(); 
    const [sach, setSach] = useState({
        biaSach: "",
        tenSach: "",
        tacGia: "",
        theLoai: "",
        ngayPhatHanh: "",
        soTrang: 0,
        danhSachhBinhLuan: []
    });
    useEffect(()=>{
       GetBookById(id, setSach);
    }, [id]);

    return (
        <Fragment>
            <ProductMain 
            id={id}
            biaSach={sach.biaSach}
            tenSach={sach.tenSach}
            ></ProductMain>
        <ProductBottom 
        sachId={id}
        tacGia={sach.tacGia}
        theLoai={sach.theLoai}
        ngayPhatHanh={sach.ngayPhatHanh}
        soTrang={sach.soTrang}
        danhSachhBinhLuan={sach.dsNhanXet}
        moTa={sach.moTa}
        />
        </Fragment>
    )
}

export default Product;