// find vowels from a string

function findVowel(str) {
    let count = 0;
    for (let char of str) {
        // console.log(char);
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            count++;
        }
    }
}

findVowel("Istiak")