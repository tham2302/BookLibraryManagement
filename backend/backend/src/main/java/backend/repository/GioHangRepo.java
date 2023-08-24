package backend.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import backend.entity.GioHang;

public interface GioHangRepo extends CrudRepository<GioHang, Long> {
	List<GioHang> findByNguoiDungId(long nguoiDungId);
}
