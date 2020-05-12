package com.codesquad.baseball10.web.controller;

import com.codesquad.baseball10.web.dto.responesDto.HelloResponseDto;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("hello")
    public HelloResponseDto hello() {
        return new HelloResponseDto("hello");
    }
}
