import style from './Admin.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { checkAdminLogin } from '../components/Function/Token';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { adminlogout, getAdminName} from './adminFunc/AdminControl';
import { useEffect, useState } from 'react';
import { DeleteBook, GetAllBook } from './adminFunc/BookControl';
import ShowDate from '../components/Function/ShowDate';
function Admin() {
    const adminlogin = checkAdminLogin();
    const [danhSach, setDanhSach] = useState([]);
    const [adminName, setAdminName] = useState("Người dùng")
    const navigate = useNavigate();
    const afterAdminLogout = () => {
        navigate("/admin");
    }
    const afterDeleteBook = (sachId)=>{
        setDanhSach(danhSach.filter((value)=> value.id !== sachId));
    }
    const deleteBook = (sachId)=>{
        DeleteBook(sachId, afterDeleteBook);
    }
    useEffect(() => {
        GetAllBook(setDanhSach);
        getAdminName(setAdminName);
    }, [])
    return (
        <div className={style.admin}>
            <header className='style_container'>
                <h1>xin chào: <span>{adminName}</span></h1>
                {
                    adminlogin
                        ?  <button className='btn btn-primary btn-lg' onClick={() => adminlogout(afterAdminLogout)}><FiLogOut />đăng xuất</button>
                        : <Link to={"/admin/login"}> <button className='btn btn-primary btn-lg' ><FiLogIn/>đăng nhập</button></Link>
                }
            </header>
            <h2 style={{ marginTop: '20px' }}>Quản Lý Sách</h2>
            {
                adminlogin
                    ? <Link to={`/admin/add`} className={style.add_book_button}>Add Book</Link>
                    : ""
            }
            <div className={`${style.admin_body} style_container`}>
                <table>
                    <thead>
                        <tr>
                            <th>Tiêu đề</th>
                            <th>Tác giả</th>
                            <th>Thể loại</th>
                            <th>Ngày phát hành</th>
                            <th>Số trang</th>
                            <th>Số lượng đã bán</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            danhSach.map((value) => (
                                <tr key={value.id}>
                                    <td>{value.tenSach}</td>
                                    <td>{value.tacGia}</td>
                                    <td>{value.theLoai}</td>
                                    <td>{ShowDate(value.ngayPhatHanh)}</td>
                                    <td>{value.soTrang}</td>
                                    <td>{value.soLuongDaBan}</td>
                                    {
                                        adminlogin
                                            ? <td>
                                                <Link to={`/admin/add/${value.id}`} className={style.body_button}>View</Link>
                                                <button onClick={()=>deleteBook(value.id)} className={style.body_button}>DELETE</button>
                                            </td>
                                            : <td></td>
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
           <footer>
           <div style={{ marginTop: '30px' }}>
           <p>&copy; Nguyễn Trung Kiên-B20DCCN357</p>
           </div>
           </footer>
        </div>    
    )
}
export default Admin;