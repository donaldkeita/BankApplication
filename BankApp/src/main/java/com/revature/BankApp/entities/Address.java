package com.revature.BankApp.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@EqualsAndHashCode
@ToString
@Entity
@Table(name = "addresses")
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "street_number", nullable = false)
    private int streetNumber;

    @Column(name = "street_name", nullable = false)
    private String streetName;

    @Column(nullable = false)
    private String city;

    @Column(nullable = false)
    private String state;

    @Column(nullable = false)
    private int zipcode;

    @JsonIgnore
    @OneToOne(mappedBy = "address")
    private User user;


//    public Address(int streetNumber, String streetName, String city, String state, int zipcode) {
//        this.streetNumber = streetNumber;
//        this.streetName = streetName;
//        this.city = city;
//        this.state = state;
//        this.zipcode = zipcode;
//    }

    public Address(long id, int streetNumber, String streetName, String city, String state, int zipcode) {
        this.id = id;
        this.streetNumber = streetNumber;
        this.streetName = streetName;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
    }

}
