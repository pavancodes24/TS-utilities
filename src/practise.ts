let a: string = "name";

let b: number = 42;

let c: boolean = false;

const sumeveryting = (a: number, b: number): number => a + b;

const logmsg = <T>(msg: T): void => console.log(msg);

logmsg(sumeveryting(2, 3));

const checkobj = (arg: any): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

const checkdatapresent = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (checkobj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

logmsg(checkdatapresent({ name: "dave" }));
logmsg(checkdatapresent([1, 2, 3, 4, 5]));

class Animal {
  constructor(
    public name: string,
    private age: number,
    protected details: string
  ) {
    (this.name = name), (this.details = details);
  }

  public getAge() {
    return this.age;
  }

  get ageData(): number {
    return this.age;
  }

  set ageData(value: number) {
    this.age = value;
  }
}

const animal1 = new Animal("testing", 26, "check");
console.log(animal1);

animal1.ageData = 34;
logmsg(animal1.ageData);

logmsg(animal1);

type Guitar = {
  name: string;
  age: number;
  details: (string | number | undefined)[];
};

let evm: Guitar = {
  name: "pavan",
  age: 26,
  details: new Array(5).fill(0),
};

for (const key in evm) {
  logmsg(evm[key as keyof typeof evm]);
}

interface havingId {
  id: number;
}

let arrData = [
  { id: 1, name: "pavan", email: "check@gmail.com", age: 26 },
  { id: 2, name: "rober", email: "test@gmail.com", age: 26 },
];

let processArray = <T extends havingId, k extends keyof T>(
  arr: T[],
  key: k
): T[k][] => {
  return arr.map((item) => item[key]);
};

logmsg(processArray(arrData, "email"));

const infini = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 10) break;
  }
};

let ot = function testinfi() {
  let j: number = 0;
  while (true) {
    j++;
    if (j > 10) break;
  }
};

let getredsum = (a: number, ...arr: number[]): number => {
  return a + arr.reduce((a, b) => a + b);
};

logmsg(getredsum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

interface Assingment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignmentData = (
  assign: Assingment,
  updateProps: Partial<Assingment>
): Assingment => {
  return { ...assign, ...updateProps };
};

let assign01: Assingment = {
  studentId: "comp123",
  title: "grades for students",
  grade: 59,
};
logmsg(assign01);
assign01 = updateAssignmentData(assign01, { grade: 90 });
logmsg(assign01);

const recordAssignm = (assign: Required<Assingment>): Assingment => {
  return assign;
};

logmsg(recordAssignm({ ...assign01, verified: true }));

type studGrades = "A" | "B" | "c" | "D" | "U";
type studNames = "Sara" | "Kelby";

let objcombing: Record<studNames, studGrades> = {
  Sara: "A",
  Kelby: "U",
};

interface marks {
  assign1: number;
  assign2: number;
}
console.log(objcombing);

let gradeMarks: Record<studNames, marks> = {
  Sara: { assign1: 89, assign2: 91 },
  Kelby: { assign1: 67, assign2: 12 },
};


console.log(gradeMarks)

type someMarks = Exclude<studGrades, 'U'>
type highGrad = Extract<studGrades,'A'|'B'>