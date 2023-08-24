package backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import backend.entity.QuanLy;

public interface QuanLyRepo extends JpaRepository<QuanLy, Long> {
	QuanLy findByEmail(String email);
}
