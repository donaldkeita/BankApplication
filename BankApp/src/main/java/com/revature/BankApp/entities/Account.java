package com.revature.BankApp.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.revature.BankApp.enumerations.AccountType;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@EqualsAndHashCode
@ToString
@Entity
@Table(name = "accounts")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "account_number")
    private long accountNumber;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Enumerated(value = EnumType.STRING)
    @Column(name = "account_type", nullable = false)
    private AccountType accountType;

    @Column(nullable = false)
    private double balance;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "account")
    private List<Transaction> transactions;


    public Account(User user, AccountType accountType, double balance) {
        this.user = user;
        this.accountType = accountType;
        this.balance = balance;
    }
}
