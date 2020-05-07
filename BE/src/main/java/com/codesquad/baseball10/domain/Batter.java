package com.codesquad.baseball10.domain;

import lombok.Getter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Embedded;

import java.util.List;

@Getter
@ToString
public class Batter {

    @Id
    private Long id;
    private String plateAppearence;
    private String hit;
    private String out;
    private String name;
    private String battingAverage;
    private String gameAverage;
    private String order;
    private int strikeCount;
    private int ballCount;
    @Embedded.Nullable
    private Plates plates;
    private List<History> histories;

}
