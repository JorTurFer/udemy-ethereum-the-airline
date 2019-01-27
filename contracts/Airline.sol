pragma solidity ^0.4.24;

contract Airline{
    address public owner; 
    struct Customer{
        uint loyaltyPoints;
        uint totalFlights;
    }

    struct Flight{
        string name;
        uint price;
    }

    Flight[] public flights;
    constructor(){
        owner = msg.sender;
        flights.push(Flight("Tokio", 4 ether));
        flights.push(Flight("Germany", 1 ether));
        flights.push(Flight("Madrid", 2 ether));
    }
}