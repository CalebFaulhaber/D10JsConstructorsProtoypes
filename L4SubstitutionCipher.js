let abc1 = "abcdefghijklmnopqrstuvwxyz"; 
let abc2 = "taoinshrdlucmfwypvbgkjqxz"; 

class SubstitutionCipher {
    constructor(abc1, abc2) {
        this.abc1 = abc1;
        this.abc2 = abc2;
        // constructor will automaticaly call one time as 
        // soon as substitutionCipher is initialized.
    };
    encode(letters) {
        let lettersArr = [...letters.toLowerCase()];
        let encodedLetters = '';
        for (let i in lettersArr) {
            if (this.abc2.includes(lettersArr[i]) && this.abc1.includes(lettersArr[i])) {
                // if statement will only go through if abc2 and abc1 contain
                // the letter at current index
                encodedLetters += `${this.abc2[abc1.indexOf(lettersArr[i])]}`;
                // adding letter to endodedLetters string.
                // finding what index the letter is at in abc1 and using that
                // index to find appropriate letter in abc2.
            };
        };
        return encodedLetters;
    };
    decode(letters) {
        let lettersArr = [...letters.toLowerCase()];
        let encodedLetters = '';
        for (let i in lettersArr) {
            if (this.abc1.includes(lettersArr[i]) && this.abc2.includes(lettersArr[i])) {
                encodedLetters += `${this.abc1[abc2.indexOf(lettersArr[i])]}`;
            };
        };
        return encodedLetters;
    };
};

const sub = new SubstitutionCipher(abc1,abc2);
console.log(sub.decode('eta'));




// [Lab] Substitution Cipher Helper

// A simple substitution cipher replaces one character from an alphabet with a character from an alternate alphabet, where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.
// You will need to create a SubstitutionCipher constructor.
// The SubstitutionCipher will have at least two prototype methods: .encode and .decode
// Think about where you will store the alphabet and the alternate alphabet.

// The following are examples of how your solution should work:
// let abc1 = "abcdefghijklmnopqrstuvwxyz"; let abc2 = "etaoinshrdlucmfwypvbgkjqxz"; const sub = new SubstitutionCipher(abc1, abc2); sub.encode("abc") // => "eta"
// sub.encode("xyz") // => "qxz"
// sub.encode("aeiou") // => "eirfg"
// sub.decode("eta") // => "abc"
// sub.decode("qxz") // => "xyz"
// sub.decode("eirfg") // => "aeiou"

// If a character provided is not in the opposing alphabet, simply leave it as be.

// Stretch
// Redo this exercise with Javascript classes.