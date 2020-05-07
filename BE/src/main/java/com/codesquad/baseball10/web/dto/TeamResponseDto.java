package com.codesquad.baseball10.web.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@NoArgsConstructor
public class TeamResponseDto {
    private Long id;
    private String name;
    private String image;

    @Builder
    public TeamResponseDto(Long id, String name, String image) {
        this.id = id;
        this.name = name;
        this.image = image;
    }
}
