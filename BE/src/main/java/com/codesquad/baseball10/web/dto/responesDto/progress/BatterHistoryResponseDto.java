package com.codesquad.baseball10.web.dto.responesDto.progress;

import lombok.*;

import java.util.List;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class BatterHistoryResponseDto {

    private String name;
    private String plateAppearance;
    private String hit;
    private String order;
    private List<String> history;

}
