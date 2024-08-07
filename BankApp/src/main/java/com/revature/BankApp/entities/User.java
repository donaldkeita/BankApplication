package com.revature.BankApp.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.revature.BankApp.enumerations.UserType;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@EqualsAndHashCode
@ToString
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Enumerated(value = EnumType.STRING)
    @Column(name = "user_type", nullable = false)
    private UserType userType;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, unique = true)
    private String password;

    @Column(nullable = false, unique = true)
    private String username;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "address_id")
    private Address address;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user", orphanRemoval = true)
    private List<Account> accounts;


    public User(String firstName, String lastName, UserType userType, String email, String password, String username,
                Address address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userType = userType;
        this.email = email;
        this.password = password;
        this.username = username;
        this.address = address;
    }

    public User(long id, String firstName, String lastName, UserType userType, String email, String password,
                String username, Address address) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userType = userType;
        this.email = email;
        this.password = password;
        this.username = username;
        this.address = address;
    }
}
