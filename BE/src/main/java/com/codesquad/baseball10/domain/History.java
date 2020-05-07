package com.codesquad.baseball10.domain;

import lombok.Getter;
import lombok.ToString;
import org.springframework.data.annotation.Id;

@Getter
@ToString
public class History {
    @Id
    private Long id;
    private String history;
}
