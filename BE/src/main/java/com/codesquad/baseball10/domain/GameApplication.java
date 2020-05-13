package com.codesquad.baseball10.domain;
import lombok.*;
import org.springframework.data.annotation.Id;

import java.util.List;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class GameApplication {

    @Id
    private Long id;
    private String name;
    private List<Matchs> matchs;
    private List<BasicTeam> BasicTeams;
}
