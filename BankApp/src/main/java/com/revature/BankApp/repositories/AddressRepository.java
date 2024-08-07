package com.revature.BankApp.repositories;

import com.revature.BankApp.entities.Account;
import com.revature.BankApp.entities.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {
}
