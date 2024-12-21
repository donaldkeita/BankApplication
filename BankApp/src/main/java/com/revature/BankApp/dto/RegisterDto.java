package com.revature.BankApp.dto;

import com.revature.BankApp.enumerations.UserType;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class RegisterDto {

    private String firstName;
    private String lastName;
//    private UserType userType;
    private String email;
    private String password;
    private String username;
    private Long addressId;
}
