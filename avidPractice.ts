let id: number = 5;
let company: string = "Avid LLC";
let isPublished: boolean = true;

let ids: number[] = [1, 2, 3, 4, 5];
let x: any = "Hillary Avid";
let xArr: any[] = ["Avid", 66, true];

const concatenateValues = (a: string, b: string) => {
  return a + b;
};

console.log(concatenateValues("hello", "avid"));
console.log(concatenateValues("5", "10"));

//Interface and types
interface UserInterface {
  id: number;
  name: string;
  age?: number;
  greet(message: string): void;
}
const User: UserInterface = {
  id: 1,
  name: "Avid",
  greet(message) {
    console.log(message);
  },
};

User.greet("Hello");

if (!User.age) {
  console.log("oops no age has been defined");
} else {
  console.log(User.age);
}

//unions and intersections

type IDFieldType = string | number;
const printId = (id: IDFieldType) => {
  console.log("ID:" + id);
};

interface BusinessPartner {
  name: string;
  creditScore: number;
}

interface userIdentity {
  id: number;
  email: string;
}

type Employee = BusinessPartner & userIdentity;

const signContract = (employee: Employee): void => {
  console.log(
    "Contact signed by " + employee.name + "with email:" + employee.email
  );
};

signContract({
  name: "Avid",
  creditScore: 800,
  id: 66,
  email: "hillarynyakundi66@gmail.com",
});

//ENUMS
