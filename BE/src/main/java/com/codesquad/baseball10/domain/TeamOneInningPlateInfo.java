package com.codesquad.baseball10.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;

@Getter
@ToString
@NoArgsConstructor
public class TeamOneInningPlateInfo {

    @Id
    private Long id;

    private String baseName;
    private String player_id;
}
