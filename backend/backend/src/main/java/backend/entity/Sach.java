package backend.entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.io.Serializable;
import java.sql.Date;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
public class Sach implements Serializable{
	  @Id
	  @GeneratedValue(strategy=GenerationType.IDENTITY)
	  private Long id;
	  
	  private String biaSach;
	  private String tenSach;
	  private String tacGia;
	  private String theLoai;
	  private String moTa;
	  private Date ngayPhatHanh;
	  private long soTrang;
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getBiaSach() {
			return biaSach;
		}
		public void setBiaSach(String biaSach) {
			this.biaSach = biaSach;
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
		public String getMoTa() {
			return moTa;
		}
		public void setMoTa(String moTa) {
			this.moTa = moTa;
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
		  
		  
	}

