package com.codesquad.baseball10.web.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Getter
@ToString
@NoArgsConstructor
public class TeamsResponseDto {
    private String status;
    private List<TeamResponseDto> data;

    @Builder
    public TeamsResponseDto(String status, List<TeamResponseDto> data) {
        this.status = status;
        this.data = data;
    }
}
