package backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import backend.entity.NguoiDung;

public interface NguoiDungRepo extends JpaRepository<NguoiDung, Long> {
	NguoiDung findByEmail(String email);
}
