package com.codesquad.baseball10.web.dto.responesDto.progress;

import lombok.*;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class PlatesResponseDto {

    private String baseFirst;
    private String baseSecond;
    private String baseThird;
}
