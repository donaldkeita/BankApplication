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
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class AddressService implements AddressInterface {

    private AddressRepository addressRepository;
    private ModelMapper modelMapper;

    @Override
    public AddressDto createAddress(AddressDto addressDto) {
        Address address = modelMapper.map(addressDto, Address.class);
        Address savedAddress = addressRepository.save(address);
        return modelMapper.map(savedAddress, AddressDto.class);
    }

    @Override
    public AddressDto getAddressById(Long addressId) {
        Address address = addressRepository.findById(addressId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Address is not exists with given id : " + addressId));

        return modelMapper.map(address, AddressDto.class);
    }

    @Override
    public List<AddressDto> getAllAddresses() {
        List<Address> addresses = addressRepository.findAll();
        return addresses.stream().map((address) -> modelMapper.map(address, AddressDto.class))  // => map(AddressMapper::mapToAddressDto)
                .collect(Collectors.toList()); // map((address) -> AddressMapper.mapToAddressDto(address))
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

        return modelMapper.map(updatedAddressObj, AddressDto.class);
    }

    @Override
    public void deleteAddress(Long addressId) {

        Address address = addressRepository.findById(addressId)
                .orElseThrow(() -> new ResourceNotFoundException("Address is not exists with given id : " + addressId));

        addressRepository.deleteById(addressId);
    }

    @Override
    public AddressDto patchAddress(Long addressId, Map<String, Object> addressFields) {

        Address address = addressRepository.findById(addressId)
                .orElseThrow(() -> new ResourceNotFoundException("Address is not exists with given id : " + addressId));

        addressFields.forEach((key, value) -> {
            Field field = ReflectionUtils.findField(Address.class, key);
            assert field != null;
            field.setAccessible(true);
            ReflectionUtils.setField(field, address, value);
        });

        Address patchedAddress = addressRepository.save(address);

        return modelMapper.map(patchedAddress, AddressDto.class);
    }
}
