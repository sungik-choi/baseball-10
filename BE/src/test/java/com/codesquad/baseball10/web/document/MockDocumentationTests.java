package com.codesquad.baseball10.web.document;

import com.codesquad.baseball10.service.GameService;
import com.codesquad.baseball10.service.MockService;
import com.codesquad.baseball10.web.controller.GameController;
import com.codesquad.baseball10.web.controller.MockController;
import com.codesquad.baseball10.web.dto.responesDto.TeamResponseDto;
import com.codesquad.baseball10.web.dto.responesDto.TeamsResponseDto;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.util.ArrayList;
import java.util.List;

import static com.codesquad.baseball10.web.utils.ApiDocumentUtils.getDocumentRequest;
import static com.codesquad.baseball10.web.utils.ApiDocumentUtils.getDocumentResponse;
import static org.mockito.BDDMockito.given;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@WebMvcTest(MockController.class)
@AutoConfigureRestDocs(uriScheme = "https", uriHost = "docs.api.com") // 1
public class MockDocumentationTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean // 2
    private MockService mockService;

    @Test
    public void getTeamsTest() throws Exception {

        TeamsResponseDto sample = getTeamsResponseDto();

        // given
        given(mockService.getTeamsResponseDto())
                .willReturn(sample);

        // when : get방식일 땐 request 당시 타입을 지정하지 않는다.
        ResultActions result = this.mockMvc.perform(
                get("/mock/teams")
                .accept(MediaType.APPLICATION_JSON)
        );

        // then
        result.andExpect(status().isOk())
                .andDo(document("teams-find",
                        getDocumentRequest(),
                        getDocumentResponse(),
                        responseFields(beneathPath("data").withSubsectionId("data"),
                                fieldWithPath("[].id").type(JsonFieldType.NUMBER).description("아이디"),
                                fieldWithPath("[].name").type(JsonFieldType.STRING).description("팀 이름"),
                                fieldWithPath("[].logoUrl").type(JsonFieldType.STRING).description("로고 URL"),
                                fieldWithPath("[].userEmail").type(JsonFieldType.NULL).description("유저 이메일"),
                                fieldWithPath("[].selected").type(JsonFieldType.NULL).description("팀 선택 여부"),
                                fieldWithPath("[].role").type(JsonFieldType.NULL).description("홈 인지 어웨이인지")
                        )
                        )
                );


    }

    private TeamsResponseDto getTeamsResponseDto() {
        List<TeamResponseDto> data = new ArrayList<>();

        for (int count = 0; count < 10; count++) {
            TeamResponseDto team = TeamResponseDto.builder()
                    .id(1L)
                    .name("삼성")
                    .logoUrl("http://naver.com")
                    .build();
            data.add(team);
        }

        return TeamsResponseDto.builder()
                .status("200")
                .data(data)
                .build();
    }
}
