# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

Strategy:
  1. Find the largest pancake in the unsorted portion
  2. Flip the array to bring the largest element to the top
  3. Flip the entire unsorted portion to move the largest element to its final position
  4. Reduce problem size by 1 and repeat until sorted

Flip:
  - given array and position n, reverse order of elements from index 0 to n-1
  - flip([1, 2, 3, 4], 2) -> [2, 1, 3, 4]

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons of pancakes? What is it in terms of the number of flips?
Add your answer to this markdown file.

### Number of Comparisons

for each pos i in array, find max element in first i elements. Requires i-1 comparisons

Total comparisons = (n-1) + (n-2) + ... + 1 = n(n-1)/2 = $/Theta(n^2)$

### Number of Flips

Worst case for each position i: 

  - one flip to bring the largest element to the top if its not already there
  - one flip to move it to its final position

This means at most 2(n-1) flips for an array of size n

then the number of flips is $/Theta(n)$ in the worst case

BUT the overall time complexity is dominated by the comparisons: $/Theta(n^2)$

## Sources

[Leetcode](https://leetcode.com/problems/pancake-sorting/description/)

[Visualizer](https://www.sortvisualizer.com/pancakesort/)

[GeeksforGeeks](https://www.geeksforgeeks.org/pancake-sorting/)

[Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."

