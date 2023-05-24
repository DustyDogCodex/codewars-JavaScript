/* Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

choose a text in capital letters including or not digits and non alphabetic characters,

    shift each letter by a given number but the transformed letter must be a letter (circular shift),
    replace each digit by its complement to 9,
    keep such as non alphabetic and non digit characters,
    downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
    reverse the whole result.

Example:

your text: "BORN IN 2015!", shift 1

1 + 2 + 3 -> "CPSO JO 7984!"

4 "CpSo jO 7984!"

5 "!4897 Oj oSpC"

With longer passphrases it's better to have a small and easy program. Would you write it? */

function playPass(s, n) {
    let result = "";
    for (let i = 0; i < s.length; i++) { 
        let d = s.charCodeAt(i);
        if (d >= "A".charCodeAt(0) && d <= "Z".charCodeAt(0)){
            c = String.fromCharCode(((d - "A".charCodeAt(0) + n) % 26) + "A".charCodeAt(0));
        } else if (d >= "0".charCodeAt(0) && d <= "9".charCodeAt(0)){
            c = String.fromCharCode(105 - d);
        } else {
            c = s[i];
        }

        if (i % 2 == 1){
            c = c.toLowerCase();
        } else {
            c = c.toUpperCase();
        }
        result += c;
    }
    return result.split('').reverse().join('');
}