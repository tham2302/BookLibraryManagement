const initState = {
    sachId: 0,
    biaSach: "",
    tenSach: "",
    tacGia: "",
    moTa: "",
    ngayPhatHanh: "1997-1-1",
    soTrang: "",
    theLoai: "1",
}

const reducer = (state, action) => {

    switch (action.type) {
        case "all":
            return {
                ...state,
                sachId: action.payload.id,
                biaSach: action.payload.biaSach,
                tenSach: action.payload.tenSach,
                tacGia: action.payload.tacGia,
                theLoai: action.payload.theLoai,
                ngayPhatHanh: action.payload.ngayPhatHanh,
                soTrang: action.payload.soTrang,
                moTa: action.payload.moTa
            }
        case "tenSach":
            return { ...state, tenSach: action.payload }
        case "tacGia":
            return { ...state, tacGia: action.payload }
        case "moTa":
            return { ...state, moTa: action.payload }
        case "ngayPhatHanh":
            return { ...state, ngayPhatHanh: action.payload }
        case "soTrang":
            return { ...state, soTrang: action.payload }
        case "theLoai":
            return { ...state, theLoai: action.payload }
        case "biaSach":
            return { ...state, biaSach: action.payload }
        default:
            console.error("no action");
    }
};

export default reducer;
export { initState };