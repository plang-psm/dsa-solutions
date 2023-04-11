// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

//-----------------------------
// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

//-----------------------------
// set min and max
// loop through the prices and set the current price and proft
// if profit is > max then set to max
// if current price is < min then set to min

//-----------------------------
// Time complexity: O(n) + Space complexity: O(1)

const maxProfit = function (prices) {
  let min = prices[0];
  let max = 0;

  for (let i = 1; i < prices.length; i++) {
    let currPrice = prices[i];
    let profit = currPrice - min;

    if (profit > max) {
      max = profit;
    }
    if (min > currPrice) {
      min = currPrice;
    }
  }
  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
