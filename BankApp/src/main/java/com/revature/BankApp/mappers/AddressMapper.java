package com.revature.BankApp.mappers;

import com.revature.BankApp.dto.AddressDto;
import com.revature.BankApp.dto.UserDto;
import com.revature.BankApp.entities.Address;
import com.revature.BankApp.entities.User;

public class AddressMapper {


    public static AddressDto mapToAddressDto(Address address) {
        return new AddressDto(
                address.getId(),
                address.getStreetNumber(),
                address.getStreetName(),
                address.getCity(),
                address.getState(),
                address.getZipcode()
        );
    }


    public static Address mapToAddress(AddressDto addressDto) {

        Address address = new Address();

        address.setId(addressDto.getId());
        address.setStreetNumber(addressDto.getStreetNumber());
        address.setStreetName(addressDto.getStreetName());
        address.setCity(addressDto.getCity());
        address.setState(addressDto.getState());
        address.setZipcode(addressDto.getZipcode());

        return address;

//        return new Address(
//                addressDto.getId(),
//                addressDto.getStreetNumber(),
//                addressDto.getStreetName(),
//                addressDto.getCity(),
//                addressDto.getState(),
//                addressDto.getZipcode()
//        );
    }

}
