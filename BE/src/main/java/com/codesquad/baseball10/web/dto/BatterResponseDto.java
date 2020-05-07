package com.codesquad.baseball10.web.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@NoArgsConstructor
public class BatterResponseDto {
    private String name;
    private String plateAppearance;
    private String hit;
    private String out;
    private String average;

    @Builder
    public BatterResponseDto(String name, String plateAppearance, String hit, String out, String average) {
        this.name = name;
        this.plateAppearance = plateAppearance;
        this.hit = hit;
        this.out = out;
        this.average = average;
    }
}
