package backend.controller;

import java.util.Collections;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import backend.entity.QuanLy;
import backend.repository.QuanLyRepo;
import backend.request.LoginRequest;
import backend.response.QuanLyResponse;

@RestController
@RequestMapping("/quanly")
@CrossOrigin("*")
public class QuanLyController {
	private QuanLyRepo nguoiRepo;

	public QuanLyController(QuanLyRepo nguoiRepo) {
		this.nguoiRepo = nguoiRepo;
	}

	@GetMapping
	public ResponseEntity<QuanLyResponse> getquanLyById(@RequestHeader("Authentication") String authentication) {
		long id = Long.parseLong(authentication.split(" ")[0]);
		QuanLyResponse response = new QuanLyResponse();
		QuanLy ql = nguoiRepo.findById(id).get();
		response.setTen(ql.getTen());

		return ResponseEntity.ok(response);
	}

	@PostMapping("/signup")
	public ResponseEntity<?> dangKy(@RequestBody QuanLy quanLy) {
		QuanLy ql = nguoiRepo.findByEmail(quanLy.getEmail());
		if (ql == null) {
			QuanLy ql1 = new QuanLy();
			ql1.setEmail(quanLy.getEmail());
			ql1.setMatKhau(quanLy.getMatKhau());
			ql1.setTen(quanLy.getTen());

			nguoiRepo.save(ql1);
			return ResponseEntity.ok().body(Collections.singletonMap("token", ql1.getId() + " " + ql1.getEmail()));
		}

		return ResponseEntity.badRequest().body("Tài khoản đã tồn tại");
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> dangNhap(@RequestBody LoginRequest taiKhoan) {
		QuanLy ql = nguoiRepo.findByEmail(taiKhoan.getEmail());
		if (ql == null) {
			return ResponseEntity.badRequest().body("Không tìm thấy tài khoản");			
		}
		else {
			if(!ql.getMatKhau().equals(taiKhoan.getMatKhau())) {
				return ResponseEntity.status(401).body("Sai mật khẩu");		
			}
		}

		return ResponseEntity.ok().body(Collections.singletonMap("token", ql.getId() + " " + ql.getEmail()));
	}
}
