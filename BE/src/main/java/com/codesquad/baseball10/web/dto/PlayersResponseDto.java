package com.codesquad.baseball10.web.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Getter
@ToString
@NoArgsConstructor
public class PlayersResponseDto {
    private String status;
    private List<EachTeamPlayersResponseDto> data;

    @Builder
    public PlayersResponseDto(String status, List<EachTeamPlayersResponseDto> data) {
        this.status = status;
        this.data = data;
    }
}
