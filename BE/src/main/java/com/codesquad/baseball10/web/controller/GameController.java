package com.codesquad.baseball10.web.controller;

import com.codesquad.baseball10.service.GameService;
import com.codesquad.baseball10.web.dto.responesDto.TeamChoiceResponseDto;
import com.codesquad.baseball10.web.dto.responesDto.TeamsResponseDto;
import com.codesquad.baseball10.web.dto.responesDto.progress.ProgressResponseDto;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@AllArgsConstructor
public class GameController {

    private final GameService gameService;

    private final Logger logger = LoggerFactory.getLogger(GameController.class);

    @GetMapping("teams")
    public TeamsResponseDto getTeams() {
        return gameService.getTeams();
    }

    // {userEmail} 붙인 것은 test를 위함.
    // 테스트할 땐 HttpServletRequest.setAttribute() 를 사용할 수 없기 때문에
    @GetMapping("{matchId}/{teamId}/{userEmail}")
    public TeamChoiceResponseDto getChoosedTeam(@PathVariable Long matchId,
                                                @PathVariable Long teamId,
                                                @PathVariable String userEmail,
                                                HttpServletRequest request) {

        return gameService.getChoosedTeam(matchId, teamId, userEmail, request);
    }

    @GetMapping("{matchId}/lastest")
    public ProgressResponseDto getLastest(@PathVariable Long matchId,
                                          HttpServletRequest request) {

        String userEmail = (String) request.getAttribute("userEmail");


        // 처음 게임 시작인지.
        // mat

        //

        return new ProgressResponseDto();

    }
}
