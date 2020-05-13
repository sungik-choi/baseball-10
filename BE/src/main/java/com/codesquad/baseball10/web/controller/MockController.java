package com.codesquad.baseball10.web.controller;

import com.codesquad.baseball10.service.MockService;
import com.codesquad.baseball10.web.dto.responesDto.PlayersResponseDto;
import com.codesquad.baseball10.web.dto.responesDto.ProgressResponseDto;
import com.codesquad.baseball10.web.dto.responesDto.TeamChoiceResponseDto;
import com.codesquad.baseball10.web.dto.responesDto.TeamsResponseDto;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/mock")
@AllArgsConstructor
public class MockController {

    private final MockService mockService;

    @GetMapping("/teams")
    public TeamsResponseDto getTeams() {
        return mockService.getTeamsResponseDto();
    }

    @GetMapping("{teamId}")
    public TeamChoiceResponseDto postTeamChoice(@PathVariable("teamId") Long teamId) {
        return mockService.postTeamChoice(teamId);
    }

    @GetMapping("first")
    public ProgressResponseDto getFirstProgress() {
        return mockService.getFirstProgress();
    }

    @GetMapping("{inning}/{when}")
    public ProgressResponseDto getProgress(@PathVariable String inning,
                                           @PathVariable String when) {
        return mockService.getProgress(inning, when);
    }

    @GetMapping("players")
    public PlayersResponseDto getPlayers() {
        return mockService.getPlayersResponseDto();
    }
}
