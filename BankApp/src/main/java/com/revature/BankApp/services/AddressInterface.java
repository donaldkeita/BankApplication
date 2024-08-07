package com.revature.BankApp.services;

import com.revature.BankApp.dto.AddressDto;
import com.revature.BankApp.entities.Address;

import java.util.List;

public interface AddressInterface {

    AddressDto createAddress(AddressDto addressDto);

    AddressDto getAddressById(Long addressId);

    List<AddressDto> getAllAddresses();

    AddressDto updateAddress(Long addressId, AddressDto addressDto);

    void deleteAddress(Long addressId);

}
