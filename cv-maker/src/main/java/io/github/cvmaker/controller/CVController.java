package io.github.cvmaker.controller;

import freemarker.template.TemplateException;
import io.github.cvmaker.dto.CVParamsDTO;
import io.github.cvmaker.service.CVService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1/cv/")
@AllArgsConstructor
public class CVController {


    private final CVService cvService;

    @PostMapping(path = "make", consumes = "application/json")
    public ResponseEntity<String> createCV(@RequestBody CVParamsDTO cvParams) throws TemplateException, IOException {

        System.out.println(cvParams.toString());
        this.cvService.generateTex(cvParams, "curriculum_vitae_template.ft1");
        return new ResponseEntity<>("CV created successfully", HttpStatus.OK);
    }

}
