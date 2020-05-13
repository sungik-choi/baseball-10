package com.codesquad.baseball10.web.dto.responesDto;

import lombok.*;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class BatterResponseDto {
    private String name;
    private String plateAppearance;
    private String hit;
    private String out;
    private String average;

}
