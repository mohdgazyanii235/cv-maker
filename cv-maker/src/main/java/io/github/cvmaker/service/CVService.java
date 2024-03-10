package io.github.cvmaker.service;

import com.aspose.tex.OutputFileSystemDirectory;
import com.aspose.tex.TeXConfig;
import com.aspose.tex.TeXJob;
import com.aspose.tex.TeXOptions;
import com.aspose.tex.rendering.PdfDevice;
import com.aspose.tex.rendering.PdfSaveOptions;
import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import io.github.cvmaker.dto.CVParamsDTO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.FileWriter;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.Writer;

@Service
@AllArgsConstructor
public class CVService {

    private final Configuration freeMarkerConfiguration;

    public void generateTex(CVParamsDTO cvParams, String templateName) throws IOException {
        Template template = this.freeMarkerConfiguration.getTemplate(templateName);
        String outputFilePath = "src/main/resources/outputs/" + cvParams.getName().replace(' ', '_') + ".tex";
        try (Writer writer = new FileWriter(outputFilePath)){
            template.process(cvParams, writer);
        } catch (TemplateException e) {
            throw new RuntimeException(e);
        }
    }


    public void compileTexToPdf(String texFilePath) {
        try {
            String command = String.format("pdflatex -output-directory=%s %s", "src/main/resources/outputs/", texFilePath);

            Process process = Runtime.getRuntime().exec(command);
            int exitCode = process.waitFor();
            if (exitCode != 0) {
                throw new IOException("pdflatex exited with error code: " + exitCode);
            }
        } catch (IOException | InterruptedException e) {
            throw new RuntimeException("Failed to compile TeX to PDF: " + e.getMessage(), e);
        }
    }
}













