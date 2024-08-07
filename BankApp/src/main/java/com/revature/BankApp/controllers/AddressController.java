package com.revature.BankApp.controllers;


import com.revature.BankApp.dto.AddressDto;
import com.revature.BankApp.dto.UserDto;
import com.revature.BankApp.entities.Address;
import com.revature.BankApp.services.Implementation.AddressService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/addresses")
public class AddressController {

    private AddressService addressService;


    @PostMapping
    public ResponseEntity<AddressDto> createUser(@RequestBody AddressDto addressDto) {
        //System.out.println("printing the addressDto object: " + addressDto);
        AddressDto savedAddress = addressService.createAddress(addressDto);
        return new ResponseEntity<>(savedAddress, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<AddressDto> getAddressById(@PathVariable("id") Long addressId) {
        AddressDto addressDto = addressService.getAddressById(addressId);
        return ResponseEntity.ok(addressDto);
    }


    // Build Get All Addresses REST API
    @GetMapping
    public ResponseEntity<List<AddressDto>> getAllAddresses() {
        List<AddressDto> addressesDto = addressService.getAllAddresses();
        return ResponseEntity.ok(addressesDto);
    }


    //Build Update Address REST API
    @PutMapping("{id}")
    public ResponseEntity<AddressDto> updateAddress(@PathVariable("id") Long addressId,
                                                    @RequestBody AddressDto updateAddress) {
        AddressDto addressDto = addressService.updateAddress(addressId, updateAddress);
        return ResponseEntity.ok(addressDto);
    }


    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteAddress(@PathVariable("id") Long addressId) {
        addressService.deleteAddress(addressId);
        return ResponseEntity.ok("Address deleted successfully");
    }
}
