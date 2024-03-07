package io.github.cvmaker.dto;

import lombok.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Experience {

    private String companyName;
    private String companyAddress;
    private String startDate;
    private String endDate;
    private Boolean stillWorking;
    private String position;
    private ArrayList<String> description;

}
