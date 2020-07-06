// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//   name: "maximilian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

let favouriteActivities: string[];
favouriteActivities = ["Sports"];

console.log(person.name);

for (let hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
