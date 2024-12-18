package com.revature.BankApp.security;

import com.revature.BankApp.entities.User;
import com.revature.BankApp.enumerations.UserType;
import com.revature.BankApp.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Collections;
import java.util.Set;
import java.util.function.Supplier;

//----------------------------------------------------------------
//@FunctionalInterface
//interface MyMappingInterface {
//    SimpleGrantedAuthority mapToSimpleGrantedAuthority(UserType userType);
//}
//----------------------------------------------------------------


@Service
@AllArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String usernameOrEmail) throws UsernameNotFoundException {

        User user = userRepository.findByUsernameOrEmail(usernameOrEmail, usernameOrEmail)
                .orElseThrow(() -> new UsernameNotFoundException("User not exists by Username or Email"));

        Supplier<SimpleGrantedAuthority> mappingObject = () -> new SimpleGrantedAuthority(user.getUserType().toString());
        GrantedAuthority authority = mappingObject.get();

        return new org.springframework.security.core.userdetails.User(
                usernameOrEmail,
                user.getPassword(),
                Collections.singleton(authority)
        );
    }
}
