'use strict';

const smartContractConfig = {
  address: '0x85a84691547b7ccf19d7c31977a7f8c0af1fb25a',
  build: {
    "contract_name": "MillionDollarHomepage",
    "abi": [
      {
        "constant": true,
        "inputs": [
          {
            "name": "x",
            "type": "uint256"
          },
          {
            "name": "y",
            "type": "uint256"
          }
        ],
        "name": "checkPixel",
        "outputs": [
          {
            "name": "",
            "type": "address"
          },
          {
            "name": "",
            "type": "uint256"
          },
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "x",
            "type": "uint256"
          },
          {
            "name": "y",
            "type": "uint256"
          }
        ],
        "name": "isOutOfBound",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "x",
            "type": "uint256"
          },
          {
            "name": "y",
            "type": "uint256"
          },
          {
            "name": "color",
            "type": "string"
          }
        ],
        "name": "buyPixel",
        "outputs": [],
        "payable": true,
        "type": "function"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "price",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "color",
            "type": "string"
          },
          {
            "indexed": false,
            "name": "x",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "y",
            "type": "uint256"
          }
        ],
        "name": "Purchase",
        "type": "event"
      }
    ],
    "unlinked_binary": "0x60606040526103e86001556103e8600255341561001b57600080fd5b5b6105298061002b6000396000f300606060405263ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663040cdfd8811461005357806388e2e460146100fc578063fb38695514610129575b600080fd5b341561005e57600080fd5b61006c60043560243561017c565b604051600160a060020a03841681526020810183905260606040820181815290820183818151815260200191508051906020019080838360005b838110156100bf5780820151818401525b6020016100a6565b50505050905090810190601f1680156100ec5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b341561010757600080fd5b610115600435602435610280565b604051901515815260200160405180910390f35b61017a600480359060248035919060649060443590810190830135806020601f820181900481020160405190810160405281815292919060208401838380828437509496506102b395505050505050565b005b60008061018761044b565b60006101938686610280565b1561019d57600080fd5b506000858152602081815260408083208784528252918290208054600180830154600280850180549597600160a060020a03909516969295909485946000199083161561010002019091169190910491601f83018190048102019051908101604052809291908181526020018280546001816001161561010002031660029004801561026a5780601f1061023f5761010080835404028352916020019161026a565b820191906000526020600020905b81548152906001019060200180831161024d57829003601f168201915b505050505090509350935093505b509250925092565b6000808310806102905750600082105b8061029d57506001548310155b806102aa57506002548210155b90505b92915050565b6102bd8383610280565b806102e257506000838152602081815260408083208584529091529020600101543411155b156102ec57600080fd5b60606040519081016040908152600160a060020a0333168252346020808401919091528183018490526000868152808252828120868252909152208151815473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03919091161781556020820151816001015560408201518160020190805161037592916020019061045d565b509050507f56e211b5241df064f15ecbd738a971d3cfc9e96384489ddd491621cdbcce333733348386866040518086600160a060020a0316600160a060020a0316815260200185815260200180602001848152602001838152602001828103825285818151815260200191508051906020019080838360005b838110156104075780820151818401525b6020016103ee565b50505050905090810190601f1680156104345780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a15b505050565b60206040519081016040526000815290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061049e57805160ff19168380011785556104cb565b828001600101855582156104cb579182015b828111156104cb5782518255916020019190600101906104b0565b5b506104d89291506104dc565b5090565b6104fa91905b808211156104d857600081556001016104e2565b5090565b905600a165627a7a723058206c9cc5009f3d5ca2972eb6ddc166e1c2bd7e02cf9515f8a7cd5ac4e2b60595ed0029",
    "networks": {
      "1502664599100": {
        "events": {
          "0x56e211b5241df064f15ecbd738a971d3cfc9e96384489ddd491621cdbcce3337": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "price",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "color",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "x",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "y",
                "type": "uint256"
              }
            ],
            "name": "Purchase",
            "type": "event"
          }
        },
        "links": {},
        "address": "0x85a84691547b7ccf19d7c31977a7f8c0af1fb25a",
        "updated_at": 1502664602144
      },
      "1502667212434": {
        "events": {
          "0x56e211b5241df064f15ecbd738a971d3cfc9e96384489ddd491621cdbcce3337": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "price",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "color",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "x",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "y",
                "type": "uint256"
              }
            ],
            "name": "Purchase",
            "type": "event"
          }
        },
        "links": {},
        "address": "0x85a84691547b7ccf19d7c31977a7f8c0af1fb25a",
        "updated_at": 1502667218956
      },
      "1502668754661": {
        "events": {
          "0x56e211b5241df064f15ecbd738a971d3cfc9e96384489ddd491621cdbcce3337": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "price",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "color",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "x",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "y",
                "type": "uint256"
              }
            ],
            "name": "Purchase",
            "type": "event"
          }
        },
        "links": {},
        "address": "0x85a84691547b7ccf19d7c31977a7f8c0af1fb25a",
        "updated_at": 1502668757878
      },
      "1502669096833": {
        "events": {
          "0x56e211b5241df064f15ecbd738a971d3cfc9e96384489ddd491621cdbcce3337": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "price",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "color",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "x",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "y",
                "type": "uint256"
              }
            ],
            "name": "Purchase",
            "type": "event"
          }
        },
        "links": {},
        "address": "0x85a84691547b7ccf19d7c31977a7f8c0af1fb25a",
        "updated_at": 1502669100117
      },
      "1502692783139": {
        "events": {
          "0x56e211b5241df064f15ecbd738a971d3cfc9e96384489ddd491621cdbcce3337": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "price",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "color",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "x",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "y",
                "type": "uint256"
              }
            ],
            "name": "Purchase",
            "type": "event"
          }
        },
        "links": {},
        "address": "0x85a84691547b7ccf19d7c31977a7f8c0af1fb25a",
        "updated_at": 1502692786678
      },
      "1503178428779": {
        "events": {
          "0x56e211b5241df064f15ecbd738a971d3cfc9e96384489ddd491621cdbcce3337": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "price",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "color",
                "type": "string"
              },
              {
                "indexed": false,
                "name": "x",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "y",
                "type": "uint256"
              }
            ],
            "name": "Purchase",
            "type": "event"
          }
        },
        "links": {},
        "address": "0x85a84691547b7ccf19d7c31977a7f8c0af1fb25a",
        "updated_at": 1503178432292
      }
    },
    "schema_version": "0.0.5",
    "updated_at": 1503178432292
  }
};

var root = typeof self == 'object' && self.self === self && self ||
  typeof global == 'object' && global.global === global && global ||
  this || {};

root.smartContractConfig = smartContractConfig;
