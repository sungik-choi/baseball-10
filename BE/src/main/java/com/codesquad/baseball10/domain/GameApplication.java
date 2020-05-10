package com.codesquad.baseball10.domain;
import lombok.Getter;
import lombok.ToString;
import org.springframework.data.annotation.Id;

import java.util.List;

@Getter
@ToString
public class GameApplication {

    @Id
    private Long id;
    private String name;
    private List<Matchs> matchs;
}
