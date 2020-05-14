package com.codesquad.baseball10.domain;

import lombok.*;
import org.springframework.data.annotation.Id;

import java.util.List;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class TeamOneInningInfo {

    @Id
    private Long id;

    private String inning;
    private String outCount;
    private String score;
//    private List<TeamOneInningPlateInfo> teamOneInningPlateInfos ;
}
