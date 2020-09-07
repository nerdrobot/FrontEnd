// normal JavaScript function looks like this:
function normalFunction() {
    console.log("This is old way of writing functions!");
}

// Arrow functions in Javascript looks like this
const arrowFunction = () => {
    console.log("This is the new way of writing functions!");
}

// Examples
function printMyName(name) {
    console.log(name);
}

const printName = name =>  {
    console.log(name);
}

function printMyNameAndAge(name, age) {
    console.log(name, age);
}

const printNameAndAge = (name, age) =>  {
    console.log(name, age);
}

printMyName("nerdrobot");
printName("nerdrobot");

printMyNameAndAge("nerdrobot", 99)
printNameAndAge("nerdrobot", 99)