package com.codesquad.baseball10.web.controller;

import com.codesquad.baseball10.web.dto.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/mock")
public class MockController {

    @GetMapping("/teams")
    public TeamsResponseDto getTeams() {

        List<TeamResponseDto> data = new ArrayList<>();
        for (int count = 0; count < 10; count++) {
            TeamResponseDto team = TeamResponseDto.builder()
                    .id(1L)
                    .name("삼성")
                    .image("http://naver.com")
                    .build();
            data.add(team);
        }

        return TeamsResponseDto.builder()
                .status("200")
                .data(data)
                .build();
    }

    @GetMapping("players")
    public PlayersResponseDto getPlayers() {
        List<BatterResponseDto> players1 = new ArrayList<>();
        for (int count = 0; count < 9; count++) {
            BatterResponseDto batter1 = BatterResponseDto.builder()
                    .name("정근우")
                    .plateAppearance("1")
                    .hit("2")
                    .out("1")
                    .average("1.000")
                    .build();
            players1.add(batter1);
        }
        List<BatterResponseDto> players2 = new ArrayList<>(players1);
        EachTeamPlayersResponseDto team1 = EachTeamPlayersResponseDto.builder()
                .teamName("삼성")
                .totalAppearance("4")
                .totalHit("5")
                .totalOut("3")
                .players(players1)
                .build();
        EachTeamPlayersResponseDto team2 = EachTeamPlayersResponseDto.builder()
                .teamName("기아")
                .totalAppearance("4")
                .totalHit("5")
                .totalOut("3")
                .players(players2)
                .build();
        List<EachTeamPlayersResponseDto> data = Arrays.asList(team1, team2);
        return PlayersResponseDto.builder()
                .status("200")
                .data(data)
                .build();
    }
}
