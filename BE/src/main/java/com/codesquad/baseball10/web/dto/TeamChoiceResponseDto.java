package com.codesquad.baseball10.web.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@NoArgsConstructor
public class TeamChoiceResponseDto {

    private String status;
    private TeamResponseDto team;
}
