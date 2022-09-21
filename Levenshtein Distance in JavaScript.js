/*
Levenshtein Distance
The Levenshtein distance is a string metric for measuring the difference between two sequences. It is the minimum number of single-character edits required to change one word into the other.

For example −

Consider, we have these two strings −

const str1 = 'hitting';
const str2 = 'kitten';
The Levenshtein distance between these two strings is 3 because we are required to make these three edits −

kitten → hitten (substitution of "h" for "k")

hitten → hittin (substitution of "i" for "e")

hittin → hitting (insertion of "g" at the end)

We are required to write a JavaScript function that takes in two strings and calculates the Levenshtein distance between them.
*/

const levenshteinDistance = (str1 = '', str2 = '') => {
    const track = Array(str2.length + 1).fill(null).map(() =>
    Array(str1.length + 1).fill(null));
    for (let i = 0; i <= str1.length; i += 1) {
       track[0][i] = i;
    }
    for (let j = 0; j <= str2.length; j += 1) {
       track[j][0] = j;
    }
    for (let j = 1; j <= str2.length; j += 1) {
       for (let i = 1; i <= str1.length; i += 1) {
          const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
          track[j][i] = Math.min(
             track[j][i - 1] + 1, // deletion
             track[j - 1][i] + 1, // insertion
             track[j - 1][i - 1] + indicator, // substitution
          );
       }
    }
    return track[str2.length][str1.length];
 };
 
 // Do not edit the line below.
 exports.levenshteinDistance = levenshteinDistance;
 