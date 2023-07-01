"use strict";
const logMsg = (data) => {
    console.log(data);
};
const sumall = (a, b) => {
    return a + b;
};
const total = (a, ...arr) => {
    return a + arr.reduce((prev, next) => prev + next);
};
// logMsg(total(1, 2, 3, 4, 5, 6, 7, 8, 9));
let user;
let arr = [1, 2, 3, 4, 5];
let username = "pavan";
let a1 = "22";
let c1;
let b1;
b1 = a1;
c1 = a1;
// console.log(c1);
const infinity = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 10)
            break;
    }
};
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
const isData = (arg) => {
    if (isObj(arg) && !Object.keys(arg)) {
        return { arg, is: false };
    }
    if (Array.isArray(arg) && !arr.length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
const isTrue = (arg) => {
    if (isObj(arg) && !Object.keys(arg)) {
        return { arg, is: false };
    }
    if (Array.isArray(arg) && !arr.length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
// logMsg(isData({ name: "dave" }));
// logMsg(isTrue({ name: "dave" }));
class getITem {
    constructor(data) {
        this.data = data;
    }
    get dataitem() {
        return this.data;
    }
    set dataitem(value) {
        this.data = value;
    }
}
let test = new getITem([1, 2, 3, 4, 5]);
console.log(test.dataitem);
