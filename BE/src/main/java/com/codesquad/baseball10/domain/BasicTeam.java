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
public class BasicTeam {

    @Id
    private Long id;

    private String name;
    private String logoUrl;
    private List<BasicPlayer> basicPlayers;
}
