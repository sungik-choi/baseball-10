package com.codesquad.baseball10.domain;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Embedded;

import java.util.List;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class Team {
    @Id
    private Long id;
    private String name;
    private String logoUrl;
    private String userEmail;
    private String selected;
    private List<Player> players;
    private String role;
    private String totalScore;
    private String totalPa;
    private String totalHit;
    private String totalOut;
    private String currentOrder;
    private String pitchCount;
    private List<TeamOneInningInfo> teamOneInningInfos;
//    private List<TeamOneMatchInfo> teamOneMatchInfos;
}
