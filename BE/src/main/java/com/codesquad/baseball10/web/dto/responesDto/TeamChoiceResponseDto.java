package com.codesquad.baseball10.web.dto.responesDto;

import lombok.*;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class TeamChoiceResponseDto {

    private String status;
    private TeamResponseDto team;
}
