/* 
* Samuel Dameg
*/

/*
* Don't change the declaration of this function.
*/
function reducer1(previousValue, currentValue){
    // If previousValue is not a number, treat it as 0
    const prev = typeof previousValue === 'number' ? previousValue : 0;
    // If currentValue is not a number, skip it (add 0)
    const curr = typeof currentValue === 'number' ? currentValue : 0;
    return prev + curr;
};

/*
* Don't change the declaration of this function.
*/
function reducer2(previousValue, currentValue){
    // Throw TypeError if either value is not a number
    if (typeof previousValue !== 'number') {
        throw new TypeError('Non-numeric value in array');
    }
    if (typeof currentValue !== 'number') {
        throw new TypeError('Non-numeric value in array');
    }
    return previousValue + currentValue;
};


// Don't add or change anything below this comment.
export { reducer1, reducer2 };
