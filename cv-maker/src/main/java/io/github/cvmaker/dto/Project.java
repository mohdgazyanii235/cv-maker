package io.github.cvmaker.dto;

import lombok.*;

import java.util.ArrayList;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Project {

    private String name;
    private ArrayList<String> technologiesUsed;
    private String premise; // What was the problem you were trying to solve.
    private ArrayList<String> description;
}
