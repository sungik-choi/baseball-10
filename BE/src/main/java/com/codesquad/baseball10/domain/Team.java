package com.codesquad.baseball10.domain;

import lombok.Getter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Embedded;

import java.util.List;

@Getter
@ToString
public class Team {
    @Id
    private Long id;
    private String name;
    private String image;
    private String totalScore;
    private String inningScore;
    private String outCount;
    @Embedded.Nullable
    private Pitcher pitcher;

    private List<Score> scores;
    private List<Batter> batters;
}
