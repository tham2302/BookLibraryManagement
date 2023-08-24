package backend.entity;

import java.io.Serializable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import lombok.Data;

@Data
@Entity
public class GioHang implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private long soLuong;
	private long nguoiDungId;
	private long sachId;
	private boolean trangThai;
	
	public boolean getTrangThai() {
		return trangThai;
	}
	@PrePersist
	  void defaultValue() {
	    this.trangThai = true;
	  }
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public long getSoLuong() {
		return soLuong;
	}
	public void setSoLuong(long soLuong) {
		this.soLuong = soLuong;
	}
	public long getNguoiDungId() {
		return nguoiDungId;
	}
	public void setNguoiDungId(long nguoiDungId) {
		this.nguoiDungId = nguoiDungId;
	}
	public long getSachId() {
		return sachId;
	}
	public void setSachId(long sachId) {
		this.sachId = sachId;
	}
	public void setTrangThai(boolean trangThai) {
		this.trangThai = trangThai;
	}
	
}

