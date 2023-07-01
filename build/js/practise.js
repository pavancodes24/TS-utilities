"use strict";
let a = "name";
let b = 42;
let c = false;
const sumeveryting = (a, b) => a + b;
const logmsg = (msg) => console.log(msg);
logmsg(sumeveryting(2, 3));
const checkobj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
const checkdatapresent = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (checkobj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
logmsg(checkdatapresent({ name: "dave" }));
logmsg(checkdatapresent([1, 2, 3, 4, 5]));
class Animal {
    constructor(name, age, details) {
        this.name = name;
        this.age = age;
        this.details = details;
        (this.name = name), (this.details = details);
    }
    getAge() {
        return this.age;
    }
    get ageData() {
        return this.age;
    }
    set ageData(value) {
        this.age = value;
    }
}
const animal1 = new Animal("testing", 26, "check");
console.log(animal1);
animal1.ageData = 34;
logmsg(animal1.ageData);
logmsg(animal1);
let evm = {
    name: "pavan",
    age: 26,
    details: new Array(5).fill(0),
};
for (const key in evm) {
    logmsg(evm[key]);
}
let arrData = [
    { id: 1, name: "pavan", email: "check@gmail.com", age: 26 },
    { id: 2, name: "rober", email: "test@gmail.com", age: 26 },
];
let processArray = (arr, key) => {
    return arr.map((item) => item[key]);
};
logmsg(processArray(arrData, "email"));
const infini = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 10)
            break;
    }
};
let ot = function testinfi() {
    let j = 0;
    while (true) {
        j++;
        if (j > 10)
            break;
    }
};
let getredsum = (a, ...arr) => {
    return a + arr.reduce((a, b) => a + b);
};
logmsg(getredsum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
const updateAssignmentData = (assign, updateProps) => {
    return Object.assign(Object.assign({}, assign), updateProps);
};
let assign01 = {
    studentId: "comp123",
    title: "grades for students",
    grade: 59,
};
logmsg(assign01);
assign01 = updateAssignmentData(assign01, { grade: 90 });
logmsg(assign01);
const recordAssignm = (assign) => {
    return assign;
};
logmsg(recordAssignm(Object.assign(Object.assign({}, assign01), { verified: true })));
let objcombing = {
    Sara: "A",
    Kelby: "U",
};
console.log(objcombing);
let gradeMarks = {
    Sara: { assign1: 89, assign2: 91 },
    Kelby: { assign1: 67, assign2: 12 },
};
console.log(gradeMarks);
