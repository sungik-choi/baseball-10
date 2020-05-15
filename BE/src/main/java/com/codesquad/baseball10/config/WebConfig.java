package com.codesquad.baseball10.config;

import com.codesquad.baseball10.utils.LoginInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        long MAX_AGE_SECS = 3600;
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true)
                .maxAge(MAX_AGE_SECS);
    }

//    @Bean
//    public LoginInterceptor loginInterceptor() {
//        return new LoginInterceptor();
//    }
//
//    @Override
//    public void addInterceptors(InterceptorRegistry registry) {
//        registry.addInterceptor(loginInterceptor())
//                .addPathPatterns("/**")
//                .excludePathPatterns("/api/mock/**")
//                .excludePathPatterns("/api/github/**")
//                .excludePathPatterns("/github/**")
//                .excludePathPatterns("/mock/**")
//                .excludePathPatterns("/init");
//    }
}
