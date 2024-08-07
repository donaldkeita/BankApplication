package com.revature.BankApp.repositories;

import com.revature.BankApp.entities.Account;
import com.revature.BankApp.entities.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Integer> {
}
