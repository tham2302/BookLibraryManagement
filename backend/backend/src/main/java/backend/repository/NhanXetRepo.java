package backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import backend.entity.NhanXet;

public interface NhanXetRepo extends JpaRepository<NhanXet, Long>{
	List<NhanXet> findAllBySachId(long sachId);
}
