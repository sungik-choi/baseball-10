package com.codesquad.baseball10.web.controller;

import com.codesquad.baseball10.domain.GameApplication;
import com.codesquad.baseball10.domain.GameApplicationRepository;
import com.codesquad.baseball10.web.dto.responesDto.TeamsResponseDto;
import org.junit.Before;
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
        String url = "http://localhost:" + port + "/init";
        restTemplate.getForEntity(url, GameApplication.class);
    }

    @Test
    public void getTeamsTest() {

        String url = "http://localhost:" + port + "/teams";

        ResponseEntity<TeamsResponseDto> responseEntity
                = restTemplate.getForEntity(url, TeamsResponseDto.class);

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody().getMatchId()).isEqualTo(1);
    }
}
