package com.codesquad.baseball10.domain;

import org.springframework.data.annotation.Id;

public class MatchOneInningInfo {
    @Id
    private Long id;
    private String inning;
}
