package com.codesquad.baseball10.service;

import com.codesquad.baseball10.web.dto.responesDto.*;
import com.codesquad.baseball10.web.dto.responesDto.progress.*;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class MockService {

    public TeamsResponseDto getTeamsResponseDto() {
        List<TeamResponseDto> data = new ArrayList<>();

        for (int count = 0; count < 10; count++) {
            TeamResponseDto team = TeamResponseDto.builder()
                    .id(1L)
                    .name("삼성")
                    .logoUrl("http://naver.com")
                    .build();
            data.add(team);
        }

        return TeamsResponseDto.builder()
                .status("200")
                .data(data)
                .build();
    }

    public PlayersResponseDto getPlayersResponseDto() {
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

    public TeamChoiceResponseDto postTeamChoice(Long teamId) {

        TeamResponseDto team1 = TeamResponseDto.builder()
                .id(teamId)
                .name("삼성")
                .logoUrl("www.naver.com")
                .userEmail("guswns1659@gmail.com")
                .selected("true")
                .location("HOME")
                .build();

        return TeamChoiceResponseDto.builder()
                .status("200")
                .team(team1)
                .build();
    }

    public ProgressResponseDto getFirstProgress() {
        String status = "200";
        String userWhere = "HOME";

        MatchInfoResponseDto matchInfo = MatchInfoResponseDto.builder()
                .currentInning("1")
                .when("TOP")
                .build();

        String defense = "true";

        PitcherResponseDto pitcher = PitcherResponseDto.builder()
                .name("최동원")
                .count("0")
                .build();

        TeamProgressResponseDto defenseTeam = TeamProgressResponseDto.builder()
                .teamName("삼성")
                .totalScore("0")
                .location("HOME")
                .pitcher(pitcher)
                .build();

        List<BatterHistoryResponseDto> batters = new ArrayList<>();

        for (int index = 1; index < 10; index++) {
            BatterHistoryResponseDto batter = BatterHistoryResponseDto.builder()
                    .name("트라웃")
                    .plateAppearance("0")
                    .hit("0")
                    .order(String.valueOf(index))
                    .history(Arrays.asList("0", "0", "0"))
                    .build();
            batters.add(batter);
        }

        TeamProgressResponseDto attackTeam = TeamProgressResponseDto.builder()
                .teamName("LG")
                .totalScore("0")
                .location("AWAY")
                .batter(batters)
                .build();

        BallCountResponseDto ballcount = BallCountResponseDto.builder()
                .strike("0")
                .ball("0")
                .out("0")
                .build();

        PlatesResponseDto plates = PlatesResponseDto.builder()
                .baseFirst("1")
                .baseSecond("2")
                .baseThird("3")
                .build();

        List<DisplayResponseDto> displays = new ArrayList<>();
        DisplayResponseDto display1 = DisplayResponseDto.builder()
                .teamName("삼성")
                .location("AWAY")
                .totalScore("0")
                .inningScore(Arrays.asList("0","0","0","0","0","0","0","0","0"))
                .build();

        DisplayResponseDto display2 = DisplayResponseDto.builder()
                .teamName("한화")
                .location("HOME")
                .totalScore("0")
                .inningScore(Arrays.asList("0","0","0","0","0","0","0","0","0"))
                .build();

        displays.add(display1);
        displays.add(display2);

        return ProgressResponseDto.builder()
                .status(status)
                .userWhere(userWhere)
                .matchInfo(matchInfo)
                .defense(defense)
                .defenseTeam(defenseTeam)
                .attackTeam(attackTeam)
                .ballCount(ballcount)
                .plates(plates)
                .display(displays)
                .build();
    }

    public ProgressResponseDto getProgress(String inning, String when) {
        String status = "200";
        String userWhere = "HOME";

        MatchInfoResponseDto matchInfo = MatchInfoResponseDto.builder()
                .currentInning(inning)
                .when(when)
                .build();

        String defense = "true";

        PitcherResponseDto pitcher = PitcherResponseDto.builder()
                .name("최동원")
                .count("45")
                .build();

        TeamProgressResponseDto defenseTeam = TeamProgressResponseDto.builder()
                .teamName("삼성")
                .totalScore("5")
                .location("HOME")
                .pitcher(pitcher)
                .build();

        List<BatterHistoryResponseDto> batters = new ArrayList<>();

        for (int index = 1; index < 10; index++) {
            BatterHistoryResponseDto batter = BatterHistoryResponseDto.builder()
                    .name("트라웃")
                    .plateAppearance("1")
                    .hit("1")
                    .order(String.valueOf(index))
                    .history(Arrays.asList("1", "2", "1"))
                    .build();
            batters.add(batter);
        }

        TeamProgressResponseDto attackTeam = TeamProgressResponseDto.builder()
                .teamName("LG")
                .totalScore("5")
                .location("AWAY")
                .batter(batters)
                .build();

        BallCountResponseDto ballcount = BallCountResponseDto.builder()
                .strike("1")
                .ball("2")
                .out("1")
                .build();

        PlatesResponseDto plates = PlatesResponseDto.builder()
                .baseFirst("1")
                .baseSecond("0")
                .baseThird("1")
                .build();

        List<DisplayResponseDto> displays = new ArrayList<>();
        DisplayResponseDto display1 = DisplayResponseDto.builder()
                .teamName("삼성")
                .location("AWAY")
                .totalScore("5")
                .inningScore(Arrays.asList("1","2","2","0","0","0","0","0","0"))
                .build();

        DisplayResponseDto display2 = DisplayResponseDto.builder()
                .teamName("한화")
                .location("HOME")
                .totalScore("5")
                .inningScore(Arrays.asList("2","2","1","0","0","0","0","0","0"))
                .build();

        displays.add(display1);
        displays.add(display2);

        return ProgressResponseDto.builder()
                .status(status)
                .userWhere(userWhere)
                .matchInfo(matchInfo)
                .defense(defense)
                .defenseTeam(defenseTeam)
                .attackTeam(attackTeam)
                .ballCount(ballcount)
                .plates(plates)
                .display(displays)
                .build();
    }
}
