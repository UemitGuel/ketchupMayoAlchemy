// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Ketchup is Initializable {
    uint public ketchupCount;
    uint public mayoCount;
    Topping[] public toppings;
    event VoteHasHappend();

    struct Topping {
        address voter;
        uint timestamp;
        uint ketchupCount;
        uint mayoCount;
    }

    function voteKetchup() external handleVote {
        ketchupCount++;
    }

    function voteMayo() external handleVote {
        mayoCount++;
    }

    modifier handleVote {
        _;
        toppings.push(
            Topping(
                msg.sender,
                block.timestamp,
                ketchupCount,
                mayoCount
            )
        );
        emit VoteHasHappend();
   }
}
