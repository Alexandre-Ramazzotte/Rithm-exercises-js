let myself = {
    firstName: "Daniel",
    lastName: "Ramazzotte",
    occupation: "Student"
};

console.log(myself.firstName)
console.log(myself["lastName"])

myself.hobby = "Playing the Guitar";

delete myself.occupation;

console.log(myself)