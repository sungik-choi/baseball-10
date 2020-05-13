package com.codesquad.baseball10.web.dto.responesDto;

import com.codesquad.baseball10.domain.BasicTeam;
import lombok.*;

import java.util.List;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class TeamsResponseDto {
    private String status;
    private Long matchId;
    private List<BasicTeam> data;
}
