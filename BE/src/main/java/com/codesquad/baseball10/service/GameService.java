package com.codesquad.baseball10.service;

import com.codesquad.baseball10.domain.*;
import com.codesquad.baseball10.web.dto.responesDto.PitcherResponseDto;
import com.codesquad.baseball10.web.dto.responesDto.TeamChoiceResponseDto;
import com.codesquad.baseball10.web.dto.responesDto.TeamResponseDto;
import com.codesquad.baseball10.web.dto.responesDto.TeamsResponseDto;
import com.codesquad.baseball10.web.dto.responesDto.progress.*;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

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
    private final String TOP = "TOP";
    private final String BOTTOM = "BOTTOM";
    private final String ZERO = "0";

    private final String STRIKE = "1";
    private final String BALL = "2";
    private final String HIT = "3";
    private final String OUT = "4";

    // 팀 리스트 요청 시 Match가 1개 만들어진다.
    public TeamsResponseDto getTeams() {

        try {
            List<String> baseNames = Arrays.asList("baseFirst", "baseSecond", "baseThird");

            GameApplication gameApplication = gameApplicationRepository.findById(1L).orElseThrow(() ->
                    new IllegalStateException("해당 gameApp은 없습니다"));

            Matchs teamMatchingMatchs = gameApplication.getMatchs().stream()
                    .filter(match -> match.getTeamMatching().equals("progress"))
                    .findFirst()
                    .orElse(createMatchs(baseNames));

            boolean result = gameApplication.getMatchs().stream().anyMatch(each -> each.getId().equals(teamMatchingMatchs.getId()));

            if (result) {
                teamMatchingMatchs.finishTeamMatching();
                gameApplication = gameApplicationRepository.save(gameApplication);
                List<TeamResponseDto> data = new ArrayList<>();

                for (int index = 0; index < gameApplication.getBasicTeams().size(); index++) {
                    TeamResponseDto teamResponseDto = TeamResponseDto.builder()
                            .id(gameApplication.getBasicTeams().get(index).getId())
                            .name(gameApplication.getBasicTeams().get(index).getName())
                            .logoUrl(gameApplication.getBasicTeams().get(index).getLogoUrl())
                            .build();

                    data.add(teamResponseDto);
                }

                return TeamsResponseDto.builder()
                        .status(OK)
                        .matchId(teamMatchingMatchs.getId())
                        .data(data)
                        .build();
            } else {
                gameApplication.getMatchs().add(teamMatchingMatchs);
                gameApplication = gameApplicationRepository.save(gameApplication);
                List<TeamResponseDto> data = new ArrayList<>();

                for (int index = 0; index < gameApplication.getBasicTeams().size(); index++) {
                    TeamResponseDto teamResponseDto = TeamResponseDto.builder()
                            .id(gameApplication.getBasicTeams().get(index).getId())
                            .name(gameApplication.getBasicTeams().get(index).getName())
                            .logoUrl(gameApplication.getBasicTeams().get(index).getLogoUrl())
                            .build();

                    data.add(teamResponseDto);
                }

                Matchs savedMatch = gameApplication.getMatchs().stream()
                        .filter(each -> each.getTeamMatching().equals("progress"))
                        .findFirst()
                        .orElseThrow(() ->
                                new IllegalStateException("GameApplication에서 progress인 match가 없습니다."));


                return TeamsResponseDto.builder()
                        .status(OK)
                        .matchId(savedMatch.getId())
                        .data(data)
                        .build();
            }
        } catch (Exception e) {
            e.printStackTrace();
            return TeamsResponseDto.builder()
                    .status(UNAUTHORIZED)
                    .data(null)
                    .build();
        }
    }

    private Matchs createMatchs(List<String> baseNames) {
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

        return Matchs.builder()
                .currentInning("1")
                .location("TOP")
                .teamMatching("progress")
                .matchOneInningInfos(matchOneInningInfos)
                .build();

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
                        .userEmail(userEmailInCookie)
                        .selected(TRUE)
                        .role(HOME)
                        .build();

                // match에 저장하는 로직
                matchs.saveChoosedTeam(basicTeam, userEmailInCookie, HOME);

            } else {
                teamResponseDto = TeamResponseDto.builder()
                        .id(basicTeam.getId())
                        .name(basicTeam.getName())
                        .logoUrl(basicTeam.getLogoUrl())
                        .userEmail(userEmailInCookie)
                        .selected(TRUE)
                        .role(AWAY)
                        .build();

                // match에 저장하는 로직.
                matchs.saveChoosedTeam(basicTeam, userEmailInCookie, AWAY);
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


    public ProgressResponseDto getLastest(Long matchId, String userEmail, HttpServletRequest request) {

        String userEmailInCookie = (String) request.getAttribute("userEmail");

        try {
            GameApplication savedGameApplication = getGameApplication();

            Matchs matchs = savedGameApplication.getMatchs().stream()
                    .filter(each -> each.getId().equals(matchId))
                    .findFirst()
                    .orElseThrow(() ->
                            new IllegalStateException("getChoicedTeam : 해당 match가 없습니다. id : " + matchId));

            Team userTeam = matchs.getTeams().stream()
                    .filter(each -> each.getUserEmail().equals(userEmail))
                    .findFirst()
                    .orElseThrow(() ->
                            new IllegalStateException("getLastest : 해당 team 없습니다. userEmail : " + userEmail));

            Team otherTeam = matchs.getTeams().stream()
                    .filter(each -> !each.getUserEmail().equals(userEmail))
                    .findFirst()
                    .orElseThrow(() ->
                            new IllegalStateException("getLastest : not opposite. userEmail : " + userEmail));

            ProgressResponseDto progressResponseDto;

            if (matchs.getLocation().equals(TOP)) {
                if (userTeam.getRole().equals(HOME)) {
                    // attack : other, defense : user
                    String defense = "true";
                    progressResponseDto = defenseIsUserProgressResponseDto(defense, matchs, HOME, userTeam, otherTeam);

                } else {
                    // attack : user, defense : other
                    String defense = "false";
                    progressResponseDto = defenseIsOtherProgressResponseDto(defense, matchs, AWAY, userTeam, otherTeam);
                }

            } else {
                if (userTeam.getRole().equals(HOME)) {
                    // attack : user, defense : other
                    String defense = "false";
                    progressResponseDto = defenseIsOtherProgressResponseDto(defense, matchs, HOME, userTeam, otherTeam);
                } else {
                    // attack : other, defense : user
                    String defense = "true";
                    progressResponseDto = defenseIsUserProgressResponseDto(defense, matchs, AWAY, userTeam, otherTeam);
                }
            }

            return progressResponseDto;

        } catch (Exception e) {
            e.printStackTrace();
            return ProgressResponseDto.builder()
                    .status(UNAUTHORIZED)
                    .build();

        }
    }

    private ProgressResponseDto defenseIsOtherProgressResponseDto(String defense, Matchs matchs, String where, Team userTeam, Team otherTeam) {
        MatchInfoResponseDto matchInfo = MatchInfoResponseDto.builder()
                .currentInning(matchs.getCurrentInning())
                .when(matchs.getLocation())
                .build();

        PitcherResponseDto pitcher = PitcherResponseDto.builder()
                .name(otherTeam.getPlayers().stream()
                        .filter(each -> each.getPosition().equals("pitcher"))
                        .findFirst().get().getName())
                .count(otherTeam.getPitchCount())
                .build();

        TeamProgressResponseDto defenseTeam = TeamProgressResponseDto.builder()
                .teamName(otherTeam.getName())
                .totalScore(otherTeam.getTotalScore())
                .role(otherTeam.getRole())
                .pitcher(pitcher)
                .build();

        // attack

        List<BatterHistoryResponseDto> batters = new ArrayList<>();

        String currentOrder = userTeam.getCurrentOrder();
        int order = Integer.parseInt(currentOrder);

        for (int index = 0; index < 3; index++) {
            if (order <= 0) order = 9;
            int finalOrder = order;
            int finalOrder1 = order;
            Player player = userTeam.getPlayers().stream().filter(each -> each.getOrders().equals(String.valueOf(finalOrder)))
                    .findFirst().orElseThrow(() -> new IllegalStateException("No batter with order : " + finalOrder1));


            List<String> histories = new ArrayList<>();
            if (player.getPlayerOnePlateAppearanceInfos().size() < 1) {
                histories = new ArrayList<>();
            } else {
                histories = player.getPlayerOnePlateAppearanceInfos().get(player.getPlayerOnePlateAppearanceInfos().size()-1)
                        .getPlayerOnePlateAppearanceHistories().stream().map(each -> each.getHistory()).collect(Collectors.toList());
            }

            BatterHistoryResponseDto batterHistoryResponseDto = BatterHistoryResponseDto.builder()
                    .name(player.getName())
                    .plateAppearance(player.getPlateAppearance())
                    .hit(player.getHitCount())
                    .order(player.getOrders())
                    .history(histories)
                    .build();

            batters.add(batterHistoryResponseDto);
            order--;
        }


        TeamProgressResponseDto attackTeam = TeamProgressResponseDto.builder()
                .teamName(userTeam.getName())
                .totalScore(userTeam.getTotalScore())
                .role(userTeam.getRole())
                .batter(batters)
                .build();

        int finalOrder2 = order;
        Player player = userTeam.getPlayers().stream().filter(each -> each.getOrders().equals(currentOrder))
                .findFirst().orElseThrow(() -> new IllegalStateException("No batter with order : " + finalOrder2));

        String strike;
        String ball;
        if (player.getPlayerOnePlateAppearanceInfos().size() < 1) {
            strike = "0";
            ball = "0";
        } else {
            strike = player.getPlayerOnePlateAppearanceInfos().get(player.getPlayerOnePlateAppearanceInfos().size()-1).getStrikeCount();
            ball = player.getPlayerOnePlateAppearanceInfos().get(player.getPlayerOnePlateAppearanceInfos().size()-1).getBallCount();
        }


        // current inning outcount
        TeamOneInningInfo teamOneInningInfo = userTeam.getTeamOneInningInfos().stream().filter(each -> each.getInning().equals(matchs.getCurrentInning()))
                .findFirst()
                .orElseThrow(() -> new IllegalStateException("No TeamOneInningInfos with inning : " + matchs.getCurrentInning()));

        BallCountResponseDto ballCount = BallCountResponseDto.builder()
                .strike(strike)
                .ball(ball)
                .out(teamOneInningInfo.getOutCount())
                .build();

        MatchOneInningInfo matchOneInningInfo = matchs.getMatchOneInningInfos().stream().filter(each -> each.getInning().equals(matchs.getCurrentInning()))
                .findFirst().orElseThrow(() -> new IllegalStateException("No matchOneInningInfo with inning : " + matchs.getCurrentInning()));

        PlatesResponseDto plates;
        if (matchOneInningInfo.getMatchPlates().size() == 0) {
            plates= PlatesResponseDto.builder()
                    .baseFirst(ZERO)
                    .baseSecond(ZERO)
                    .baseThird(ZERO)
                    .build();
        } else if (matchOneInningInfo.getMatchPlates().size() == 1) {
            plates= PlatesResponseDto.builder()
                    .baseFirst("1")
                    .baseSecond(ZERO)
                    .baseThird(ZERO)
                    .build();
        } else if (matchOneInningInfo.getMatchPlates().size() == 2) {
            plates= PlatesResponseDto.builder()
                    .baseFirst("1")
                    .baseSecond("1")
                    .baseThird(ZERO)
                    .build();
        } else  {
            plates= PlatesResponseDto.builder()
                    .baseFirst("1")
                    .baseSecond("1")
                    .baseThird("1")
                    .build();
        }


        // display is overall
        List<DisplayResponseDto> displaies = new ArrayList<>();
        List<String> inningScore1 = new ArrayList<>();
        List<String> inningScore2 = new ArrayList<>();

        userTeam.getTeamOneInningInfos().forEach(each -> inningScore1.add(each.getScore()));
        otherTeam.getTeamOneInningInfos().forEach(each -> inningScore2.add(each.getScore()));

        DisplayResponseDto displayResponseDto1 = DisplayResponseDto.builder()
                .teamName(userTeam.getName())
                .role(userTeam.getRole())
                .totalScore(userTeam.getTotalScore())
                .inningScore(inningScore1)
                .build();

        DisplayResponseDto displayResponseDto2 = DisplayResponseDto.builder()
                .teamName(otherTeam.getName())
                .role(otherTeam.getRole())
                .totalScore(otherTeam.getTotalScore())
                .inningScore(inningScore2)
                .build();

        displaies.add(displayResponseDto1);
        displaies.add(displayResponseDto2);

        return ProgressResponseDto.builder()
                .status(OK)
                .userWhere(where)
                .matchInfo(matchInfo)
                .isRunning(matchs.getMatchOneInningInfos().stream()
                        .filter(each -> each.getInning().equals(matchs.getCurrentInning()))
                        .findFirst().get().getIsRunning())
                .isScore(matchs.getMatchOneInningInfos().stream()
                        .filter(each -> each.getInning().equals(matchs.getCurrentInning()))
                        .findFirst().get().getIsScore())
                .defense(defense)
                .defenseTeam(defenseTeam)
                .attackTeam(attackTeam)
                .ballCount(ballCount)
                .plates(plates)
                .display(displaies)
                .build();
    }


    private ProgressResponseDto defenseIsUserProgressResponseDto(String defense, Matchs matchs, String where,
                                                                 Team userTeam, Team otherTeam) {

        MatchInfoResponseDto matchInfo = MatchInfoResponseDto.builder()
                .currentInning(matchs.getCurrentInning())
                .when(matchs.getLocation())
                .build();

        PitcherResponseDto pitcher = PitcherResponseDto.builder()
                .name(userTeam.getPlayers().stream()
                        .filter(each -> each.getPosition().equals("pitcher"))
                        .findFirst().get().getName())
                .count(userTeam.getPitchCount())
                .build();

        TeamProgressResponseDto defenseTeam = TeamProgressResponseDto.builder()
                .teamName(userTeam.getName())
                .totalScore(userTeam.getTotalScore())
                .role(userTeam.getRole())
                .pitcher(pitcher)
                .build();

        List<BatterHistoryResponseDto> batters = new ArrayList<>();

        String currentOrder = otherTeam.getCurrentOrder();
        int order = Integer.parseInt(currentOrder);

        for (int index = 0; index < 3; index++) {
            if (order <= 0) order = 9;
            int finalOrder = order;
            int finalOrder1 = order;
            Player player = otherTeam.getPlayers().stream().filter(each -> each.getOrders().equals(String.valueOf(finalOrder)))
                    .findFirst().orElseThrow(() -> new IllegalStateException("No batter with order : " + finalOrder1));


            List<String> histories = new ArrayList<>();
            if (player.getPlayerOnePlateAppearanceInfos().size() < 1) {
                histories = new ArrayList<>();
            } else {
                histories = player.getPlayerOnePlateAppearanceInfos().get(player.getPlayerOnePlateAppearanceInfos().size()-1)
                        .getPlayerOnePlateAppearanceHistories().stream().map(each -> each.getHistory()).collect(Collectors.toList());
            }

            BatterHistoryResponseDto batterHistoryResponseDto = BatterHistoryResponseDto.builder()
                    .name(player.getName())
                    .plateAppearance(player.getPlateAppearance())
                    .hit(player.getHitCount())
                    .order(player.getOrders())
                    .history(histories)
                    .build();

            batters.add(batterHistoryResponseDto);
            order--;
        }


        TeamProgressResponseDto attackTeam = TeamProgressResponseDto.builder()
                .teamName(otherTeam.getName())
                .totalScore(otherTeam.getTotalScore())
                .role(otherTeam.getRole())
                .batter(batters)
                .build();

        int finalOrder2 = order;
        Player player = otherTeam.getPlayers().stream().filter(each -> each.getOrders().equals(currentOrder))
                .findFirst().orElseThrow(() -> new IllegalStateException("No batter with order : " + finalOrder2));

        String strike;
        String ball;
        if (player.getPlayerOnePlateAppearanceInfos().size() < 1) {
            strike = "0";
            ball = "0";
        } else {
            strike = player.getPlayerOnePlateAppearanceInfos().get(player.getPlayerOnePlateAppearanceInfos().size()-1).getStrikeCount();
            ball = player.getPlayerOnePlateAppearanceInfos().get(player.getPlayerOnePlateAppearanceInfos().size()-1).getBallCount();
        }


        // current inning outcount
        TeamOneInningInfo teamOneInningInfo = otherTeam.getTeamOneInningInfos().stream().filter(each -> each.getInning().equals(matchs.getCurrentInning()))
                .findFirst()
                .orElseThrow(() -> new IllegalStateException("No TeamOneInningInfos with inning : " + matchs.getCurrentInning()));

        BallCountResponseDto ballCount = BallCountResponseDto.builder()
                .strike(strike)
                .ball(ball)
                .out(teamOneInningInfo.getOutCount())
                .build();

        MatchOneInningInfo matchOneInningInfo = matchs.getMatchOneInningInfos().stream().filter(each -> each.getInning().equals(matchs.getCurrentInning()))
                .findFirst().orElseThrow(() -> new IllegalStateException("No matchOneInningInfo with inning : " + matchs.getCurrentInning()));

        PlatesResponseDto plates = PlatesResponseDto.builder()
                .baseFirst(matchOneInningInfo.getMatchPlates().stream().filter(each -> each.getName().equals("baseFirst"))
                        .findFirst().get().getIsBatter())
                .baseSecond(matchOneInningInfo.getMatchPlates().stream().filter(each -> each.getName().equals("baseSecond"))
                        .findFirst().get().getIsBatter())
                .baseThird(matchOneInningInfo.getMatchPlates().stream().filter(each -> each.getName().equals("baseThird"))
                        .findFirst().get().getIsBatter())
                .build();

        List<DisplayResponseDto> displaies = new ArrayList<>();
        List<String> inningScore1 = new ArrayList<>();
        List<String> inningScore2 = new ArrayList<>();

        userTeam.getTeamOneInningInfos().forEach(each -> inningScore1.add(each.getScore()));
        otherTeam.getTeamOneInningInfos().forEach(each -> inningScore2.add(each.getScore()));

        DisplayResponseDto displayResponseDto1 = DisplayResponseDto.builder()
                .teamName(userTeam.getName())
                .role(userTeam.getRole())
                .totalScore(userTeam.getTotalScore())
                .inningScore(inningScore1)
                .build();

        DisplayResponseDto displayResponseDto2 = DisplayResponseDto.builder()
                .teamName(otherTeam.getName())
                .role(otherTeam.getRole())
                .totalScore(otherTeam.getTotalScore())
                .inningScore(inningScore2)
                .build();

        displaies.add(displayResponseDto1);
        displaies.add(displayResponseDto2);

        return ProgressResponseDto.builder()
                .status(OK)
                .userWhere(where)
                .matchInfo(matchInfo)
                .isRunning(matchs.getMatchOneInningInfos().stream()
                        .filter(each -> each.getInning().equals(matchs.getCurrentInning()))
                        .findFirst().get().getIsRunning())
                .isScore(matchs.getMatchOneInningInfos().stream()
                        .filter(each -> each.getInning().equals(matchs.getCurrentInning()))
                        .findFirst().get().getIsScore())
                .defense(defense)
                .defenseTeam(defenseTeam)
                .attackTeam(attackTeam)
                .ballCount(ballCount)
                .plates(plates)
                .display(displaies)
                .build();

    }

    public ProgressResponseDto getPitchResult(Long matchId, String inning,
                                              String when, String userEmail, HttpServletRequest request) {
        String userEmailInCookie = (String) request.getAttribute("userEmail");

        try {
            GameApplication savedGameApplication = getGameApplication();

            Matchs matchs = savedGameApplication.getMatchs().stream()
                    .filter(each -> each.getId().equals(matchId))
                    .findFirst()
                    .orElseThrow(() ->
                            new IllegalStateException("getChoicedTeam : 해당 match가 없습니다. id : " + matchId));

            Team userTeam = matchs.getTeams().stream()
                    .filter(each -> each.getUserEmail().equals(userEmail))
                    .findFirst()
                    .orElseThrow(() ->
                            new IllegalStateException("getLastest : 해당 team 없습니다. userEmail : " + userEmail));

            Team otherTeam = matchs.getTeams().stream()
                    .filter(each -> !each.getUserEmail().equals(userEmail))
                    .findFirst()
                    .orElseThrow(() ->
                            new IllegalStateException("getLastest : not opposite. userEmail : " + userEmail));

            ProgressResponseDto progressResponseDto;

            if (matchs.getLocation().equals(TOP)) {
                if (userTeam.getRole().equals(HOME)) {
                    // attack : other, defense : user
                    String defense = "true";
                    userTeamPitch(matchs, userTeam, otherTeam);
                    progressResponseDto = defenseIsUserProgressResponseDto(defense, matchs, HOME, userTeam, otherTeam);

                } else {
                    // attack : user, defense : other
                    String defense = "false";
                    otherTeamPitch();
                    progressResponseDto = defenseIsOtherProgressResponseDto(defense, matchs, AWAY, userTeam, otherTeam);
                }

            } else {
                if (userTeam.getRole().equals(HOME)) {
                    // attack : user, defense : other
                    String defense = "false";
                    otherTeamPitch();
                    progressResponseDto = defenseIsOtherProgressResponseDto(defense, matchs, HOME, userTeam, otherTeam);
                } else {
                    // attack : other, defense : user
                    String defense = "true";
//                    userTeamPitch();
                    progressResponseDto = defenseIsUserProgressResponseDto(defense, matchs, AWAY, userTeam, otherTeam);
                }
            }

            return progressResponseDto;

        } catch (Exception e) {
            e.printStackTrace();
            return ProgressResponseDto.builder()
                    .status(UNAUTHORIZED)
                    .build();

        }
    }

    private void otherTeamPitch() {

    }

    private void userTeamPitch(Matchs matchs, Team userTeam, Team otherTeam) {

        Player pitcher = userTeam.getPlayers().stream()
                .filter(each -> each.getPosition().equals("pitcher"))
                .findFirst()
                .orElseThrow(() -> new IllegalStateException("userTeamPitch() : No Pitcher "));
        int pitchCount = Integer.parseInt(pitcher.getPitchCount());

        Player currentBatter = otherTeam.getPlayers().stream()
                .filter(player -> player.getOrders().equals(otherTeam.getCurrentOrder()))
                .findFirst()
                .orElseThrow(() ->
                        new IllegalStateException("userTeamPitch() : No batter! order = " + otherTeam.getCurrentOrder()));

        if (pitchCount == 0) {
            List<PlayerOnePlateAppearanceHistory> playerOnePlateAppearanceHistories
                    = new ArrayList<>();

            PlayerOnePlateAppearanceInfo playerOnePlateAppearanceInfo
                    = PlayerOnePlateAppearanceInfo.builder()
                    .strikeCount(ZERO)
                    .ballCount(ZERO)
                    .playerOnePlateAppearanceHistories(playerOnePlateAppearanceHistories)
                    .build();
            currentBatter.getPlayerOnePlateAppearanceInfos().add(playerOnePlateAppearanceInfo);
        }
        pitcher.setPitchCount(String.valueOf(pitchCount++));

        userTeam.setPitchCount(String.valueOf(pitchCount));

        String ApitchResult = getAPitchResult(currentBatter.getBattingAverage());

        applyResult(ApitchResult, currentBatter, matchs);





    }

    private void applyResult(String ApitchResult, Player currentBatter, Matchs matchs) {
        if (ApitchResult.equals(STRIKE)) {
            currentBatter.getPlayerOnePlateAppearanceInfos().get(currentBatter.getPlayerOnePlateAppearanceInfos().size()-1)
                    .getPlayerOnePlateAppearanceHistories().add(PlayerOnePlateAppearanceHistory.builder()
                    .history(STRIKE).build());


            String strikeCount = currentBatter.getPlayerOnePlateAppearanceInfos().get(currentBatter.getPlayerOnePlateAppearanceInfos().size()-1)
                    .getStrikeCount();
            int strike = Integer.parseInt(strikeCount);
            currentBatter.getPlayerOnePlateAppearanceInfos().get(currentBatter.getPlayerOnePlateAppearanceInfos().size()-1)
                    .setStrikeCount(String.valueOf(strike++));
            strikeCount = currentBatter.getPlayerOnePlateAppearanceInfos().get(currentBatter.getPlayerOnePlateAppearanceInfos().size()-1)
                    .getStrikeCount();

            if (Integer.parseInt(strikeCount) == 3) {

            }


        } else if (ApitchResult.equals(BALL)) {
            currentBatter.getPlayerOnePlateAppearanceInfos().get(currentBatter.getPlayerOnePlateAppearanceInfos().size()-1)
                    .getPlayerOnePlateAppearanceHistories().add(PlayerOnePlateAppearanceHistory.builder()
                    .history(BALL).build());
        } else if (ApitchResult.equals(HIT)) {
            currentBatter.getPlayerOnePlateAppearanceInfos().get(currentBatter.getPlayerOnePlateAppearanceInfos().size()-1)
                    .getPlayerOnePlateAppearanceHistories().add(PlayerOnePlateAppearanceHistory.builder()
                    .history(HIT).build());
        } else {
            currentBatter.getPlayerOnePlateAppearanceInfos().get(currentBatter.getPlayerOnePlateAppearanceInfos().size()-1)
                    .getPlayerOnePlateAppearanceHistories().add(PlayerOnePlateAppearanceHistory.builder()
                    .history(OUT).build());
        }
    }

    private String getAPitchResult(String batting_average) {
        double hit = Double.parseDouble(batting_average);
        double strike = (1 - hit) / 2 - 0.05;
        double ball = (1 - hit) / 2 - 0.05;
        double ballStrike = ball + strike;
        double ballStrikeHit = ballStrike + hit;

        return getCondition(strike, ballStrike, ballStrikeHit) ;
    }

    private String getCondition(double strike, double ballStrike, double ballStrikeHit) {
        double random = Math.random();
        if (random <= strike) {
            return STRIKE;
        } else if (random > strike && random <= ballStrike) {
            return BALL;
        } else if (random > ballStrike && random <= ballStrikeHit) {
            return HIT;
        } else {
            return OUT;
        }
    }
}

