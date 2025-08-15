const prompt = require('prompt-sync')();

const str1 = prompt("Enter a string 1: ");
const str2 = prompt("Enter a string 2: ");

function isAnagramManual(a, b) {
    // Step 1 - remove spaces & convert to lowercase
    let s1 = "", s2 = "";

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== " ") {
            s1 += a[i].toLowerCase();
        }
    }

    for (let i = 0; i < b.length; i++) {
        if (b[i] !== " ") {
            s2 += b[i].toLowerCase();
        }
    }

    // Step 2 - if lengths differ → not anagram
    if (s1.length !== s2.length) {
        return false;
    }

    // Step 3 - frequency array for a-z
    const freq = Array(26).fill(0);

    // count characters of first string
    for (let i = 0; i < s1.length; i++) {
        let index = s1.charCodeAt(i) - 97; // index for 'a' to 'z'
        freq[index]++;
    }

    // subtract for second string
    for (let i = 0; i < s2.length; i++) {
        let index = s2.charCodeAt(i) - 97;
        freq[index]--;
    }

    // check if any count not zero
    for (let i = 0; i < 26; i++) {
        if (freq[i] !== 0) {
            return false;
        }
    }
    return true;
}

if (isAnagramManual(str1, str2)) {
    console.log("Output: Anagram");
} else {
    console.log("Output: Not Anagram");
}
