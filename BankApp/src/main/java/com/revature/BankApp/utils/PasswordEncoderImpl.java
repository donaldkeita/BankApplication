package com.revature.BankApp.utils;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

public class PasswordEncoderImpl {

    public static void main(String[] args) {

        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

//        System.out.println(passwordEncoder.encode("pwd1"));   // ----->  admin1
//
//        System.out.println(passwordEncoder.encode("pwd2"));   // ----->  customer1
//
//        System.out.println(passwordEncoder.encode("pwd3"));   // ----->  customer2

//        System.out.println(passwordEncoder.encode("pwd4"));   // ----->  customer2
    }
}
