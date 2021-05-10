let mergesort = arr => {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergesort(arr.slice(0, mid))
    let right = mergesort(arr.slice(mid))
    return merge(left,right)
}

let merge = (arr1, arr2) => {
    let i = 0
    let j =0
    let result = []
    while (i < arr1.length && j < arr2.length) {
        console.log(arr1[i],arr2[j]);
        if (arr2[j] > arr1[i]) {
            console.log('111');
            result.push(arr1[i])
            i++
        } else {
            console.log('222');
            result.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }
    return result
}

console.log(mergesort([2, 4, 63, 2, 4, 2, 5, 8, 2, 7]))


//here time complexcity will be O(nlogn) space complexcity O(n)