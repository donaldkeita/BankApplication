package com.revature.BankApp.controllers;

import com.revature.BankApp.dto.AddressDto;
import com.revature.BankApp.dto.LoginDto;
import com.revature.BankApp.dto.RegisterDto;
import com.revature.BankApp.services.Implementation.AddressService;
import com.revature.BankApp.services.Implementation.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


@AllArgsConstructor
@CrossOrigin("*")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private AuthService authService;
    private AddressService addressService;


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


    // --------------------------------------------------------------------------

    @PostMapping
    public ResponseEntity<AddressDto> createAddress(@RequestBody AddressDto addressDto) {
        //System.out.println("printing the addressDto object: " + addressDto);
        AddressDto savedAddress = addressService.createAddress(addressDto);
        return new ResponseEntity<>(savedAddress, HttpStatus.CREATED);
    }

}
