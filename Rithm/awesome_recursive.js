let nestedArr = [
    "Elie",
    ["Matt", ["Tim"]],
    ["Colt", ["Whiskey", ["Janey"], "Tom"]],
    "Lorien"
  ];
  
  console.log(countVowels (nestedArr)); // 13
  
  function countVowels (arrOrStr) {
    let count = 0; //contador de vowels
    let vowels = ['a', 'e', 'i', 'o', 'u']; //definição de vowels
    for (arr_Str of arrOrStr) { // iterando pelo array original e depois pelos arrays dentro do array
        if (Array.isArray(arrOrStr)) { //se é um array iterar por ele para acessar as strings
            count += countVowels(arr_Str); //retorna o count de vowels de dentro do array e adiciona a main function do stack
        } else {
            for (let i = 0; i < arr_Str.length; i++) { //se é uma string, ver quantas letras são vogais 
                if (vowels.includes(arr_Str[i])) count++;
            }
        }
    }
    return count //retorna o total de vowels
}