package com.codesquad.baseball10.domain;

import lombok.*;
import org.springframework.data.annotation.Id;

import java.util.List;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Matchs {
    @Id
    private Long id;

    private String currentInning;
    private String location;
    private String teamMatching;
    private List<Team> teams;
    private List<MatchOneInningInfo> matchOneInningInfos;
}
