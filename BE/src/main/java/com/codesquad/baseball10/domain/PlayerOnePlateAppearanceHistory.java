package com.codesquad.baseball10.domain;

import lombok.*;
import org.springframework.data.annotation.Id;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class PlayerOnePlateAppearanceHistory {

    @Id
    private Long id;
    private String history;
}
