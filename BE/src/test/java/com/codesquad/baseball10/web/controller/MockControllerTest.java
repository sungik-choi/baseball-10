package com.codesquad.baseball10.web.controller;

import com.codesquad.baseball10.web.dto.PlayersResponseDto;
import com.codesquad.baseball10.web.dto.TeamChoiceResponseDto;
import com.codesquad.baseball10.web.dto.TeamsResponseDto;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class MockControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    private Logger logger = LoggerFactory.getLogger(MockControllerTest.class);

    @Test
    public void getTeamsTest() {

        String url = "http://15.164.34.6/api/mock/teams";
        ResponseEntity<TeamsResponseDto> responseEntity = restTemplate.getForEntity(url, TeamsResponseDto.class);

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody().getStatus()).isEqualTo("200");
    }

    @Test
    public void getPlayersTest() {
        String url = "http://15.164.34.6/api/mock/players";
        ResponseEntity<PlayersResponseDto> responseEntity = restTemplate.getForEntity(url, PlayersResponseDto.class);

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody().getData().get(0).getTeamName()).isEqualTo("삼성");
    }

    @Test
    public void teamChoiceTest() {
        String url = "http://15.164.34.6/api/mock/1";

        Object request = new Object();

        ResponseEntity<TeamChoiceResponseDto> responseEntity
                = restTemplate.postForEntity(url, request, TeamChoiceResponseDto.class);

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody().getTeam().getName()).isEqualTo("삼성");
    }
}
