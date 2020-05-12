package com.codesquad.baseball10.web.dto.responesDto;

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
    private String logoUrl;
    private String userEmail;
    private String selected;
    private String location;

    @Builder
    public TeamResponseDto(Long id, String name, String logoUrl, String userEmail, String selected, String location) {
        this.id = id;
        this.name = name;
        this.logoUrl = logoUrl;
        this.userEmail = userEmail;
        this.selected = selected;
        this.location = location;
    }
}
