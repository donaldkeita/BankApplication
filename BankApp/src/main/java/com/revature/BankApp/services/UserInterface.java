package com.revature.BankApp.services;

import com.revature.BankApp.dto.UserDto;

import java.util.List;

public interface UserInterface {

    UserDto createUser(UserDto userDto);

    UserDto getUserById(Long userId);

    List<UserDto> getAllUsers();

    UserDto updateUser(Long userId, UserDto updatedUser);

    void deleteUser(Long userId);
}
