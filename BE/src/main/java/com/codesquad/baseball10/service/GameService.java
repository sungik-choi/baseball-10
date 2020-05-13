package com.codesquad.baseball10.service;

import com.codesquad.baseball10.domain.GameApplication;
import com.codesquad.baseball10.domain.GameApplicationRepository;
import com.codesquad.baseball10.domain.Matchs;
import com.codesquad.baseball10.web.dto.responesDto.TeamsResponseDto;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class GameService {

    private final GameApplicationRepository gameApplicationRepository;

    private final Logger logger = LoggerFactory.getLogger(GameService.class);

    public TeamsResponseDto getTeams() {
        try {

            GameApplication gameApplication = gameApplicationRepository.findById(1L).orElseThrow(() ->
                    new IllegalStateException("해당 gameApp은 없습니다"));

            Matchs match = Matchs.builder()
                    .currentInning("0")
                    .teamMatching("progress")
                    .build();
            gameApplication.getMatchs().add(match);
            gameApplication = gameApplicationRepository.save(gameApplication);
            Matchs savedMatch = gameApplication.getMatchs().stream().filter(each -> each.getTeamMatching().equals("progress"))
                    .findFirst()
                    .orElseThrow(() ->
                    new IllegalStateException("GameApplication에서 progress인 match가 없습니다."));

            return TeamsResponseDto.builder()
                    .status("200")
                    .matchId(savedMatch.getId())
                    .data(gameApplication.getBasicTeams())
                    .build();

        } catch (Exception e) {
            logger.error("실행?");
            e.printStackTrace();
            return TeamsResponseDto.builder()
                    .status("401")
                    .data(null)
                    .build();
        }
    }
}
