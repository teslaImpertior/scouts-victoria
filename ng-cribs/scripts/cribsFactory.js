angular
    .module('ngCribs')
    .factory('cribsFactory', function() {
   
        var cribsData = [
            {
                "type": "Condo",
                "price": 220000,
                "address": "123 Grove Street",
                "description": "Excellent place, really nice view!"
            },
            {
                "type": "Duplex",
                "price": 410500,
                "address": "13 Old Road",
                "description": "Good home!"
            },
            {
                "type": "House",
                "price": 1000000,
                "address": "5 Tree Lane",
                "description": "Shithole in Sydney"
            }

        ];
    
    function getCribs() {
        return cribsData;
    }
    
    return {
        getCribs: getCribs
    }
});