package com.codesquad.baseball10.web.dto.responesDto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@NoArgsConstructor
public class TeamChoiceResponseDto {

    private String status;
    private TeamResponseDto team;

    @Builder
    public TeamChoiceResponseDto(String status, TeamResponseDto team) {
        this.status = status;
        this.team = team;
    }
}
