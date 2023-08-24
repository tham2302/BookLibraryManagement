package backend.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import backend.entity.NguoiDung;
import backend.entity.NhanXet;
import backend.repository.NguoiDungRepo;
import backend.repository.NhanXetRepo;
import backend.request.NhanXetRequest;
import backend.response.NhanXetResponse;

@RestController
@RequestMapping("/nhanxet")
@CrossOrigin("*")
public class NhanXetController {
	private NhanXetRepo nxRepo;
	private NguoiDungRepo ndRepo;
	public NhanXetController(NhanXetRepo nxRepo, NguoiDungRepo ndRepo) {
		this.nxRepo = nxRepo;
		this.ndRepo = ndRepo;
	}
}