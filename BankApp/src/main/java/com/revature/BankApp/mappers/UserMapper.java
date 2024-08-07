package com.revature.BankApp.mappers;

import com.revature.BankApp.dto.UserDto;
import com.revature.BankApp.entities.User;

public class UserMapper {

    public static UserDto mapToUserDto(User user) {
        return new UserDto(
                user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getUserType(),
                user.getEmail(),
                user.getPassword(),
                user.getUsername(),
                user.getAddress()
        );
    }


    public static User mapToUser(UserDto userDto) {
        return new User(
                userDto.getId(),
                userDto.getFirstName(),
                userDto.getLastName(),
                userDto.getUserType(),
                userDto.getEmail(),
                userDto.getPassword(),
                userDto.getUsername(),
                userDto.getAddress()
        );
    }
}
