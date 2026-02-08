# JavaScript Higher-Order Functions & OOP

Two JavaScript exercises demonstrating higher-order functions and object-oriented programming.

## Part 1: Reducer Functions

Custom reducer functions for use with `Array.reduce()` that handle non-numeric values gracefully.

### reducer1
Skips non-numeric values and sums only the numbers.

```javascript
[1, 2, true, 'a', 4].reduce(reducer1)  // 7 (skips true and 'a')
['a', 'b'].reduce(reducer1)             // 0 (all non-numeric)
```

### reducer2
Throws `TypeError` if any non-numeric value is found.

```javascript
[1, 2, 3].reduce(reducer2)              // 6
[1, 'a', 3].reduce(reducer2)            // throws TypeError
```

## Part 2: Point Classes

Object-oriented implementation of 2D and 3D points with Euclidean distance calculation.

### Point2D
```javascript
const p1 = new Point2D(1, 2);
const p2 = new Point2D(4, 6);
p1.distanceFrom(p2)  // 5
```

### Point3D (extends Point2D)
```javascript
const p1 = new Point3D(1, 2, 3);
const p2 = new Point3D(4, 6, 8);
p1.distanceFrom(p2)  // 7.07...
```

## Concepts Demonstrated

- **Higher-order functions** - Functions as arguments to `reduce()`
- **Type checking** - Using `typeof` to validate input
- **Error handling** - Throwing `TypeError` for invalid input
- **ES6 Classes** - Constructor, methods, inheritance
- **Class inheritance** - `extends` and `super()`
- **Method overriding** - `distanceFrom()` in Point3D

## Run Tests

```bash
# Reducers
cd reducers
npm install
npm test

# Points
cd points
npm install
npm test
```

## Tech

- JavaScript (ES6 Modules)
- Jest (testing)
