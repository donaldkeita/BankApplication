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
                user.getAddress().getId()
        );
    }


    public static User mapToUser(UserDto userDto) {

        User user = new User();
        user.setId(userDto.getId());
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setUserType(userDto.getUserType());
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        user.setUsername(userDto.getUsername());

        return user;
    }
}
