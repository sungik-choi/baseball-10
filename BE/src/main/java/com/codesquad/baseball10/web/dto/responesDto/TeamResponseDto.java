package com.codesquad.baseball10.web.dto.responesDto;

import lombok.*;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class TeamResponseDto {
    private Long id;
    private String name;
    private String logoUrl;
    private String userEmail;
    private String selected;
    private String location;
}
