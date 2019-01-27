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

    constructor(){
        owner = msg.sender;
    }
}