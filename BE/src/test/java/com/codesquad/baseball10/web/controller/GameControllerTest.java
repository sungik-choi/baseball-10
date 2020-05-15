package com.codesquad.baseball10.web.controller;

import com.codesquad.baseball10.domain.GameApplication;
import com.codesquad.baseball10.domain.GameApplicationRepository;
import com.codesquad.baseball10.web.dto.responesDto.PlayersResponseDto;
import com.codesquad.baseball10.web.dto.responesDto.TeamChoiceResponseDto;
import com.codesquad.baseball10.web.dto.responesDto.TeamsResponseDto;
import com.codesquad.baseball10.web.dto.responesDto.loading.LoadingResponseDto;
import com.codesquad.baseball10.web.dto.responesDto.progress.ProgressResponseDto;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class GameControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private GameApplicationRepository gameApplicationRepository;

    private Logger logger = LoggerFactory.getLogger(GameApplication.class);

    @Before
    public void setUp() {
        // 초기 데이터 삽입 요청
        String initRequestURL = "http://localhost:" + port + "/init";
        restTemplate.getForEntity(initRequestURL, GameApplication.class);

        // 팀 리스트 요청
        String teamsRequestURL = "http://localhost:" + port + "/teams";
        restTemplate.getForEntity(teamsRequestURL, TeamsResponseDto.class);

        // 유저1 팀 선택 요청
        String user1Email = "guswns1659@gmail.com";
        String user1TeamChoiceRequestURL = "http://localhost:" + port + "/1/1/"+ user1Email;
        restTemplate.getForEntity(user1TeamChoiceRequestURL, TeamChoiceResponseDto.class);

        // user2 team request
        String user2Email = "zmdk1127@naver.com";
        String user2TeamChoiceRequestURL = "http://localhost:" + port + "/1/2/"+ user2Email;
        restTemplate.getForEntity(user2TeamChoiceRequestURL, TeamChoiceResponseDto.class);
    }

    @Test
    public void getTeamsTest() {

        String url = "http://localhost:" + port + "/teams";

        ResponseEntity<TeamsResponseDto> responseEntity
                = restTemplate.getForEntity(url, TeamsResponseDto.class);

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody().getMatchId()).isEqualTo(1);
        assertThat(responseEntity.getBody().getData().get(0).getUserEmail()).isNull();
        assertThat(responseEntity.getBody().getData().get(0).getSelected()).isNull();
    }

    @Test
    public void teamChooseTest() {

        // give
        String teamName = "키움히어로즈";
        String playerName = "키르난데스";
        String teamLogoUrl = "https://i.ibb.co/4dyWvQq/kiwoom.png";
        String userEmail = "guswns1659@gmail.com";
        String True = "true";
        String location = "HOME";
        String userTeamChoiceRequestURL = "http://localhost:" + port + "/1/2/"+ userEmail;

        // when
        ResponseEntity<TeamChoiceResponseDto> responseEntity
                = restTemplate.getForEntity(userTeamChoiceRequestURL, TeamChoiceResponseDto.class);

        // then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody().getTeam().getName()).isEqualTo(teamName);
        assertThat(responseEntity.getBody().getTeam().getUserEmail()).isEqualTo(userEmail);
        assertThat(responseEntity.getBody().getTeam().getSelected()).isEqualTo(True);
        assertThat(responseEntity.getBody().getTeam().getRole()).isEqualTo(location);
    }

    @Test
    public void getLastestTest() {
        // given
        String email = "guswns1659@gmail.com";
        String url = "http://localhost:" + port + "/1" + "/" + email + "/lastest";

        String userWhere = "HOME";
        String isRunning = "false";

        // when
        ResponseEntity<ProgressResponseDto> responseEntity
                = restTemplate.getForEntity(url, ProgressResponseDto.class);

        // then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody().getUserWhere()).isEqualTo(userWhere);
        assertThat(responseEntity.getBody().getIsRunning()).isEqualTo(isRunning);
    }

    @Test
    public void getPitchResultTest() {
        // given
        String email = "guswns1659@gmail.com";
        String url = "http://localhost:" + port + "/1" + "/1" + "/TOP" + "/" + email;

        String userWhere = "HOME";
        String isRunning = "false";
        String pitchCount = "1";
        String plateAppearance = "1";

        //when
        ResponseEntity<ProgressResponseDto> responseEntity
                = restTemplate.getForEntity(url, ProgressResponseDto.class);

        //then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody().getDefenseTeam().getPitcher().getCount()).isEqualTo(pitchCount);
        assertThat(responseEntity.getBody().getAttackTeam().getBatter().get(0).getPlateAppearance()).isEqualTo(plateAppearance);
    }

    @Test
    public void getPlayers() {
        // given
        String email = "guswns1659@gmail.com";
        String url = "http://localhost:" + port + "/1" + "/players";

        String teamName1 = "두산베어스";
        String player1 = "두르난데스";
        String player2 = "두건우";
        String teamName2 = "키움히어로즈";
        String player3 = "키르난데스";
        String player4 = "키건우";

        // when
        ResponseEntity<PlayersResponseDto> responseEntity
                = restTemplate.getForEntity(url, PlayersResponseDto.class);

        // then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody().getData().get(0).getTeamName()).isEqualTo(teamName1);
        assertThat(responseEntity.getBody().getData().get(0).getPlayers().get(0).getName()).isEqualTo(player1);
        assertThat(responseEntity.getBody().getData().get(0).getPlayers().get(1).getName()).isEqualTo(player2);
        assertThat(responseEntity.getBody().getData().get(1).getTeamName()).isEqualTo(teamName2);
        assertThat(responseEntity.getBody().getData().get(1).getPlayers().get(0).getName()).isEqualTo(player3);
        assertThat(responseEntity.getBody().getData().get(1).getPlayers().get(1).getName()).isEqualTo(player4);
    }

    @Test
    public void getLoading() {

        // given
        String email = "guswns1659@gmail.com";
        String url = "http://localhost:" + port + "/1" + "/loading";

        String teamName1 = "두산베어스";
        String team1LogoUrl = "https://i.ibb.co/F7fd0RQ/bears.png";
        String teamName2 = "키움히어로즈";
        String team2LogoUrl = "https://i.ibb.co/4dyWvQq/kiwoom.png";

        // when
        ResponseEntity<LoadingResponseDto> responseEntity
                = restTemplate.getForEntity(url, LoadingResponseDto.class);

        // then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody().getStart()).isEqualTo("true");
        assertThat(responseEntity.getBody().getFirstTeam().getName()).isEqualTo(teamName1);
        assertThat(responseEntity.getBody().getFirstTeam().getLogoUrl()).isEqualTo(team1LogoUrl);
//        assertThat(responseEntity.getBody().getFirstTeam()).isNull();
//        assertThat(responseEntity.getBody().getSecondTeam()).isNull();
        assertThat(responseEntity.getBody().getSecondTeam().getName()).isEqualTo(teamName2);
        assertThat(responseEntity.getBody().getSecondTeam().getLogoUrl()).isEqualTo(team2LogoUrl);
    }
}
