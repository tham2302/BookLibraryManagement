package backend.controller;

import java.util.Collections;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import backend.entity.NguoiDung;
import backend.repository.NguoiDungRepo;
import backend.request.LoginRequest;
import backend.response.NguoiDungResponse;

@RestController
@RequestMapping("/nguoidung")
@CrossOrigin("*")
public class NguoiDungController {
	private NguoiDungRepo nguoiRepo;

	public NguoiDungController(NguoiDungRepo nguoiRepo) {
		this.nguoiRepo = nguoiRepo;
	}

	@GetMapping("/{id}")
	public ResponseEntity<NguoiDungResponse> getNguoiDungById(@PathVariable long id) {
		NguoiDungResponse response = new NguoiDungResponse();
		NguoiDung nd = nguoiRepo.findById(id).get();
		response.setTen(nd.getTen());

		return ResponseEntity.ok(response);
	}

	@PostMapping("/signup")
	public ResponseEntity<?> dangKy(@RequestBody NguoiDung nguoiDung) {
		NguoiDung nd = nguoiRepo.findByEmail(nguoiDung.getEmail());
		if (nd == null) {
			NguoiDung nd1 = new NguoiDung();
			nd1.setEmail(nguoiDung.getEmail());
			nd1.setMatKhau(nguoiDung.getMatKhau());
			nd1.setTen(nguoiDung.getTen());

			nguoiRepo.save(nd1);
			return ResponseEntity.ok().body(Collections.singletonMap("token", nd1.getId() + " " + nd1.getEmail()));
		}

		return ResponseEntity.badRequest().body("Tài khoản đã tồn tại");
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> dangNhap(@RequestBody LoginRequest taiKhoan) {
		NguoiDung nd = nguoiRepo.findByEmail(taiKhoan.getEmail());
		if (nd == null) {
			return ResponseEntity.badRequest().body("Không tìm thấy tài khoản");			
		}
		else {
			if(!nd.getMatKhau().equals(taiKhoan.getMatKhau())) {
				return ResponseEntity.status(401).body("Sai mật khẩu");		
			}
		}

		return ResponseEntity.ok().body(Collections.singletonMap("token", nd.getId() + " " + nd.getEmail()));
	}
}
