# Tree

[**Tree**](./tree.js)

**Challenge**:
- Create a `binary tree` class, that has `preOrder`, `inOrder` and `postOrder` methods.
- Create a `binary search tree` that has extra methods... `add` and `contains`.
- Create a `findMaxVal` method that returns the greatest value in a `BinaryTree`.

**Approach & Efficiency**: 
- A `node` class was created, it is used to construct the `tree` nodes
- The `binary search tree` extends the `binary tree`... allowing it to inherit the search algorithms, while giving it the freedom to have extra methods not available in the normal `binary tree`.
- `findMaxVal` was achieved without using built-in methods but traversing the tree with recursion, then capturing the greatest value in a variable.

**Solution**:

*run: npm test tree*

![stacksAndQueues img](../../assets/tree.png)
![stacksAndQueues img](../../assets/tree-find-max-val.png)