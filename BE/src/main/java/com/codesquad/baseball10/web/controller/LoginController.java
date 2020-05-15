package com.codesquad.baseball10.web.controller;

import com.codesquad.baseball10.service.LoginService;
import com.codesquad.baseball10.web.dto.responesDto.login.LoginResponseDto;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("github")
@AllArgsConstructor
public class LoginController {

    private final Logger logger = LoggerFactory.getLogger(LoginController.class);
    private final RestTemplate restTemplate;
    private final LoginService loginService;

    @GetMapping("/oauth/callback")
    public RedirectView OauthCallback(@RequestParam(value = "code") String code,
                                      HttpServletResponse response) {
        return loginService.handleLogin(code, response);

    }
}
