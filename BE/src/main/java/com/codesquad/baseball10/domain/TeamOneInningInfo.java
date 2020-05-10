package com.codesquad.baseball10.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;

import java.util.List;

@Getter
@ToString
@NoArgsConstructor
public class TeamOneInningInfo {

    @Id
    private Long id;

    private String inning;
    private String outCount;
    private String score;
    private List<TeamOneInningPlateInfo> teamOneInningPlateInfos ;
}
