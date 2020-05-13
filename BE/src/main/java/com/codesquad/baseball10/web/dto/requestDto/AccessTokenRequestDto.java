package com.codesquad.baseball10.web.dto.requestDto;

import lombok.*;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class AccessTokenRequestDto {

    private String client_id;
    private String client_secret;
    private String code;
    private String redirect_url;
}
