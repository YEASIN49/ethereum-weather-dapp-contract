// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0; 

contract Weather {
    mapping (string => int) private temperatures;

    // storing data
    function storeData(int[] memory sampleData, string[] memory dateAsIndex ) public {
         for(uint i = 0; i < sampleData.length; i++) {
           temperatures[dateAsIndex[i]] = sampleData[i];
        }
    }
    
    // get data by query
    function getData(string memory queryDate) public view returns (int) {
         return temperatures[queryDate];
    }

} 
