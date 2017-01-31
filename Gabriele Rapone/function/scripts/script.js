function countE() {
    // ask user to input a phrase
    var phrase = prompt('which phrase would you like to examine');
    // if the entry is invalid
    if (typeof phrase != 'string') {
        // alert the user
        alert("That's not a valid string");
        // exit function with a failure report
        return false;
    }
    else { // otherwise
        var eCount = 0;
        // loop the characters of the entry
        for (var i = 0; i < phrase.length; i++) {
            // if the char is an 'E' (case insensitive)
            if (phrase.charAt(i).toLowerCase() == 'e') {
                // increment the E counter
                eCount++;
            }
        }
    }
    //alert the amount of E
    alert("There are " + eCount + " E's in " + phrase);
}