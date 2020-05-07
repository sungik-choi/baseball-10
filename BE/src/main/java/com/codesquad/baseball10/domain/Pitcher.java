package com.codesquad.baseball10.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.web.bind.annotation.RestController;

@Getter
@ToString
@RequiredArgsConstructor
public class Pitcher {

    @Column("pitcher_name")
    private String name;
    @Column("number_pitches")
    private String number_pitches;
}
