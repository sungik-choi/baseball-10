package com.codesquad.baseball10.web.dto.responesDto.progress;

import lombok.*;

import java.util.List;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class DisplayResponseDto {

    private String teamName;
    private String location;
    private String totalScore;
    private List<String> inningScore;
}
