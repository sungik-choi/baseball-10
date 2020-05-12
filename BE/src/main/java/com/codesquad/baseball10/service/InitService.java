package com.codesquad.baseball10.service;

import com.codesquad.baseball10.domain.BasicTeam;
import com.codesquad.baseball10.domain.GameApplication;
import com.codesquad.baseball10.domain.GameApplicationRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
@AllArgsConstructor
public class InitService {

    private final GameApplicationRepository gameApplicationRepository;

    public GameApplication initData() {
        List<BasicTeam> basicTeams = new ArrayList<>();
        List<String> teamNames = Arrays.asList("두산베이스", "키움히어로즈", "SK와이번즈", "LG트윈스", "NC다이노스", "KT위즈",
                "KIA타이커즈", "삼성라이온즈", "한화이글스", "롯데자이언츠");

        String logoUrl = "https://github.com/guswns1659/Writing/blob/master/%EA%B8%B0%ED%83%80/sk%20logo.png";

        for (String each : teamNames) {
            BasicTeam basicTeam = BasicTeam.builder()
                    .logoUrl(logoUrl)
                    .name(each)
                    .build();
            basicTeams.add(basicTeam);
        }

        GameApplication gameApplication = GameApplication.builder()
                .name("baseball")
                .BasicTeams(basicTeams)
                .build();

        return gameApplicationRepository.save(gameApplication);
    }
}
