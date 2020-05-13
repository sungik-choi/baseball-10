package com.codesquad.baseball10.web.controller;

import com.codesquad.baseball10.domain.GameApplication;
import com.codesquad.baseball10.service.InitService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class InitController {

    private final InitService initService;

    @GetMapping("init")
    public GameApplication init() {
        return initService.initData();
    }
}
