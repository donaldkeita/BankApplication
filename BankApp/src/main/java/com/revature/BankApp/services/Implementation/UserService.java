package com.revature.BankApp.services.Implementation;

import com.revature.BankApp.dto.UserDto;
import com.revature.BankApp.entities.Address;
import com.revature.BankApp.entities.User;
import com.revature.BankApp.enumerations.UserType;
import com.revature.BankApp.exceptions.ResourceNotFoundException;
import com.revature.BankApp.mappers.AddressMapper;
import com.revature.BankApp.mappers.UserMapper;
import com.revature.BankApp.repositories.AddressRepository;
import com.revature.BankApp.repositories.UserRepository;
import com.revature.BankApp.services.UserInterface;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserService implements UserInterface {

    private UserRepository userRepository;

    private AddressRepository addressRepository;

    private ModelMapper modelMapper;


    @Override
    public UserDto createUser(UserDto userDto) {

        User user = modelMapper.map(userDto, User.class);  // <--->  User user = UserMapper.mapToUser(userDto);

        Address address = addressRepository.findById(userDto.getAddressId())
                .orElseThrow(() -> new ResourceNotFoundException("Address is not exists with id: " +  + userDto.getAddressId()));

        user.setAddress(address);

        User savedUser = userRepository.save(user);
        return modelMapper.map(savedUser, UserDto.class);
    }

    @Override
    public UserDto getUserById(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("User is not exists with given id: " + userId));

        return modelMapper.map(user, UserDto.class);
    }

    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream().map((user) -> modelMapper.map(user, UserDto.class))  // method references
                .collect(Collectors.toList());
    }

    @Override
    public UserDto updateUser(Long userId, UserDto updatedUser) {
        User user = userRepository.findById(userId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("User is not exists with given id : " + userId));

        user.setFirstName(updatedUser.getFirstName());
        user.setLastName(updatedUser.getLastName());
        user.setUserType(updatedUser.getUserType());
        user.setEmail(updatedUser.getEmail());
        user.setPassword(updatedUser.getPassword());
        user.setUsername(updatedUser.getUsername());

        Address address = addressRepository.findById(updatedUser.getAddressId())
                .orElseThrow(() -> new ResourceNotFoundException("Address is not exists with id: " +  + updatedUser.getAddressId()));

        user.setAddress(address);

        User updatedUserObj = userRepository.save(user);

        return modelMapper.map(updatedUserObj, UserDto.class);
    }

    @Override
    public void deleteUser(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("User is not exists with given id : " + userId));

        userRepository.deleteById(userId);

    }

    @Override
    public UserDto patchUser(Long userId, UserDto patchedUser) {
        return updateUser(userId, patchedUser);
    }

    @Override
    public UserDto patchUser(Long userId, Map<String, Object> userFields) {

        User user = userRepository.findById(userId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("User is not exists with given id : " + userId));

        userFields.forEach((key, value) -> {
            Field field = ReflectionUtils.findField(User.class, key);
            assert field != null;
            field.setAccessible(true);
            ReflectionUtils.setField(field, user, value);
        });

        User patchedUser = userRepository.save(user);

        return modelMapper.map(patchedUser, UserDto.class);
    }
}
