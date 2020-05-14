package com.codesquad.baseball10.domain;

import lombok.*;
import org.springframework.data.annotation.Id;

import java.util.List;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class MatchOneInningInfo {
    @Id
    private Long id;
    private String inning;
    private String isRunning;
    private String isScore;
    private List<MatchPlate> matchPlates;
}
