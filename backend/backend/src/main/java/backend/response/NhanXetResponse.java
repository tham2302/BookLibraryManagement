package backend.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NhanXetResponse {
	private long id;
	private long soSao;
	private String noiDung;
	private String tenNguoiNhanXet;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getSoSao() {
		return soSao;
	}
	public void setSoSao(long soSao) {
		this.soSao = soSao;
	}
	public String getNoiDung() {
		return noiDung;
	}
	public void setNoiDung(String noiDung) {
		this.noiDung = noiDung;
	}
	public String getTenNguoiNhanXet() {
		return tenNguoiNhanXet;
	}
	public void setTenNguoiNhanXet(String tenNguoiNhanXet) {
		this.tenNguoiNhanXet = tenNguoiNhanXet;
	}
	
	
}
