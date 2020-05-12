package com.codesquad.baseball10.web.dto.responesDto;

import com.codesquad.baseball10.web.dto.responesDto.progress.*;
import lombok.*;

import java.util.List;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class ProgressResponseDto {

    private String status;
    private String userWhere;
    private MatchInfoResponseDto matchInfo;
    private String defense;
    private TeamProgressResponseDto defenseTeam;
    private TeamProgressResponseDto attackTeam;
    private BallCountResponseDto ballCount;
    private PlatesResponseDto plates;
    private List<DisplayResponseDto> display;

}
