package backend.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NhanXetRequest {
	private long soSao;
	private String noiDung;
	private long sachId;
	
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
	public long getSachId() {
		return sachId;
	}
	public void setSachId(long sachId) {
		this.sachId = sachId;
	}
	
	
}
