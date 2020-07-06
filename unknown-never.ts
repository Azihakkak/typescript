// type unknown
// we dont know what the user eventually will enter
// we can store any value without getting an error

let userInput: unknown;
let userName: String;

userInput = "Max";
userInput = 5;
// userName = userInput; (we can not do this )
// we have to use an extra type check to be able to assign an unknown value to a value with fixed type

if (typeof userInput === "string") {
  userName = userInput;
}

// Never Type
function generateError(message: string, code: number): never {
  // in JS we can throw any object or any value as an error
  throw { message: message, errorCode: code };
}
generateError("An error occured!", 500);
