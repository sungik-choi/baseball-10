package com.codesquad.baseball10.web.controller;

import com.codesquad.baseball10.domain.GameApplication;
import com.codesquad.baseball10.service.InitService;
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
public class InitControllerTest {

    @LocalServerPort
    private int port;

    private Logger logger = LoggerFactory.getLogger(InitControllerTest.class);

    @Autowired
    private InitService initService;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void initDataTest() {
        String url = "http://localhost:" + port + "/init";

        ResponseEntity<GameApplication> responseEntity
                = restTemplate.getForEntity(url, GameApplication.class);

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody().getName()).isEqualTo("baseball");
    }
}
