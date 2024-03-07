package io.github.cvmaker.dto;

import lombok.*;

import java.time.LocalDate;
import java.util.ArrayList;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Education {

    private String instituteName;
    private String subject;
    private String grade;
    private LocalDate startDate;
    private LocalDate endDate;
    private ArrayList<String> description;


}
