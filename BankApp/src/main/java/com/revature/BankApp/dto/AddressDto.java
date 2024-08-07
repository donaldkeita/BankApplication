package com.revature.BankApp.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class AddressDto {

    private long id;
    private int streetNumber;
    private String streetName;
    private String city;
    private String state;
    private int zipcode;
}
