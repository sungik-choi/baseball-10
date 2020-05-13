package com.codesquad.baseball10.web.dto.responesDto.progress;

import com.codesquad.baseball10.web.dto.responesDto.PitcherResponseDto;
import lombok.*;

import java.util.List;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class TeamProgressResponseDto {

    private String teamName;
    private String totalScore;
    private String location;
    private PitcherResponseDto pitcher;
    private List<BatterHistoryResponseDto> batter;
}
