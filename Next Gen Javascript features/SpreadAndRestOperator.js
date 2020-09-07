// 1.0 Spread is used to split up array elements OR object properties
// 1.1 Array Example:
const oldArray = [1,2,3];
const newArray = [...oldArray, 4 ,5];

// 1.2 Object Properties Example:
const oldObject = {name: 'nerdrobot'};
const newObject = {...oldObject, age: 99};

// Rest is used to merge a function arguments into an array
const sortArguments = (...args) => {
    args.sort();
    console.log(args);
}

// Example
sortArguments(2,3,1,9);
sortArguments('a', 'c', 'b', 'e', 'd');