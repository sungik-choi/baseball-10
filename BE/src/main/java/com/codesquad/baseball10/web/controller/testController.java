package com.codesquad.baseball10.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("test")
public class testController {


    private Logger logger = LoggerFactory.getLogger(testController.class);

    @GetMapping("testSetAttribute")
    public String testSetAttribute(HttpServletRequest request) {

        String isHeader = (String) request.getAttribute("isHeader");
        logger.info("isHeader : {}" , isHeader);

        return isHeader;
    }
}
