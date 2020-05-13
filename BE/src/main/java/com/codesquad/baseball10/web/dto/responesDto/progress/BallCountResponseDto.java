package com.codesquad.baseball10.web.dto.responesDto.progress;

import lombok.*;
import org.springframework.web.bind.annotation.GetMapping;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class BallCountResponseDto {
    private String strike;
    private String ball;
    private String out;
}
