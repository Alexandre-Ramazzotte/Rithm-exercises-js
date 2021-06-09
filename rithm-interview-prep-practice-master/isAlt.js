function includes(col, value) { //função pra checar se há um elemento em um array
    for (element of col) {
        if (element == value) return true;
    }
    return false;
}

function isAlt (str) {
    let vowels = ['a','e', 'i', 'o', 'u'];
    let stringList = str.split(''); // length -1, se n, ele sai da string
    for (let i = 0; i < stringList.length -1; i++) 
    {
        let string = stringList[i];
        let nextString = stringList[i+1]; //se são vogais ou não
        let isVowel = includes(vowels, string);
        let nextIsVowel = includes(vowels, nextString); 
        if (isVowel && nextIsVowel) { // só é necessário os casos em que se retorna falso
            return false; // caso retorne true, daria um falso positivo, já que teria que 
        } else if (!isVowel && !nextIsVowel) { // checar todas as vezes o loop do for
            return false;
        }
    }
    return true; //quando acaba o loop e n detecta nenhum caso false, retorna true
} 


