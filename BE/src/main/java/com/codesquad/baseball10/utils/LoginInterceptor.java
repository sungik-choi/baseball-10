package com.codesquad.baseball10.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;

public class LoginInterceptor extends HandlerInterceptorAdapter {

    private Logger logger = LoggerFactory.getLogger(LoginInterceptor.class);

    @Override
    public boolean preHandle(HttpServletRequest request,
                             HttpServletResponse response,
                             Object handler) {
        logger.info("preHandler");
        if (request.getMethod().equals("OPTIONS")) {
            return true;
        }

        try {
            Cookie[] cookies = request.getCookies();
            if (cookies == null) throw new IllegalStateException("no cookie");

            Cookie cookie = Arrays.stream(cookies)
                    .filter(each -> each.getName().equals("userEmail"))
                    .findFirst()
                    .orElseThrow(IllegalStateException::new);

            String userEmail = cookie.getValue();
//            String jwtUserEmail = JwtUtils.jwtParsing(jwt);
            request.setAttribute("userEmail", userEmail);

        } catch (Exception e) {
            response.setStatus(401);
            return false;
        }
        return true;
    }
}
