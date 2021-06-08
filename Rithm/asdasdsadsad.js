function add (a, b) {
    return a + b
}

function mult (a, b)
{
    return a * b
}

function divide (a, b) {
    return a/b
}

function sub (a, b)
{
    return a - b
}

array = [add(2,2), mult(2,2), divide(2,2), sub(2,2)]

console.log(array)

function sayHello (name) {
    if (name == 'Daniel') console.log ('hello boss');
    else console.log(`hello ${name}`);
}

sayHello('Hannah');

function average (num)
{
    let ave = 0;
    for (number of num) 
    {
        ave += number;
    }
    ave = ave/num.length;
    return ave
}

console.log(average([1,2,3,4,5]))

function createStudent (first, last)
{
    let student = {
        firstName: first,
        lastName: last
    };
    return student;
}

let student1 = createStudent("Daniel", "Ramazzotte");

console.log(student1)

let tim = createStudent("Tim", "Garcia");
let matt = createStudent("Matt", "Lane");
let elie = createStudent("Elie", "Schoppik");

let students = [tim, matt, elie];

console.log(students)

function findStudentByFirstName (name)
{
    for (student in students)
    {
        if (students[student].firstName.toLowerCase() == name.toLowerCase())
        {
            console.log ("true");
            return;
        }
    }
    console.log ("false");
}

console.log('\n')
findStudentByFirstName('elie') // true
findStudentByFirstName('Elie') // true
findStudentByFirstName('Janey') // false
findStudentByFirstName('Janey') // false
findStudentByFirstName('TIM') // true
findStudentByFirstName('MMMaaaTTTtttTTT') // false
console.log('\n')

function extractEveryThird (arr) {
    let newArr = [];
    for (index in arr)
    {
        if ((index +1) % 3 == 0 && index != 0) newArr.push(arr[index])
    }
    console.log(newArr);
}

console.log('\n')

extractEveryThird([1,2,3]); // [3]
extractEveryThird([1,2,3,4,5,6]); // [3,6]
extractEveryThird(["a","b","c","d"]); // ["c"]
extractEveryThird(["first value", "second value", "third value"]);

console.log ('\n');

function countEvensAndOdds (arr)
{
    let evod = {}, even = 0, odd = 0;
    for (element of arr)
    {
        if (element % 2 == 0) even++
        else odd ++
    }

    evod.evenCount = even;
    evod.oddCount = odd;
    return evod;
}

console.log(countEvensAndOdds([1,2,3,4]));
/*
 {
    oddCount:2,
    evenCount:2
 }
*/
console.log(countEvensAndOdds([1,2,3,4,5,6,7]));
/*
 {
    oddCount:4,
    evenCount:3
 }
*/
