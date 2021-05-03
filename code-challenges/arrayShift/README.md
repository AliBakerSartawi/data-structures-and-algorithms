# Array Shift

[**Insert Value In Middle Of Array**](./array-shift.js)

**Challenge**: Value should be inserted in the middle of the array, or after the middle if the array length is odd... without utilizing built-in methods, while applying our own testing code

**Approach & Efficiency**: I copied the array by value not reference so that the original array stays immutable, then I calculated the middle index using `Math.ceil` to account for arrays with odd length... then I used two for loops to populate the shifted array, the first loop for values until the middle, and the second loop for values after the middle... while also this could have been executed in one loop with multiple `if` statements.

**Solution**:

*run: npm test array-shift*

<!-- ![arrayReverse img](../../assets/array-reverse.jpg) -->