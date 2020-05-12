package com.codesquad.baseball10.web.controller;

import com.codesquad.baseball10.web.dto.responesDto.*;
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

import java.util.HashMap;
import java.util.Map;

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
//        String url = "http://15.164.34.6/api/mock/1";
        String url = "http://localhost:"+port+"/mock/choice";

        Map<String, Long> requestBody = new HashMap<>();
        requestBody.put("teamId", 1L);

        ResponseEntity<TeamChoiceResponseDto> responseEntity
                = restTemplate.postForEntity(url, requestBody, TeamChoiceResponseDto.class);

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody().getTeam().getName()).isEqualTo("삼성");
    }

    @Test
    public void getFirstProgressTest() {
        String url = "http://localhost:" + port + "/mock/first";

        ResponseEntity<ProgressResponseDto> responseEntity
                = restTemplate.getForEntity(url, ProgressResponseDto.class);

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody().getUserWhere()).isEqualTo("HOME");
    }

    @Test
    public void getProgressTest() {

    }
}
