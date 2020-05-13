package com.codesquad.baseball10.web.controller;

import com.codesquad.baseball10.service.GameService;
import com.codesquad.baseball10.web.dto.responesDto.TeamsResponseDto;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class GameController {

    private final GameService gameService;

    private final Logger logger = LoggerFactory.getLogger(GameController.class);

    @GetMapping("teams")
    public TeamsResponseDto getTeams() {
        return gameService.getTeams();
    }
}
