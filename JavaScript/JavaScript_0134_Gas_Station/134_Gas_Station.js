/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalGas = 0;
    let totalCost = 0;
    let tank = 0;
    let startIndex = 0;

    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
    }

    // If total gas is less than total cost, it's impossible to complete the circuit
    if (totalGas < totalCost) {
        return -1;
    }

    for (let i = 0; i < gas.length; i++) {
        tank += gas[i] - cost[i];
        // If tank goes negative, reset the starting index to the next station
        if (tank < 0) {
            startIndex = i + 1;
            tank = 0;
        }
    }

    return startIndex;
};

// Runtime 68ms, Memory 61.40MB