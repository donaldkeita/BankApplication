package com.revature.BankApp.dto;

import com.revature.BankApp.entities.Address;
import com.revature.BankApp.enumerations.UserType;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserDto {

    private long id;
    private String firstName;
    private String lastName;
    private UserType userType;
    private String email;
    private String password;
    private String username;
    private Address address;
}
