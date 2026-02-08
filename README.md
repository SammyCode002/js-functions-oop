# JavaScript Higher-Order Functions & OOP

Two JavaScript exercises demonstrating higher-order functions and object-oriented programming.

## Part 1: Reducer Functions

Custom reducer functions for use with `Array.reduce()` that handle non-numeric values gracefully.

### reducer1
Skips non-numeric values and sums only the numbers.

### reducer2
Throws `TypeError` if any non-numeric value is found.

## Part 2: Point Classes

Object-oriented implementation of 2D and 3D points with Euclidean distance calculation.

- **Point2D** - 2D point with `distanceFrom()` method
- **Point3D** - Extends Point2D, adds z-coordinate

## Concepts Demonstrated

- Higher-order functions
- Type checking with `typeof`
- Error handling with `TypeError`
- ES6 Classes & inheritance
- Method overriding

## Run Tests
```bash
cd reducers && npm install && npm test
cd points && npm install && npm test
```
