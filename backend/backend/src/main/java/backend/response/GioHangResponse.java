package backend.response;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class GioHangResponse {
	private long id;
	private long sachId;
	private String biaSach;
	private String tenSach;
	private long soLuong;
	private boolean trangThai;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getSachId() {
		return sachId;
	}
	public void setSachId(long sachId) {
		this.sachId = sachId;
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
	public long getSoLuong() {
		return soLuong;
	}
	public void setSoLuong(long soLuong) {
		this.soLuong = soLuong;
	}
	public boolean isTrangThai() {
		return trangThai;
	}
	public void setTrangThai(boolean trangThai) {
		this.trangThai = trangThai;
	}	
}
