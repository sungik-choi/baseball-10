package com.codesquad.baseball10.domain;

import lombok.*;
import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Matchs {
    @Id
    private Long id;

    private String currentInning;
    private String location;
    private String teamMatching;
    private List<Team> teams;
    private List<MatchOneInningInfo> matchOneInningInfos;

    public boolean sizeIsZero() {
        return this.teams.size() == 0;
    }

    public void finishTeamMatching() {
        this.teamMatching = "done";
    }

    public void saveChoosedTeam(BasicTeam basicTeam, String userEmail, String HOME) {

        final String ZERO = "0";

        List<Player> players = initPlayers(basicTeam.getBasicPlayers());
        List<TeamOneInningInfo> teamOneInningInfos = initTeamOneInningInfos();

        Team choosedTeam = Team.builder()
                .name(basicTeam.getName())
                .logoUrl(basicTeam.getLogoUrl())
                .userEmail(userEmail)
                .selected("true")
                .role(HOME)
                .totalScore(ZERO)
                .totalPa(ZERO)
                .totalHit(ZERO)
                .totalOut(ZERO)
                .currentOrder("1")
                .pitchCount(ZERO)
                .players(players)
                .teamOneInningInfos(teamOneInningInfos)
                .build();

        this.teams.add(choosedTeam);
    }

    private List<TeamOneInningInfo> initTeamOneInningInfos() {

        final String ZERO = "0";

        List<TeamOneInningInfo> teamOneInningInfos
                = new ArrayList<>();

        for (int inning = 1; inning < 13; inning++) {
            TeamOneInningInfo teamOneInningInfo =
                    TeamOneInningInfo.builder()
                    .inning(String.valueOf(inning))
                    .outCount(ZERO)
                    .score(ZERO)
                    .build();
            teamOneInningInfos.add(teamOneInningInfo);
        }

        return teamOneInningInfos;
    }

    private List<Player> initPlayers(List<BasicPlayer> basicPlayers) {

        final String ZERO = "0";

        List<PlayerOnePlateAppearanceInfo> playerOnePlateAppearanceInfos
                = initPlayerOnePlateAppearanceInfos();

        List<Player> players = new ArrayList<>();

        for (BasicPlayer each : basicPlayers) {
            Player player = Player.builder()
                    .name(each.getName())
                    .position(each.getPosition())
                    .battingAverage(each.getBattingAverage())
                    .orders(each.getOrders())
                    .plateAppearance(ZERO)
                    .hitCount(ZERO)
                    .outCount(ZERO)
                    .gameAverage(ZERO)
                    .pitchCount(ZERO)
                    .build();

            players.add(player);
        }
        return players;
    }

    private List<PlayerOnePlateAppearanceInfo> initPlayerOnePlateAppearanceInfos() {

        final String ZERO = "0";

        List<PlayerOnePlateAppearanceInfo> playerOnePlateAppearanceInfos
                = new ArrayList<>();

        List<PlayerOnePlateAppearanceHistory> playerOnePlateAppearanceHistories
                = initPlayerOnePlateAppearanceHistories();

//        for (int inning = 1; inning < 13; inning++) {
//            PlayerOnePlateAppearanceInfo each
//                    = PlayerOnePlateAppearanceInfo.builder()
//                    .strikeCount(ZERO)
//                    .ballCount(ZERO)
//                    .playerOnePlateAppearanceHistories(playerOnePlateAppearanceHistories)
//                    .build();
//
//            playerOnePlateAppearanceInfos.add(each);
//        }

        return playerOnePlateAppearanceInfos;
    }

    private List<PlayerOnePlateAppearanceHistory> initPlayerOnePlateAppearanceHistories() {

        return new ArrayList<>();
    }
}
