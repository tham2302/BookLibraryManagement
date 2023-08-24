package backend.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NguoiDungResponse {
    private String ten;

	public String getTen() {
		return ten;
	}

	public void setTen(String ten) {
		this.ten = ten;
	}
    
    
}
