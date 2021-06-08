function myName () {
    return "Daniel Alexandre Ramazzotte";
}

console.log(myName());

let favoriteFoods = ['Pizza', 'Ice Cream'];

function randomFood (fav) {
    return fav[Math.round(Math.random())];
}

console.log(randomFood(favoriteFoods))

numbers = [1,2,3,4,5,6,7,8,9,10];

function displayOddNumbers(num) {
    for (number of num){
        if (number % 2 == 1) console.log(number)
    }
}

displayOddNumbers(numbers);

console.log('\n')

function displayEvenNumbers(num) {
    for (number of num){
        if (number % 2 == 0) console.log(number)
    }
}

displayEvenNumbers(numbers);

console.log('\n')

function returnFirstOddNumber(num) {
    for (number of num){
        if (number % 2 == 1)  {
        console.log(number);
        return;
        }
    }
}

console.log('\n')

returnFirstOddNumber(numbers)

function returnFirstEvenNumber(num) {
    for (number of num){
        if (number % 2 == 0){ 
            console.log(number);
            return;
        }
    }
}

returnFirstEvenNumber(numbers);

function returnFirstHalf (num) {
    for (let i = 0; i < num.length/2; i++)
    {
        console.log(num[i])
    }
} 

returnFirstHalf(numbers);

console.log('\n')

function returnSecondHalf (num) {
    for (let i = num.length -1; i >= num.length/2; i--)
    {
        console.log(num[i])
    }
}

returnSecondHalf(numbers);