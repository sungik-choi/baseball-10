package com.codesquad.baseball10.domain;

import lombok.Getter;
import lombok.ToString;
import org.springframework.data.relational.core.mapping.Column;

@Getter
@ToString
public class Plates {
    @Column("base")
    private String base;
}
