package backend.entity;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class NhanXet implements Serializable{
	 @Id
	  @GeneratedValue(strategy=GenerationType.IDENTITY)
	  private Long id;
	  
	  private long soSao;
	  private String noiDung;
	  private long nguoiDungId;
	  private long sachId;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
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
	  
	  
}
