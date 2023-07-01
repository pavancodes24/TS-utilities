const logMsg = <T>(data: T): void => {
  console.log(data);
};

const sumall = (a: number, b: number): number => {
  return a + b;
};

const total = (a: number, ...arr: number[]): number => {
  return a + arr.reduce((prev, next) => prev + next);
};

// logMsg(total(1, 2, 3, 4, 5, 6, 7, 8, 9));

let user: "superAdmin" | "superUser" | "owner";

let arr: number[] = [1, 2, 3, 4, 5];

let username: string = "pavan";

let a1: string = "22";

let c1: "22" | "33";

let b1: string;

b1 = a1;

c1 = a1 as typeof c1;
// console.log(c1);

const infinity = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 10) break;
  }
};

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

// logMsg(isObj({ name: "Dave" }));

interface databool<T> {
  arg: T;
  is: boolean;
}

const isData = <T>(arg: T): { arg: T; is: boolean } => {
  if (isObj(arg) && !Object.keys(arg as keyof T)) {
    return { arg, is: false };
  }
  if (Array.isArray(arg) && !arr.length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

const isTrue = <T>(arg: T): databool<T> => {
  if (isObj(arg) && !Object.keys(arg as keyof T)) {
    return { arg, is: false };
  }
  if (Array.isArray(arg) && !arr.length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

// logMsg(isData({ name: "dave" }));
// logMsg(isTrue({ name: "dave" }));


class getITem <T>{
    public data: T
    constructor(data:T) { 
        this.data = data
    }

    get dataitem(): T {
        return this.data
    }
    
    set dataitem(value: T) { 
        this.data = value
    }
}


let test = new getITem([1, 2, 3, 4, 5]);

console.log(test.dataitem)



