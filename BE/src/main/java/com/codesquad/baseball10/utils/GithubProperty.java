package com.codesquad.baseball10.utils;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties("github")
@Getter
@Setter
public class GithubProperty {

    private String url;
    private String client_id;
    private String client_secret;
    private String redirect_url;
}
