package backend.request;

import java.sql.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BookRequest {
	  private long id;
	  private String tenSach;
	  private String tacGia;
	  private String theLoai;
	  private Date ngayPhatHanh;
	  private long soTrang;
	  private String moTa;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTenSach() {
		return tenSach;
	}
	public void setTenSach(String tenSach) {
		this.tenSach = tenSach;
	}
	public String getTacGia() {
		return tacGia;
	}
	public void setTacGia(String tacGia) {
		this.tacGia = tacGia;
	}
	public String getTheLoai() {
		return theLoai;
	}
	public void setTheLoai(String theLoai) {
		this.theLoai = theLoai;
	}
	public Date getNgayPhatHanh() {
		return ngayPhatHanh;
	}
	public void setNgayPhatHanh(Date ngayPhatHanh) {
		this.ngayPhatHanh = ngayPhatHanh;
	}
	public long getSoTrang() {
		return soTrang;
	}
	public void setSoTrang(long soTrang) {
		this.soTrang = soTrang;
	}
	public String getMoTa() {
		return moTa;
	}
	public void setMoTa(String moTa) {
		this.moTa = moTa;
	}
	  
	  
}
