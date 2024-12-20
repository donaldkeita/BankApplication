package com.revature.BankApp.services.Implementation;

import com.revature.BankApp.dto.LoginDto;
import com.revature.BankApp.dto.RegisterDto;
import com.revature.BankApp.repositories.UserRepository;
import com.revature.BankApp.services.AuthInterface;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthService implements AuthInterface {

    private UserRepository userRepository;
//    private RoleRepository roleRepository;   ---> to be implemented
    private PasswordEncoder passwordEncoder;

    private AuthenticationManager authenticationManager;

    @Override
    public String register(RegisterDto registerDto) {

        // check username is already exists in database
        if (userRepository.existsByUsername(registerDto.getUsername()));

        return "";
    }

    @Override
    public String login(LoginDto loginDto) {

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginDto.getUsernameOrEmail(),
                loginDto.getPassword()
        ));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        return "User logged-in successfully";
    }
}
