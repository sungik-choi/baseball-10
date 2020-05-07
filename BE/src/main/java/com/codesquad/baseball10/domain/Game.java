package com.codesquad.baseball10.domain;
import lombok.Getter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;

import java.util.List;

@Getter
@ToString
public class Game {

    @Id
    private Long id;
    @Column("game_name")
    private String name;
    private List<Team> teams;
}
