package com.codesquad.baseball10.web.dto.responesDto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Getter
@ToString
@NoArgsConstructor
public class EachTeamPlayersResponseDto {
    private String teamName;
    private String totalAppearance;
    private String totalHit;
    private String totalOut;
    private List<BatterResponseDto> players;

    @Builder
    public EachTeamPlayersResponseDto(String teamName, String totalAppearance, String totalHit, String totalOut, List<BatterResponseDto> players) {
        this.teamName = teamName;
        this.totalAppearance = totalAppearance;
        this.totalHit = totalHit;
        this.totalOut = totalOut;
        this.players = players;
    }
}
