package com.codesquad.baseball10.web.dto.responesDto.login;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Getter
@ToString
@NoArgsConstructor
public class ListUserEmailResponseDto {

    private List<String> userData;
}
