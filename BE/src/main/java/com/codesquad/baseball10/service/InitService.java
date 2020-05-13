package com.codesquad.baseball10.service;

import com.codesquad.baseball10.domain.BasicPlayer;
import com.codesquad.baseball10.domain.BasicTeam;
import com.codesquad.baseball10.domain.GameApplication;
import com.codesquad.baseball10.domain.GameApplicationRepository;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
@AllArgsConstructor
public class InitService {

    private final GameApplicationRepository gameApplicationRepository;

    private final Logger logger = LoggerFactory.getLogger(InitService.class);

    public GameApplication initData() {
        List<BasicTeam> basicTeams = new ArrayList<>();
        List<String> teamNames = Arrays.asList(
                "두산베어스", "키움히어로즈", "SK와이번즈", "LG트윈스", "NC다이노스",
                "KT위즈", "KIA타이거즈", "삼성라이온즈", "한화이글스", "롯데자이언츠");

        List<String> logoUrls = Arrays.asList(
                "https://i.ibb.co/F7fd0RQ/bears.png",
                "https://i.ibb.co/4dyWvQq/kiwoom.png",
                "https://i.ibb.co/344YxmC/wyvenrs.png",
                "https://i.ibb.co/zSY3jwm/twins.png",
                "https://i.ibb.co/cvYqtKz/dinos.png",
                "https://i.ibb.co/7tb918h/wiz.png",
                "https://i.ibb.co/jf3K5fh/tigers.png",
                "https://i.ibb.co/fCXS31Z/lions.png",
                "https://i.ibb.co/2kf9GF1/eagles.png",
                "https://i.ibb.co/yRrsp5g/giants.png"
        );

        List<String> lastNames = Arrays.asList("두", "키", "슥", "엘", "엔", "켁", "킼", "삼", "한", "롯");

        logger.info("lastNames : " + lastNames);

        List<List<String>> allTeamNames = new ArrayList<>();

        for (int index = 0; index < lastNames.size(); index++) {
            List<String> eachTeamNames = Arrays.asList(
                    lastNames.get(index)+"르난데스",
                    lastNames.get(index)+"건우",
                    lastNames.get(index)+"홍련",
                    lastNames.get(index)+"재일",
                    lastNames.get(index)+"경민",
                    lastNames.get(index)+"재환",
                    lastNames.get(index)+"세혁",
                    lastNames.get(index)+"주환",
                    lastNames.get(index)+"재호"
            );
            allTeamNames.add(eachTeamNames);
        }

        logger.info("allTeamNames" + allTeamNames);


        List<List<BasicPlayer>> basicPlayerss = new ArrayList<>();

        for (List<String> each : allTeamNames) {
            basicPlayerss.add(initializeBasicPlayers(each));
        }

        for (int index = 0; index < teamNames.size(); index++) {
            BasicTeam basicTeam = BasicTeam.builder()
                    .logoUrl(logoUrls.get(index))
                    .name(teamNames.get(index))
                    .basicPlayers(basicPlayerss.get(index))
                    .build();
            basicTeams.add(basicTeam);
        }

        GameApplication gameApplication = GameApplication.builder()
                .name("baseball")
                .BasicTeams(basicTeams)
                .build();

        return gameApplicationRepository.save(gameApplication);
    }

    private List<BasicPlayer> initializeBasicPlayers(List<String> playerNames) {

        String batter = "batter";
        String pitcher = "pitcher";

        List<BasicPlayer> basicPlayers = new ArrayList<>();

        List<String> bearsPositions = Arrays.asList(
                batter, batter, batter, batter, batter,
                batter, batter, batter, pitcher
        );

        List<String> bearsAverages = Arrays.asList(
                "0.344", "0.319", "0.310", "0.293", "0.288",
                "0.283", "0.279", "0.277", "0.268"
        );

        for (int index = 0; index < bearsAverages.size(); index++) {
            BasicPlayer basicPlayer = BasicPlayer.builder()
                    .name(playerNames.get(index))
                    .position(bearsPositions.get(index))
                    .battingAverage(bearsAverages.get(index))
                    .orders(String.valueOf(index+1))
                    .build();
            basicPlayers.add(basicPlayer);
        }

        return basicPlayers;

    }

    public GameApplication getGameApplication() {
        return gameApplicationRepository.findById(1L).orElseThrow(() ->
                new IllegalStateException("InitService : 해당 id에 해당하는 gameApplication이 없습니다. id = " + 1L));
    }
}
