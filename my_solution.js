function firstKTimes(array, k) {
   if(!array || !array.length || !k) return -1
    
    const counts = {}
    for(let i = 0; i < array.length; i++){
        // increase the count and keep going
        counts[array[i]] ? counts[array[i]]++ : counts[array[i]] = 1
        // if the count equals k, return the value
        if(counts[array[i]] === k) return array[i];
    }
    
    return -1
}

// Test Cases
console.log(firstKTimes([1, 2, 2, 3, 3], 2)) // 2
console.log(firstKTimes([1, 2, 2, 3, 3], 3)) // -1
console.log(firstKTimes([], 1)) // -1
