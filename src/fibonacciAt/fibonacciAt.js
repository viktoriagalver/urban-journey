function fibonacciAt(n) {
  const nums = [1, 1];

  while (nums.length < n) {
    const lastNum = nums[nums.length - 1]; // nums [2 - 1] = nums[1]
    const secondLastNum = nums[nums.length - 2]; // nums[2 - 2] = nums[0]

    nums.push(lastNum + secondLastNum); // nums.push(1 + 1) = nums.push(2)
  }

  return nums[nums.length - 1];
}

module.exports = fibonacciAt;
