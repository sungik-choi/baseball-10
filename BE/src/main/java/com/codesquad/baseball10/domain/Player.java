package com.codesquad.baseball10.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;

import java.util.List;

@Getter
@ToString
@NoArgsConstructor
public class Player {

    @Id
    private Long id;

    private String name;
    private String position;
    private String batting_average;
    private String orders;
    private String pa;
    private String hitCount;
    private String outCount;
    private String gameAverage;
    private String pitchCount;
    private List<PlayerOnePlateAppearanceInfo> playerOnePlateAppearanceInfos;
//    private List<PlayerOneMatchInfo> playerOneMatchInfos;
}
