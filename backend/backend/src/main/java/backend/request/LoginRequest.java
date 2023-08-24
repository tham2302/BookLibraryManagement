package backend.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginRequest {
	private String email;
	private String matKhau;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMatKhau() {
		return matKhau;
	}
	public void setMatKhau(String matKhau) {
		this.matKhau = matKhau;
	}
	
	
}
