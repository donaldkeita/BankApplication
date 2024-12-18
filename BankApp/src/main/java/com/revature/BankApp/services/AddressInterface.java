package com.revature.BankApp.services;

import com.revature.BankApp.dto.AddressDto;
import com.revature.BankApp.entities.Address;

import java.util.List;
import java.util.Map;

public interface AddressInterface {

    AddressDto createAddress(AddressDto addressDto);

    AddressDto getAddressById(Long addressId);

    List<AddressDto> getAllAddresses();

    AddressDto updateAddress(Long addressId, AddressDto addressDto);

    void deleteAddress(Long addressId);

    AddressDto patchAddress(Long addressId, Map<String, Object> addressFields);

}
