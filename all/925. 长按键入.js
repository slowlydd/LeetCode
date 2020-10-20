/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let j = 1, i = 1;
    let len = name.length
    if((name.length && !typed.length) || (!name.length && type.length)) return false
    if(name[0]!==typed[0]) return false
    while(i < len) {
        if(name[i] === typed[j]) {
            j++; i++;
        } else if (typed[j] === typed[j - 1]){
            j++;
        } else {
            return false;
        }
    }
    let len2 = type.length
    while(j < len2) {
        if(typed[j] !== type[j - 1]) {
            return false
        }
        j++
    }
    return true
};