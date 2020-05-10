package com.codesquad.baseball10.domain;

import lombok.Getter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Embedded;

import java.util.List;

@Getter
@ToString
public class Team {
    @Id
    private Long id;
    private String name;
    private String logo;
    @Embedded.Nullable
    private User user;
    private String selected;
    private List<Player> players;
    private List<TeamOneMatchInfo> teamOneMatchInfos;
}
