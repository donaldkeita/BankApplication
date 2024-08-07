package com.revature.BankApp.services.Implementation;

import com.revature.BankApp.dto.AddressDto;
import com.revature.BankApp.entities.Address;
import com.revature.BankApp.entities.User;
import com.revature.BankApp.exceptions.ResourceNotFoundException;
import com.revature.BankApp.mappers.AddressMapper;
import com.revature.BankApp.mappers.UserMapper;
import com.revature.BankApp.repositories.AddressRepository;
import com.revature.BankApp.services.AddressInterface;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class AddressService implements AddressInterface {

    private AddressRepository addressRepository;

    @Override
    public AddressDto createAddress(AddressDto addressDto) {
        Address address = AddressMapper.mapToAddress(addressDto);
        Address savedAddress = addressRepository.save(address);
        return AddressMapper.mapToAddressDto(savedAddress);
    }

    @Override
    public AddressDto getAddressById(Long addressId) {
        Address address = addressRepository.findById(addressId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Address is not exists with given id : " + addressId));

        return AddressMapper.mapToAddressDto(address);
    }

    @Override
    public List<AddressDto> getAllAddresses() {
        List<Address> addresses = addressRepository.findAll();
        return addresses.stream().map((address) -> AddressMapper.mapToAddressDto(address))  // => map(AddressMapper::mapToAddressDto)
                .collect(Collectors.toList());
    }

    @Override
    public AddressDto updateAddress(Long addressId, AddressDto updatedAddress) {
        Address address = addressRepository.findById(addressId)
                .orElseThrow(() -> new ResourceNotFoundException("Address is not exists with given id : " + addressId));

        address.setStreetNumber(updatedAddress.getStreetNumber());
        address.setStreetName(updatedAddress.getStreetName());
        address.setCity(updatedAddress.getCity());
        address.setState(updatedAddress.getState());
        address.setZipcode(updatedAddress.getZipcode());

        Address updatedAddressObj = addressRepository.save(address);

        return AddressMapper.mapToAddressDto(updatedAddressObj);
    }

    @Override
    public void deleteAddress(Long addressId) {

        Address address = addressRepository.findById(addressId)
                .orElseThrow(() -> new ResourceNotFoundException("Address is not exists with given id : " + addressId));

//        boolean exist = addressRepository.existsById(addressId);
//        if (!exist) throw new ResourceNotFoundException("Address is not exists with given id : " + addressId);

        addressRepository.deleteById(addressId);
    }
}
