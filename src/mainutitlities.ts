// utility types

//1 type partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compi1234",
  title: "something",
  grade: 0,
};
// console.log(assign1)
console.log(updateAssignment(assign1, { grade: 93 }));

const assignGraded: Assignment = updateAssignment(assign1, { grade: 93 });
// console.log(assignGraded)

//Required and Readonly
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assign1,
  verified: true,
};

recordAssignment({ ...assignGraded, verified: true });

//Record

const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<students, LetterGrades> = {
  Sara: "B",
  Kelly: "U",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<students, Grades> = {
  Sara: { assign1: 85, assign2: 93 },
  Kelly: { assign1: 76, assign2: 15 },
};

//Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "k123",
  grade: 85,
};

type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project",
};

//Exclute and Extract

type adjustedGrade = Exclude<LetterGrades, "U">;

type highGrades = Extract<LetterGrades, "A" | "B">;

//Nonnullable
type AllPossibleGrades = "Dave" | "John" | null | undefined;

type NamesOnly = NonNullable<AllPossibleGrades>;
//excluded both null and undefined

//Return type

// type newAssign = { title: string, points: number }

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);

//parameters 

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);

console.log(tsAssign2);

//Awaited uitility type -> helps us with return type of a Promise

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

type FetchUserReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((res) => console.log(res));



