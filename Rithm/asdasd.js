let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push('Go');

console.log(programming.languages)

programming.difficulty = 7;

console.log(programming.difficulty)

delete programming.jokes;

programming.isFun = true;

console.log(programming)

for (lang of programming.languages) {
    console.log(lang)
}

for (lang in programming) {
    console.log(lang)
}
console.log('\n')
for (lang in programming) {
    console.log(programming[lang])
}