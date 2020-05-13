package com.codesquad.baseball10.web.dto.responesDto.login;

import lombok.*;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class LoginResponseDto {

    private String status;
}
