/**
    Req
      buy low sell high
      max profit

      if left < right -- expand + calc max
      else left > right -- move left up to right

      increment right
      return max profit

     */
var maxProfit = function (prices) {
  let maxProfit = -Infinity;
  let left = 0;
  let right = 1;
  for (let i = 0; i < prices.length; i++) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return maxProfit === -Infinity ? 0 : maxProfit;
};
