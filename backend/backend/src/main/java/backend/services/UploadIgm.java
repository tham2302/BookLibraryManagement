package backend.services;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

@Service
public class UploadIgm {
	public String uploadImageWithClass(MultipartFile file, String uploadDir) throws IOException {

        String fileName = StringUtils.cleanPath(file.getOriginalFilename());


        Path uploadPath = Path.of(uploadDir);
        
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        Path filePath = uploadPath.resolve(fileName);
        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
        

        String imageUrl = "http://localhost:8080/upload/" + fileName;
        return imageUrl;
	}
}
