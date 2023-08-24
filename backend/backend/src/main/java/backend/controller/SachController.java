package backend.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;

import backend.entity.NguoiDung;
import backend.entity.NhanXet;
import backend.entity.Sach;
import backend.repository.NguoiDungRepo;
import backend.repository.NhanXetRepo;
import backend.repository.SachRepo;
import backend.request.BookRequest;
import backend.response.NhanXetResponse;
import backend.response.SachVaNhanXet;
import backend.services.UploadIgm;

@RestController
@RequestMapping("/sach")
@CrossOrigin("*")
public class SachController {
	private SachRepo sachRepo;
	private NhanXetRepo nxRepo;
	private NguoiDungRepo ndRepo;

	@Autowired
	private UploadIgm uploadImage;

	@Value("${upload.dir}")
	private String uploadDir;

	public SachController(SachRepo sachRepo, NhanXetRepo nxRepo, NguoiDungRepo ndRepo) {
		this.sachRepo = sachRepo;
		this.nxRepo = nxRepo;
		this.ndRepo = ndRepo;
	}

	@GetMapping
	public ResponseEntity<List<Sach>> getAllSach() {
		return ResponseEntity.ok((List<Sach>) sachRepo.findAll());
	}

	@GetMapping("/thongtinsach")
	public ResponseEntity<Sach> getThongTinSachById(@RequestParam long sachId) {
		return ResponseEntity.ok(sachRepo.findById(sachId).get());
	}

	@GetMapping("/{sachId}")
	public ResponseEntity<SachVaNhanXet> getSachById(@PathVariable long sachId) {
		Sach s = sachRepo.findById(sachId).get();
		SachVaNhanXet svnx = new SachVaNhanXet();
		svnx.setId(s.getId());
		svnx.setBiaSach(s.getBiaSach());
		svnx.setTenSach(s.getTenSach());
		svnx.setTacGia(s.getTacGia());
		svnx.setTheLoai(s.getTheLoai());	
		svnx.setNgayPhatHanh(s.getNgayPhatHanh());
		svnx.setSoTrang(s.getSoTrang());
		svnx.setMoTa(s.getMoTa());

		List<NguoiDung> dsNd = (List<NguoiDung>) ndRepo.findAll();
		List<NhanXet> dsNx = (List<NhanXet>) nxRepo.findAllBySachId(sachId);
		for (NhanXet nx : dsNx) {
			NhanXetResponse nsr = new NhanXetResponse();
			nsr.setId(nx.getId());
			nsr.setSoSao(nx.getSoSao());
			nsr.setNoiDung(nx.getNoiDung());
			for (NguoiDung nd : dsNd) {
				if (nd.getId() == nx.getNguoiDungId()) {
					nsr.setTenNguoiNhanXet(nd.getTen());
					break;
				}
			}
			svnx.addNhanXet(nsr);
		}

		return ResponseEntity.ok(svnx);
	}

	@PostMapping
	public ResponseEntity<?> themSach(@RequestPart("file") MultipartFile file, @RequestPart("diKem") String diKemJson)
			throws IOException {
		ObjectMapper objectMapper = new ObjectMapper();
		BookRequest diKem = objectMapper.readValue(diKemJson, BookRequest.class);

		if (file.isEmpty() || file == null) {
			return ResponseEntity.badRequest().body("Please select a file to upload");

		}

		String imageUrl = uploadImage.uploadImageWithClass(file, uploadDir);
		Sach book = new Sach();
		book.setBiaSach(imageUrl);
		book.setTenSach(diKem.getTenSach());
		book.setTacGia(diKem.getTacGia());
		book.setTheLoai(diKem.getTheLoai());
		book.setNgayPhatHanh(diKem.getNgayPhatHanh());
		book.setSoTrang(diKem.getSoTrang());
		book.setMoTa(diKem.getMoTa());

		sachRepo.save(book);
		return ResponseEntity.ok(book);
	}

	@PutMapping
	public ResponseEntity<?> suaSach(@RequestPart(value = "file", required = false) MultipartFile file,
			@RequestPart(value = "diKem", required = false) String diKemJson) throws IOException {
		ObjectMapper objectMapper = new ObjectMapper();
		BookRequest diKem = objectMapper.readValue(diKemJson, BookRequest.class);

		Sach book = sachRepo.findById(diKem.getId()).get();
		String imageUrl = book.getBiaSach();

		if (file != null) {
			if (!file.isEmpty()) {
				imageUrl = uploadImage.uploadImageWithClass(file, uploadDir);
			}
		}
		book.setBiaSach(imageUrl);
		book.setTenSach(diKem.getTenSach());
		book.setTacGia(diKem.getTacGia());
		book.setTheLoai(diKem.getTheLoai());
		book.setNgayPhatHanh(diKem.getNgayPhatHanh());
		book.setSoTrang(diKem.getSoTrang());
		book.setMoTa(diKem.getMoTa());

		sachRepo.save(book);
		return ResponseEntity.ok(book);
	}

	@DeleteMapping
	public ResponseEntity<?> xoaSach(@RequestParam long sachId) {
		Sach s = sachRepo.findById(sachId).get();
		sachRepo.delete(s);
		return ResponseEntity.ok().body("Đã xóa");
	}

}
