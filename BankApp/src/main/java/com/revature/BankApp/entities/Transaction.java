package com.revature.BankApp.entities;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.revature.BankApp.enumerations.TransactionType;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedDate;

import java.sql.Time;
import java.time.LocalTime;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@EqualsAndHashCode
@ToString
@Entity
@Table(name = "transactions")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Enumerated(value = EnumType.ORDINAL)
    @Column(name = "transaction_type", nullable = false)
    private TransactionType transactionType;

    @Column(nullable = false)
    private double amount;

    @Column(nullable = false)
    @CreationTimestamp
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date date;

    @Column(nullable = false)
    @CreationTimestamp
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:MM")
    private LocalTime time;

    @ManyToOne
    @JoinColumn(name = "account_id")
    private Account account;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "trans_id_src")
    private Transaction transFromSrcAccount;

    @OneToMany(mappedBy = "transFromSrcAccount", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Transaction> transToTargetAccount;


    public Transaction(TransactionType transactionType, double amount, Account account, Transaction transFromSrcAccount) {
        this.transactionType = transactionType;
        this.amount = amount;
        this.account = account;
        this.transFromSrcAccount = transFromSrcAccount;
    }

    public Transaction(TransactionType transactionType, double amount, Date date, Time time, Account account, Transaction transFromSrcAccount, List<Transaction> transToTargetAccount) {
        this.transactionType = transactionType;
        this.amount = amount;
        this.account = account;
        this.transFromSrcAccount = transFromSrcAccount;
        this.transToTargetAccount = transToTargetAccount;
    }


    //    @CreationTimestamp
//    @Column(name = "transaction_date")
//    private Date date;
}
