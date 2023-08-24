package backend.response;	
import java.util.ArrayList;
import java.util.List;
import backend.entity.Sach;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SachVaNhanXet extends Sach{
      
	private List<NhanXetResponse> dsNhanXet;
	public SachVaNhanXet() {
		this.dsNhanXet = new ArrayList<>();
	}
	public void addNhanXet(NhanXetResponse nx) {
		dsNhanXet.add(nx);
	}
}
