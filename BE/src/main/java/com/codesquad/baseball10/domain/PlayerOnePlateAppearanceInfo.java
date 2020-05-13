package com.codesquad.baseball10.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;

import java.util.List;

@Getter
@ToString
@NoArgsConstructor
public class PlayerOnePlateAppearanceInfo {

    @Id
    private Long id;

    private String strikeCount;
    private String ballCount;
    private List<PlayerOnePlateAppearanceHistory> playerOnePlateAppearanceHistories;
}
