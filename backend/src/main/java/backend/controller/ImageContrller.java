package backend.controller;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import backend.services.UploadIgm;
@RestController
@RequestMapping("/upload")
@CrossOrigin("*")
public class ImageContrller {
	@Autowired
	private UploadIgm uploadImage;
	@Value("${upload.dir}")
	private String uploadDir;
	@GetMapping("/{imageName}")
	public ResponseEntity<byte[]> getImage(@PathVariable String imageName) throws IOException {
		Path imagePath = Paths.get(uploadDir, imageName);

		if (!Files.exists(imagePath)) {
			return ResponseEntity.notFound().build();
		}

		byte[] imageBytes = Files.readAllBytes(imagePath);
		return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).contentLength(imageBytes.length).body(imageBytes);
	}
	@PostMapping("/withText")
	public ResponseEntity<String> uploadImageWithClass(@RequestPart("file") MultipartFile file,
			@RequestPart("diKem") String diKemJson) throws IOException {
		System.out.println(diKemJson);

		if (file.isEmpty() || file == null) {
			return ResponseEntity.badRequest().body("Please select a file to upload");
		}
		String imageUrl = uploadImage.uploadImageWithClass(file, uploadDir);
		return ResponseEntity.ok(imageUrl);
	}
}
