package backend.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GioHangRequest {
	private long soLuong;
	private long sachId;
	public long getSoLuong() {
		return soLuong;
	}
	public void setSoLuong(long soLuong) {
		this.soLuong = soLuong;
	}
	public long getSachId() {
		return sachId;
	}
	public void setSachId(long sachId) {
		this.sachId = sachId;
	}
	
	
}
