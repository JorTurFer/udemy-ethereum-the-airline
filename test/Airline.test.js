
const Airline = artifacts.require("Airline");

let instance;

beforeEach(async () => {
    instance = await Airline.new();
});

contract("Airline",accounts =>{

    it("should have available flights",async ()=> {
        let total = await instance.totalFlights();
        assert(total > 0);
    });

    it("should allow customers to buy a flights providing its value",async () =>{
        let flight = await instance.flights(0);
        let flightName = flight[0];
        let price = flight[1];

        await instance.buyFlight(0,{from: accounts[0], value: price});
        let customerFlight = await instance.customerFlights(accounts[0],0);
        let customerTotalFlights = await instance.customerTotalFlights(accounts[0]);

        assert(customerFlight[0],flightName);
        assert(customerFlight[1],price);
        assert(customerTotalFlights,1);
    });

    it("should not allow customers to buy a flights under the price",async () =>{
        let flight = await instance.flights(0);
        let price = flight[1] - 5000;

        try
        {        
            await instance.buyFlight(0,{from: accounts[0], value: price});            
        }
        catch(ex) 
        {
            return;
        }
        assert.fail();        
    });
});