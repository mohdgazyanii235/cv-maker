package io.github.cvmaker.service;

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
        String outputFilePath = "src/main/resources/outputs/" + cvParams.getName() + ".tex";
        try (Writer writer = new FileWriter(outputFilePath)){
            template.process(cvParams, writer);
        } catch (TemplateException e) {
            throw new RuntimeException(e);
        }
    }

}













