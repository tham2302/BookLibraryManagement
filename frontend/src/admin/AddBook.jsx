import { useParams } from 'react-router-dom';
import style from './AdminAdd.module.scss';
import { Fragment, useEffect, useReducer, useState } from 'react';
import { GetBookById } from './adminFunc/BookControl';
import reducer, { initState } from './reducer';
import { AddBook, EditBook } from './adminFunc/BookControl';
import defaultImage from '../asets/img/default.jpg';
function AdminAdd() {
    const { id } = useParams();
    const [addstate, setAddState] = useState(false);
    const input_state = !addstate && id;
    const [todos, dispatch] = useReducer(reducer, initState);
    const [image, setImage] = useState(null);
    const [isMissingFields, setIsMissingFields] = useState(false);
    const setBook = (value) => {
        dispatch({ type: "all", payload: value })
    }
    useEffect(() => {
        if (id) {
            GetBookById(id, setBook);
        }
        return () => {
            URL.revokeObjectURL(todos.biaSach);
        }
    }, [id, todos.biaSach]);
    const stateAddBook = () => {
        if (!addstate) {
            setAddState(true);
        } else {
            if (id) {
                EditBook(image, todos);
            } else {
                if (
                    todos.tenSach === "" ||
                    todos.tacGia === "" ||
                    todos.ngayPhatHanh === "" ||
                    todos.soTrang === ""
                ) {
                    setIsMissingFields(true);
                    return;
                }
                AddBook(image, todos);
            }
        }
    };
    
    const onHandeUploadImage = (file) => {
        if (file) {
            setImage(file);
            const urlImageUpload = URL.createObjectURL(file);
            dispatch({type: "biaSach", payload: urlImageUpload});
        }
    }
    return (
        <Fragment>

            <div className={`${style.AdminAdd} style_container`}>

                <div className={style.text_control}>
                    <div>
                        <label htmlFor="tieude">Tiêu đề</label>
                        <input disabled={input_state} value={todos.tenSach} onChange={(e) => dispatch({ type: "tenSach", payload: e.target.value })} id='tieude' type="text" required/>
                        {isMissingFields && todos.tenSach === "" && <p style={{ color: 'red' }} className={style.error}>Vui lòng điền trường Tiêu đề</p>}
                    </div>
                    <div>
                        <label htmlFor="tacgia">Tác giả</label>
                        <input disabled={input_state} value={todos.tacGia} onChange={(e) => dispatch({ type: "tacGia", payload: e.target.value })} id='tacgia' type="text" required/>
                        {isMissingFields && todos.tacGia === "" && <p style={{ color: 'red' }} className={style.error}>Vui lòng điền trường Tác giả</p>}
                    </div>
                    <div>
                        <label htmlFor="mota">Mô tả về sách</label>
                        <textarea disabled={input_state} value={todos.moTa} onChange={(e) => dispatch({ type: "moTa", payload: e.target.value })} name="" id="mota"></textarea>
                    </div>
                    <div>
                        <label htmlFor="ngayphathanh">Ngày phát hành</label>
                        <input disabled={input_state} value={todos.ngayPhatHanh} onChange={(e) => dispatch({ type: "ngayPhatHanh", payload: e.target.value })} id='tieude' type="date" />
                    </div>
                    <div>
                        <label htmlFor="sotrang">Số trang</label>
                        <input disabled={input_state} value={todos.soTrang} onChange={(e) => dispatch({ type: "soTrang", payload: e.target.value })} id='sotrang' type="number" required/>
                        {isMissingFields && todos.soTrang === "" && <p style={{ color: 'red' }} className={style.error}>Vui lòng điền trường Số trang</p>}
                    </div>
                    <div>
                        <label htmlFor="theloai">Thể loại</label>
                        <select disabled={input_state} value={todos.theLoai} onChange={(e) => dispatch({ type: "theLoai", payload: e.target.value })} name="" id="theloai">
                            <option value="Khoa học">Khoa học</option>
                            <option value="Văn học">Văn học</option>
                            <option value="Truyện cười">Truyện cười</option>
                            <option value="Kinh dị">Kinh dị</option>
                            <option value="Khoa Học - Viễn Tưởng">Khoa Học - Viễn Tưởng</option>
                            <option value="Tình Cảm">Tình Cảm</option>
                            <option value="Đạo Lý">Đạo Lý</option>
                            <option value="Làm Giàu">Làm Giàu</option>
                            <option value="Ẩm thực">Ẩm thực</option>
                            <option value="Du Lịch">Du Lịch</option>
                        </select>
                    </div>
                </div>

                <div className={style.upload_image}>
                    <label htmlFor="upload">Upload</label>
                    <input disabled={input_state} onChange={(e) => onHandeUploadImage(e.target.files[0])} id='upload' type="file" style={{ display: "none" }} />
                    {isMissingFields && todos.biaSach === "" && <p style={{ color: 'red' }} className={style.error}>Vui lòng thêm ảnh</p>}
                    <div style={{ backgroundImage: `url("${todos.biaSach ? todos.biaSach : defaultImage}")` }} className={style.image}></div>
                </div>
                <div className={style.add_book}>
                    <button onClick={stateAddBook}>{id ? (addstate ? "Save" : "Edit") : "Add"}</button>
                </div>
            </div>
        </Fragment>
    )
};
export default AdminAdd;