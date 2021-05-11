let redixsort = arr => {
    let maxDigitCount = mostDigit(arr)    // get max digit of the array
    for (let i = 0; i < maxDigitCount; i++) {  // loop through max number of time
        let digitBucket = Array.from({ length: 10 }, () => []);  // create 10 buckets for all digits
        console.log(digitBucket);
        for (let j = 0; j < arr.length; j++) {   
            digitBucket[getDigit(arr[j],i)].push(arr[j])  // push to number bucket based on the digit
        }
        arr = [].concat(...digitBucket)   // concat and create a new fresh array from the bucket array
    }
    return arr
}

let getDigit = (num, i) => { // get digit at particular index
    return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10
}

let digitCount = num => { // get number of digits in a number
    return Math.floor(Math.log10(Math.abs(num))) +1
}

let mostDigit = nums => { // get max digit from the array
    let maxDigit = 0
    for (let i = 0; i < nums.length; i++) {
        maxDigit = Math.max(maxDigit,digitCount(nums[i]))
    }
    return maxDigit
}


console.log(redixsort([23, 343, 6, 7676, 877656, 764, 3434, 7676]));


// here time complexcity will be O(nk)  n is numbers array, k is the max number of digits  and space complexcity O(n+k)