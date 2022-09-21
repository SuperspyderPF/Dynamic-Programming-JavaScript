function minCoinChange(coins, amount) {
    // create an array to hold the minimum number of coins to make each amount
    // amount + 1 so that you will have indices from 0 to amount in the array
    const minCoins = new Array(amount + 1).fill(Infinity); 
    // there are 0 ways to make amount 0 with positive coin values
    minCoins[0] = 0;
    // look at one coin at a time
    for(let coin of coins) {
      for(let i = 0; i <= amount; i += 1) {
        // make sure the difference between the current amount and the current coin is at least 0
        // replace the minimum value
        if((i - coin) >= 0) minCoins[i] = Math.min(minCoins[i], minCoins[i - coin] + 1);
      }
    }
    // if the value remains Infinity, it means that no coin combination can make that amount
    return minCoins[amount] !== Infinity ? minCoins[amount] : -1;
  }

  