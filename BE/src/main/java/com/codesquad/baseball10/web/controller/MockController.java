package com.codesquad.baseball10.web.controller;

import com.codesquad.baseball10.service.MockService;
import com.codesquad.baseball10.web.dto.requestDto.TeamChoiceRequestDto;
import com.codesquad.baseball10.web.dto.responesDto.PlayersResponseDto;
import com.codesquad.baseball10.web.dto.responesDto.ProgressResponseDto;
import com.codesquad.baseball10.web.dto.responesDto.TeamChoiceResponseDto;
import com.codesquad.baseball10.web.dto.responesDto.TeamsResponseDto;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/mock")
@AllArgsConstructor
public class MockController {

    private final MockService mockService;

    @GetMapping("/teams")
    public TeamsResponseDto getTeams() {
        return mockService.getTeamsResponseDto();
    }

    @GetMapping("players")
    public PlayersResponseDto getPlayers() {
        return mockService.getPlayersResponseDto();
    }

    @PostMapping("choice")
    public TeamChoiceResponseDto postTeamChoice(@RequestBody TeamChoiceRequestDto requestBody) {
        return mockService.postTeamChoice(requestBody);
    }

    @GetMapping("first")
    public ProgressResponseDto getFirstProgress() {
        return mockService.getFirstProgress();
    }


}
