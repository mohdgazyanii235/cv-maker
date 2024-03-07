package io.github.cvmaker.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Certification {

    private String name;
    private String issuer;
    private String issueDate;
    private String expiryDate;
}
