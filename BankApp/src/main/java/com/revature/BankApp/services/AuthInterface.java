package com.revature.BankApp.services;

import com.revature.BankApp.dto.LoginDto;
import com.revature.BankApp.dto.RegisterDto;

public interface AuthInterface {

    String register(RegisterDto registerDto);
    String login(LoginDto loginDto);
}
