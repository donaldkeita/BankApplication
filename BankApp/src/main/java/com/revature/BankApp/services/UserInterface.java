package com.revature.BankApp.services;

import com.revature.BankApp.dto.AddressDto;
import com.revature.BankApp.dto.UserDto;

import java.util.List;
import java.util.Map;

public interface UserInterface {

    UserDto createUser(UserDto userDto);

    UserDto getUserById(Long userId);

    List<UserDto> getAllUsers();

    UserDto updateUser(Long userId, UserDto updatedUser);

    void deleteUser(Long userId);

    UserDto patchUser(Long userId, UserDto patchedUser);

    UserDto patchUser(Long userId, Map<String, Object> userFields);
}
