function fibonacciUntil(n) {
  const nums = [1, 1];
  while (nums.length < n) {
    const lastNum = nums[nums.length - 1];
    const secondLastNum = nums[nums.length - 2];
    nums.push(lastNum + secondLastNum);
  }
  return nums;
}
module.exports = fibonacciUntil;
