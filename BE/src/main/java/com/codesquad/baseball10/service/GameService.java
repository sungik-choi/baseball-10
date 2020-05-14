package com.codesquad.baseball10.service;

import com.codesquad.baseball10.domain.*;
import com.codesquad.baseball10.web.dto.responesDto.TeamChoiceResponseDto;
import com.codesquad.baseball10.web.dto.responesDto.TeamResponseDto;
import com.codesquad.baseball10.web.dto.responesDto.TeamsResponseDto;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
@AllArgsConstructor
public class GameService {

    private final GameApplicationRepository gameApplicationRepository;

    private final Logger logger = LoggerFactory.getLogger(GameService.class);

    private final Long GAME_APP_ID = 1L;

    private final String OK = "200";
    private final String UNAUTHORIZED = "401";

    private final String TRUE = "true";
    private final String FALSE = "false";
    private final String HOME = "HOME";
    private final String AWAY = "AWAY";

    // 팀 리스트 요청 시 Match가 1개 만들어진다.
    public TeamsResponseDto getTeams() {

        try {
            List<String> baseNames = Arrays.asList("baseFirst", "baseSecond", "baseThird");
            final String ZERO = "0";

            GameApplication gameApplication = gameApplicationRepository.findById(1L).orElseThrow(() ->
                    new IllegalStateException("해당 gameApp은 없습니다"));

            List<MatchOneInningInfo> matchOneInningInfos
                    = new ArrayList<>();

            for (int index = 0; index < 12; index++) {

                List<MatchPlate> matchPlates = new ArrayList<>();

                for (String baseName : baseNames) {
                    MatchPlate matchPlate = MatchPlate.builder()
                            .name(baseName)
                            .isBatter(ZERO)
                            .build();
                    matchPlates.add(matchPlate);
                }

                MatchOneInningInfo each = MatchOneInningInfo.builder()
                        .inning(String.valueOf(index+1))
                        .isRunning(FALSE)
                        .isScore(FALSE)
                        .matchPlates(matchPlates)
                        .build();

                matchOneInningInfos.add(each);
            }

            Matchs match = Matchs.builder()
                    .currentInning("1")
                    .teamMatching("progress")
                    .matchOneInningInfos(matchOneInningInfos)
                    .build();

            gameApplication.getMatchs().add(match);
            gameApplication = gameApplicationRepository.save(gameApplication);
            Matchs savedMatch = gameApplication.getMatchs().stream().filter(each -> each.getTeamMatching().equals("progress"))
                    .findFirst()
                    .orElseThrow(() ->
                    new IllegalStateException("GameApplication에서 progress인 match가 없습니다."));

            return TeamsResponseDto.builder()
                    .status(OK)
                    .matchId(savedMatch.getId())
                    .data(gameApplication.getBasicTeams())
                    .build();

        } catch (Exception e) {
            logger.error("실행?");
            e.printStackTrace();
            return TeamsResponseDto.builder()
                    .status(UNAUTHORIZED)
                    .data(null)
                    .build();
        }
    }

    public TeamChoiceResponseDto getChoosedTeam(Long matchId, Long teamId, String userEmail, HttpServletRequest request) {
        String userEmailInCookie = (String) request.getAttribute("userEmail");

        try {
            GameApplication savedGameApplication = getGameApplication();

            Matchs matchs = savedGameApplication.getMatchs().stream()
                    .filter(each -> each.getId().equals(matchId))
                    .findFirst()
                    .orElseThrow(() ->
                            new IllegalStateException("getChoicedTeam : 해당 match가 없습니다. id : " + matchId));

            BasicTeam basicTeam = savedGameApplication.getBasicTeams().stream()
                    .filter(each -> each.getId().equals(teamId))
                    .findFirst()
                    .orElseThrow(() ->
                            new IllegalStateException("getChoicedTeam : 해당 basicTeam이 없습니다. id : " + teamId));

            TeamResponseDto teamResponseDto = new TeamResponseDto();

            if (matchs.sizeIsZero()) {
                teamResponseDto = TeamResponseDto.builder()
                        .id(basicTeam.getId())
                        .name(basicTeam.getName())
                        .logoUrl(basicTeam.getLogoUrl())
                        .userEmail(userEmail)
                        .selected(TRUE)
                        .location(HOME)
                        .build();

                // match에 저장하는 로직
                matchs.saveChoosedTeam(basicTeam, userEmail, HOME);

            } else {
                teamResponseDto = TeamResponseDto.builder()
                        .id(basicTeam.getId())
                        .name(basicTeam.getName())
                        .logoUrl(basicTeam.getLogoUrl())
                        .userEmail(userEmail)
                        .selected(TRUE)
                        .location(AWAY)
                        .build();

                // match에 저장하는 로직.
                matchs.saveChoosedTeam(basicTeam, userEmail, AWAY);
                matchs.finishTeamMatching();
            }

            logger.info("teamResponseDto : {}", teamResponseDto);

            gameApplicationSave(savedGameApplication);

            return TeamChoiceResponseDto.builder()
                    .status(OK)
                    .team(teamResponseDto)
                    .build();

        } catch (Exception e) {
            e.printStackTrace();
            e.getMessage();
            logger.error("getChoosedTeamError");
            return TeamChoiceResponseDto.builder()
                    .status(UNAUTHORIZED)
                    .build();
        }

    }

    private GameApplication gameApplicationSave(GameApplication gameApplication) {
        return gameApplicationRepository.save(gameApplication);
    }

    private GameApplication getGameApplication() {
        return gameApplicationRepository.findById(GAME_APP_ID).orElseThrow(() ->
                new IllegalStateException("GameService : 해당 id에 해당하는 gameApplication이 없습니다. id = " + GAME_APP_ID));
    }
}
