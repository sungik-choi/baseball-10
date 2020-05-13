package com.codesquad.baseball10.web.dto.responesDto.progress;

import lombok.*;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class MatchInfoResponseDto {

    private String currentInning;
    private String when;
}
