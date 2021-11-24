package com.example.demo2;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
public class Demo2Application {
	private static final Logger logger = LoggerFactory.getLogger(Demo2Application.class);
	public static void main(String[] args) {
		SpringApplication.run(Demo2Application.class, args);
		logger.info("Hello Spring Boot");
	}

}
