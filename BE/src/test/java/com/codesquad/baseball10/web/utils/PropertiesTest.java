package com.codesquad.baseball10.web.utils;

import com.codesquad.baseball10.utils.GithubProperty;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.stereotype.Component;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class PropertiesTest {

    @Autowired
    private GithubProperty githubProperty;

    @Test
    public void githubPropertiesTest() {
        assertThat(githubProperty.getUrl()).isNotNull();
        assertThat(githubProperty.getClient_id()).isNotNull();
        assertThat(githubProperty.getClient_secret()).isNotNull();
        assertThat(githubProperty.getRedirect_url()).isNotNull();
    }
}
