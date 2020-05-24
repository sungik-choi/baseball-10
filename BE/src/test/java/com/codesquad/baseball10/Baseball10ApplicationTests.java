//package com.codesquad.baseball10;
//
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.web.client.TestRestTemplate;
//import org.springframework.boot.web.server.LocalServerPort;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.test.context.junit4.SpringRunner;
//
//import static org.assertj.core.api.Assertions.assertThat;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
//public class Baseball10ApplicationTests {
//
//    @LocalServerPort
//    private int port;
//
//    @Autowired
//    private TestRestTemplate restTemplate;
//
//    private final Logger logger = LoggerFactory.getLogger(Baseball10ApplicationTests.class);
//
//    @Test
//    public void contextLoads() {
//        assertThat(restTemplate).isNotNull();
//        assertThat(logger).isNotNull();
//    }
//
//    @Test
//    public void HelloControllerTest() {
//        String hello = "hello";
//        String url = "http://localhost:" + port + "/" + hello;
//        ResponseEntity<String> responseEntity = restTemplate.getForEntity(url, String.class);
//
//        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
//        assertThat(responseEntity.getBody()).isEqualTo(hello);
//    }
//}
