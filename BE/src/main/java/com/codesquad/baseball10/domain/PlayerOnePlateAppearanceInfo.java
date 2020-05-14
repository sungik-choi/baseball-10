package com.codesquad.baseball10.domain;

import lombok.*;
import org.springframework.data.annotation.Id;

import java.util.List;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class PlayerOnePlateAppearanceInfo {

    @Id
    private Long id;

    private String strikeCount;
    private String ballCount;
    private List<PlayerOnePlateAppearanceHistory> playerOnePlateAppearanceHistories;
}
