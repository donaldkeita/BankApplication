package com.revature.BankApp.services.Implementation;

import com.revature.BankApp.dto.LoginDto;
import com.revature.BankApp.dto.RegisterDto;
import com.revature.BankApp.entities.Address;
import com.revature.BankApp.entities.User;
import com.revature.BankApp.enumerations.UserType;
import com.revature.BankApp.exceptions.APIException;
import com.revature.BankApp.exceptions.ResourceNotFoundException;
import com.revature.BankApp.repositories.AddressRepository;
import com.revature.BankApp.repositories.UserRepository;
import com.revature.BankApp.services.AuthInterface;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
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
    private AddressRepository addressRepository;
    private AuthenticationManager authenticationManager;

    @Override
    public String register(RegisterDto registerDto) {

        // check username is already exists in database
        if (userRepository.existsByUsername(registerDto.getUsername()))
            throw new APIException(HttpStatus.BAD_REQUEST, "Username already exists!");

        // check email is already exists in the database
        if (userRepository.existsByEmail(registerDto.getEmail()))
            throw new APIException(HttpStatus.BAD_REQUEST, "Email is already exists!");

        User user = new User();
        user.setFirstName(registerDto.getFirstName());
        user.setLastName(registerDto.getLastName());
        user.setUsername(registerDto.getUsername());
        user.setEmail(registerDto.getEmail());
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));
        user.setUserType(UserType.ROLE_CUSTOMER);

        Address address = addressRepository.findById(registerDto.getAddressId())
                .orElseThrow(() -> new ResourceNotFoundException("Address is not exists with id: " + registerDto.getAddressId()));

        user.setAddress(address);

        userRepository.save(user);

        return "User Registered Successfully";
    }

    @Override
    public String login(LoginDto loginDto) {

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginDto.getUsernameOrEmail(),
                loginDto.getPassword()
        ));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        return "User logged-in successfully!";
    }
}
