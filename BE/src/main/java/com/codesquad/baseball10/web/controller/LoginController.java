package com.codesquad.baseball10.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("github")
public class LoginController {
    private final Logger logger = LoggerFactory.getLogger(LoginController.class);
    private RestTemplate restTemplate;

    @GetMapping("/oauth/callback")
    public String OauthCallback(@RequestParam("code") String code,
                                HttpServletResponse response) {
        logger.info("code : {}", code);
        Cookie cookie = new Cookie("code", code);
        // access token
        // hoi email 
        // jwt token
        //
        response.addCookie(cookie);
        return code;
    }
}
