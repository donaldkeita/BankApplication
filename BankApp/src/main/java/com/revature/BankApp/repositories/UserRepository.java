package com.revature.BankApp.repositories;

import com.revature.BankApp.entities.Account;
import com.revature.BankApp.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
