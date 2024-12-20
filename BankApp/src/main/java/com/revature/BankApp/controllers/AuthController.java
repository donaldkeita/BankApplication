package com.revature.BankApp.controllers;

import com.revature.BankApp.dto.LoginDto;
import com.revature.BankApp.dto.RegisterDto;
import com.revature.BankApp.services.Implementation.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@AllArgsConstructor
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private AuthService authService;


    // Build Register REST API
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto) {
        String response = authService.register(registerDto);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }


    // Build Login REST API
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDto loginDto) {
        String response = authService.login(loginDto);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
