package com.codesquad.baseball10.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;

import javax.validation.constraints.NegativeOrZero;
import java.util.List;

@Getter
@ToString
@NoArgsConstructor
public class TeamOneMatchInfo {

    @Id
    private Long id;

    private String role;
    private String totalScore;
    private String totalPa;
    private String totalHit;
    private String totalOut;
    private String currentOrder;
    private List<TeamOneInningInfo> teamOneInningInfos;
}
