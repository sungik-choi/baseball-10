package com.codesquad.baseball10.service;

import com.codesquad.baseball10.utils.GithubProperty;
import com.codesquad.baseball10.web.dto.requestDto.AccessTokenRequestDto;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@Service
@AllArgsConstructor
public class LoginService {

    private final Logger logger = LoggerFactory.getLogger(LoginService.class);

    private final RestTemplate restTemplate;

    private final GithubProperty githubProperty;

    public RedirectView handleLogin(String code, HttpServletResponse response) {
        logger.info("code : {}", code);

        try {
            String url = githubProperty.getUrl();
            String client_id = githubProperty.getClient_id();
            String client_secret = githubProperty.getClient_secret();
            String redirect_url = githubProperty.getRedirect_url();

            AccessTokenRequestDto accessTokenRequestDto
                    = getAccessToken(client_id, client_secret, code, redirect_url);

            String accessToken = restTemplate.postForObject(url, accessTokenRequestDto, String.class);

            String[] splitTokens = accessToken.split("&");
            String[] splitTokens2 = splitTokens[0].split("=");
            accessToken = splitTokens2[1];

            String emailRequestUrl = "https://api.github.com/user/emails";

            HttpHeaders httpHeaders = new HttpHeaders();
            httpHeaders.set("Authorization", "token " +accessToken);

            HttpEntity<String> entity = new HttpEntity<>(httpHeaders);

            ResponseEntity<String> responseEntity
                    = restTemplate.exchange(emailRequestUrl, HttpMethod.GET, entity, String.class);

            String userDataList = responseEntity.getBody();
            String[] split1 = userDataList.split(",");
            String userEmail = split1[0].split(":")[1];

            logger.info("userEmail : {}", userEmail);

            Cookie cookie = new Cookie("userEmail", userEmail);
            cookie.setPath("/");
            response.addCookie(cookie);

            return new RedirectView("http://15.164.34.6/");

        } catch (Exception e) {
            return new RedirectView("http://15.164.34.6/");
        }
    }

    public AccessTokenRequestDto getAccessToken(String client_id, String client_secret, String code, String redirect_url) {
        return AccessTokenRequestDto.builder()
                .client_id(client_id)
                .client_secret(client_secret)
                .code(code)
                .redirect_url(redirect_url)
                .build();
    }
}
