package com.codesquad.baseball10.web.dto.responesDto.loading;

import lombok.*;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class FirstTeamResponseDto {

    private String name;
    private String logoUrl;
}
