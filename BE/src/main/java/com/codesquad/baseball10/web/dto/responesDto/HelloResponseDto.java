package com.codesquad.baseball10.web.dto.responesDto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
public class HelloResponseDto {
    private String hello;

    public HelloResponseDto(String hello) {
        this.hello = hello;
    }
}
