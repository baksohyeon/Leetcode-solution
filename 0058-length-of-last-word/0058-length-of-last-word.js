/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
    // Check if the input string is empty or consists of only spaces.
    if (s.trim().length == 0) {
        // If the input string is empty or consists of only spaces, return 0.
        return 0;
    }

    // Remove leading and trailing whitespace from the input string.
    s = s.trim();

    // Split the input string into an array of words.
    let words = s.split(" ");

    // Return the length of the last word in the string.
    return words[words.length - 1].length;
}
