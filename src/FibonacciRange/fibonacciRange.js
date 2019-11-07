function fibonacciRange(start, end) {
  const nums = [1, 1];

  while (nums.length < end) {
    const lastNum = nums[nums.length - 1];
    const secondLastNum = nums[nums.length - 2];

    nums.push(lastNum + secondLastNum);
  }

  return nums.slice(start, end);
}

module.exports = fibonacciRange;
