package com.codesquad.baseball10.domain;

import org.springframework.data.annotation.Id;

import java.util.List;

public class Matchs {
    @Id
    private Long id;

    private String currentInning;
    private String location;
    private List<Team> teams;
    private List<MatchOneInningInfo> matchOneInningInfos;
}
