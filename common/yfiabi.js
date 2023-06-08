/**
 * TODO 合约对象
 * 此处是一个合约对象构造所需要的属性
 * 必须包含 address 和 abi 两个对象
 */
export const yfiaddr = '0x9c765C62ad538011c2aAd815CaAeEc94551fbE9D'
export const pledge = '0xB398b110d59A67301d99e43eF8fe1ed354C38C42'
export const nftaddr = '0x9C55ce920A230d0245554EaA02962F1B39dF9A0B'
export const yfiabi = [{
		"inputs": [{
			"internalType": "address",
			"name": "_minter",
			"type": "address"
		}],
		"name": "addsomeusmwd",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [{
				"indexed": false,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "BuyNewNft",
		"type": "event"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "_n",
			"type": "uint256"
		}],
		"name": "chDindexmax",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "bool",
			"name": "ci",
			"type": "bool"
		}],
		"name": "cisp2",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "address payable",
			"name": "amount",
			"type": "address"
		}],
		"name": "cru5",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "address",
			"name": "amount",
			"type": "address"
		}],
		"name": "eru6",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "address",
			"name": "t",
			"type": "address"
		}],
		"name": "issetuyfi",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "r",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "provepokye19",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "orderid",
				"type": "uint256"
			}
		],
		"name": "rewardu1",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [{
				"indexed": false,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "types",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "orderid",
				"type": "uint256"
			}
		],
		"name": "Rewardu1",
		"type": "event"
	},
	{
		"inputs": [{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "orderid",
				"type": "uint256"
			}
		],
		"name": "rewardy2",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "address",
			"name": "t",
			"type": "address"
		}],
		"name": "setcoy",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [{
				"internalType": "uint256",
				"name": "t",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "setnbuypricess",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [{
				"internalType": "uint256",
				"name": "t",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "num",
				"type": "address"
			}
		],
		"name": "setntokenlvt",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [{
				"internalType": "uint256",
				"name": "t",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "setntokenlvtprice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [{
				"internalType": "uint256",
				"name": "orderid",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "uamount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "yamount",
				"type": "uint256"
			}
		],
		"name": "setuserorder",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [{
				"indexed": false,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "level",
				"type": "uint256"
			}
		],
		"name": "StakeNftsdf",
		"type": "event"
	},
	{
		"inputs": [{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "nol",
				"type": "address"
			}
		],
		"name": "tokensdde",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [{
				"internalType": "address payable",
				"name": "_a",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "trandbbs19",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [{
				"internalType": "uint256",
				"name": "orderid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "yfiamount",
				"type": "uint256"
			}
		],
		"name": "twostake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [{
				"indexed": false,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "orderid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "usdtamount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "yfiamount",
				"type": "uint256"
			}
		],
		"name": "TwoStake",
		"type": "event"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "orderid",
			"type": "uint256"
		}],
		"name": "unstake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [{
				"indexed": false,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "orderid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "usdtamount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "yfiamount",
				"type": "uint256"
			}
		],
		"name": "unStake",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [],
		"name": "addressu",
		"outputs": [{
			"internalType": "address",
			"name": "",
			"type": "address"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "count",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "coy",
		"outputs": [{
			"internalType": "address",
			"name": "",
			"type": "address"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ec",
		"outputs": [{
			"internalType": "address",
			"name": "",
			"type": "address"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "id",
			"type": "uint256"
		}],
		"name": "getStakeidAdress",
		"outputs": [{
			"internalType": "address",
			"name": "",
			"type": "address"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "orderid",
			"type": "uint256"
		}],
		"name": "getuserinfoFromorder",
		"outputs": [{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "usdtamount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "yfiamount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "indexmax",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isp",
		"outputs": [{
			"internalType": "bool",
			"name": "",
			"type": "bool"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nft",
		"outputs": [{
			"internalType": "address",
			"name": "",
			"type": "address"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "oneday",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "price",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"name": "stakeallnum",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"name": "stakeidaddress",
		"outputs": [{
			"internalType": "address",
			"name": "",
			"type": "address"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"name": "stakorders",
		"outputs": [{
				"internalType": "uint256",
				"name": "yfiamount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "usdtamount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "starttime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "orderid",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"name": "tokenlvt",
		"outputs": [{
			"internalType": "address",
			"name": "",
			"type": "address"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"name": "tokenlvtprice",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "usdt",
		"outputs": [{
			"internalType": "address",
			"name": "",
			"type": "address"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "address",
			"name": "",
			"type": "address"
		}],
		"name": "userInfos",
		"outputs": [{
				"internalType": "uint256",
				"name": "yfiamountall",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "usdtamountall",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "stakelen",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "weekdays",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "address",
			"name": "",
			"type": "address"
		}],
		"name": "whiteaddress",
		"outputs": [{
			"internalType": "bool",
			"name": "",
			"type": "bool"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "yfi",
		"outputs": [{
			"internalType": "address",
			"name": "",
			"type": "address"
		}],
		"stateMutability": "view",
		"type": "function"
	}
]
export const nftabi = [{
	"inputs": [{
		"indexed": true,
		"name": "currency",
		"internalType": "address",
		"type": "address"
	}, {
		"indexed": true,
		"name": "_user",
		"internalType": "address",
		"type": "address"
	}, {
		"indexed": false,
		"name": "_value",
		"internalType": "uint256",
		"type": "uint256"
	}, {
		"indexed": false,
		"name": "orderId",
		"internalType": "string",
		"type": "string"
	}],
	"name": "Claim",
	"anonymous": false,
	"type": "event"
}, {
	"inputs": [{
		"indexed": true,
		"name": "_user",
		"internalType": "address",
		"type": "address"
	}, {
		"indexed": false,
		"name": "_value",
		"internalType": "uint256",
		"type": "uint256"
	}],
	"name": "ClaimAll",
	"anonymous": false,
	"type": "event"
}, {
	"inputs": [{
		"indexed": true,
		"name": "previousOwner",
		"internalType": "address",
		"type": "address"
	}, {
		"indexed": true,
		"name": "newOwner",
		"internalType": "address",
		"type": "address"
	}],
	"name": "OwnershipTransferred",
	"anonymous": false,
	"type": "event"
}, {
	"inputs": [{
		"indexed": true,
		"name": "_user",
		"internalType": "address",
		"type": "address"
	}, {
		"indexed": false,
		"name": "_orderId",
		"internalType": "uint256",
		"type": "uint256"
	}, {
		"indexed": false,
		"name": "_value",
		"internalType": "uint256",
		"type": "uint256"
	}],
	"name": "Recharge",
	"anonymous": false,
	"type": "event"
}, {
	"outputs": [],
	"inputs": [{
		"name": "orderId",
		"internalType": "string",
		"type": "string"
	}, {
		"name": "toAddress",
		"internalType": "address",
		"type": "address"
	}, {
		"name": "currency",
		"internalType": "address",
		"type": "address"
	}, {
		"name": "_amount",
		"internalType": "uint256",
		"type": "uint256"
	}],
	"name": "claim",
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"outputs": [],
	"inputs": [{
		"name": "currency",
		"internalType": "address",
		"type": "address"
	}],
	"name": "claimAll",
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"outputs": [{
		"name": "",
		"internalType": "bool",
		"type": "bool"
	}],
	"inputs": [{
		"name": "orderid",
		"internalType": "string",
		"type": "string"
	}],
	"name": "getOrderId",
	"stateMutability": "view",
	"type": "function"
}, {
	"outputs": [{
		"name": "",
		"internalType": "address",
		"type": "address"
	}],
	"inputs": [],
	"name": "owner",
	"stateMutability": "view",
	"type": "function"
}, {
	"outputs": [],
	"inputs": [{
		"name": "orderId",
		"internalType": "uint256",
		"type": "uint256"
	}],
	"name": "recharge",
	"stateMutability": "payable",
	"type": "function"
}, {
	"outputs": [],
	"inputs": [],
	"name": "renounceOwnership",
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"outputs": [],
	"inputs": [{
		"name": "addr",
		"internalType": "address",
		"type": "address"
	}],
	"name": "setAcceptAddress",
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"outputs": [],
	"inputs": [{
		"name": "newOwner",
		"internalType": "address",
		"type": "address"
	}],
	"name": "transferOwnership",
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"outputs": [],
	"inputs": [],
	"name": "withdraw",
	"stateMutability": "payable",
	"type": "function"
}, {
	"stateMutability": "payable",
	"type": "receive"
}]
export const tokenabi = [{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "_decimals",
		"outputs": [{
			"internalType": "uint8",
			"name": "",
			"type": "uint8"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "_name",
		"outputs": [{
			"internalType": "string",
			"name": "",
			"type": "string"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "_symbol",
		"outputs": [{
			"internalType": "string",
			"name": "",
			"type": "string"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [{
			"internalType": "bool",
			"name": "",
			"type": "bool"
		}],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [{
			"internalType": "address",
			"name": "account",
			"type": "address"
		}],
		"name": "balanceOf",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [{
			"internalType": "uint256",
			"name": "amount",
			"type": "uint256"
		}],
		"name": "burn",
		"outputs": [{
			"internalType": "bool",
			"name": "",
			"type": "bool"
		}],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [{
			"internalType": "uint8",
			"name": "",
			"type": "uint8"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [{
			"internalType": "bool",
			"name": "",
			"type": "bool"
		}],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getOwner",
		"outputs": [{
			"internalType": "address",
			"name": "",
			"type": "address"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [{
			"internalType": "bool",
			"name": "",
			"type": "bool"
		}],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [{
			"internalType": "uint256",
			"name": "amount",
			"type": "uint256"
		}],
		"name": "mint",
		"outputs": [{
			"internalType": "bool",
			"name": "",
			"type": "bool"
		}],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [{
			"internalType": "string",
			"name": "",
			"type": "string"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [{
			"internalType": "address",
			"name": "",
			"type": "address"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [{
			"internalType": "string",
			"name": "",
			"type": "string"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [{
			"internalType": "bool",
			"name": "",
			"type": "bool"
		}],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [{
			"internalType": "bool",
			"name": "",
			"type": "bool"
		}],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [{
			"internalType": "address",
			"name": "newOwner",
			"type": "address"
		}],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]