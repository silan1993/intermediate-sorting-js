let quicksort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        quicksort(arr, left, pivotIndex - 1)
        quicksort(arr, pivotIndex+1, right)
    }
    return arr
}

let pivot = (arr, start = 0, end = arr.length - 1)=>{
    let pivotElement = arr[start]
    let swapIndex = start
    for (let i = start+1; i < arr.length; i++) {
        if (pivotElement > arr[i]) {
            swapIndex++
            [arr[swapIndex],arr[i]] = [arr[i],arr[swapIndex]]
        }
        console.log(arr);
    }
    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]]
    return swapIndex
}

console.log(quicksort([4, 5, 6, 3, 1, 2, 7]), 'rs');


// here time complexcity is O(nlogn)