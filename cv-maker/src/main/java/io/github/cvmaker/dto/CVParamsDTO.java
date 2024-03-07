package io.github.cvmaker.dto;

import lombok.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Hashtable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class CVParamsDTO {

    private String name;
    private String address;
    private String phoneNumber;
    private String email;
    private String linkedIn;
    private String website;
    private String position; // example: Graduate Software Engineer

    private String executiveSummary; // example: 3+ years of software engineering experience

    private HashMap<String, ArrayList<String>> technicalProficiencies;
    private ArrayList<Experience> experiences;
    private ArrayList<Project> projects;
    private ArrayList<Education> educations;
    private HashSet<String> skills;
    private HashMap<String, ArrayList<String>> languages;
    private ArrayList<Certification> certifications;
}
