package com.codesquad.baseball10.domain;

import lombok.Getter;
import lombok.ToString;
import org.springframework.data.annotation.Id;

@Getter
@ToString
public class Score {
    @Id
    private Long id;
    private String inning;
    private String attack;
    private String value;
}
