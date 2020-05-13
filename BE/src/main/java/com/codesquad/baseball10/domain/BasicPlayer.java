package com.codesquad.baseball10.domain;

import lombok.*;
import org.springframework.data.annotation.Id;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BasicPlayer {

    @Id
    private Long id;

    private String name;
    private String position;
    private String battingAverage;
    private String orders;
}
