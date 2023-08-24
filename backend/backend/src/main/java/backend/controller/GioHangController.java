package backend.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import backend.entity.GioHang;
import backend.entity.Sach;
import backend.repository.GioHangRepo;
import backend.repository.SachRepo;
import backend.request.GioHangRequest;
import backend.response.DoanhThuResponse;
import backend.response.GioHangResponse;

@RestController
@RequestMapping("/giohang")
@CrossOrigin("*")
public class GioHangController {

	private GioHangRepo gioRepo;
	private SachRepo sachRepo;
	
	public GioHangController(GioHangRepo gioRepo, SachRepo sachRepo) {
		this.gioRepo = gioRepo;
		this.sachRepo = sachRepo;
	}
	
	@GetMapping("/doanhthu")
	public ResponseEntity<?> getDoanhThu(){
		List<Sach> dsSach = (List<Sach>)sachRepo.findAll();
		List<GioHang> dsGio = (List<GioHang>)gioRepo.findAll();
		
		List<DoanhThuResponse> dsResponse = new ArrayList<>();
		for(Sach s: dsSach) {
			DoanhThuResponse dt = new DoanhThuResponse();
			dt.setId(s.getId());
			dt.setTenSach(s.getTenSach());
			dt.setTacGia(s.getTacGia());
			dt.setTheLoai(s.getTheLoai());
			dt.setNgayPhatHanh(s.getNgayPhatHanh());
			dt.setSoTrang(s.getSoTrang());
			
			long daban = 0;
			for(GioHang gh: dsGio) {
				if(s.getId() == gh.getSachId() && gh.getTrangThai() == true) {
					daban += gh.getSoLuong();
				}
			}
			dt.setSoLuongDaBan(daban);
			dsResponse.add(dt);
		}
		return ResponseEntity.ok().body(dsResponse);
	}
	
	@GetMapping("/cuatoi")
	public ResponseEntity<?> getGioHangByNguoiDungId(@RequestHeader("Authentication") String authentication){
		long nguoiDungId = Long.parseLong(authentication.split(" ")[0]);
		
		List<Sach> dsSach = (List<Sach>)sachRepo.findAll();
		List<GioHang> dsGio = (List<GioHang>)gioRepo.findByNguoiDungId(nguoiDungId);
		
		List<GioHangResponse> dsResponse = new ArrayList<>();
		for(GioHang gh: dsGio) {
			GioHangResponse ghr = new GioHangResponse();
			ghr.setId(gh.getId());
			ghr.setSachId(gh.getSachId());
			ghr.setSoLuong(gh.getSoLuong());
			ghr.setTrangThai(gh.getTrangThai());
			
			for(Sach s: dsSach) {
				if(s.getId() == gh.getSachId()) {
					ghr.setBiaSach(s.getBiaSach());
					ghr.setTenSach(s.getTenSach());
					break;
				}
			}
			dsResponse.add(ghr);
		}
		return ResponseEntity.ok().body(dsResponse);
	}
	
	@PostMapping
	public ResponseEntity<?> themSachVaoGio(@RequestHeader("Authentication") String authentication, @RequestBody GioHangRequest donHang){
		long nguoiDungId = Long.parseLong(authentication.split(" ")[0]);
		
		GioHang gh = new GioHang();
		gh.setNguoiDungId(nguoiDungId);
		gh.setSachId(donHang.getSachId());
		gh.setSoLuong(donHang.getSoLuong());
		
		gioRepo.save(gh);
		return ResponseEntity.ok().body("Đã mua");
	}
	
	@DeleteMapping
	public ResponseEntity<?> huyDonHang(@RequestParam long donhangid, @RequestHeader("Authentication") String authentication){
	   GioHang gh = gioRepo.findById(donhangid).get();
	   long nguoiDungId = Long.parseLong(authentication.split(" ")[0]);
	   if(gh.getNguoiDungId() == nguoiDungId) {
		   gh.setTrangThai(false);
		   gioRepo.save(gh);
		   return ResponseEntity.ok().body("Đã xóa");		   
	   }
	   return ResponseEntity.badRequest().body("Lỗi thực thi");
	}
	
}
