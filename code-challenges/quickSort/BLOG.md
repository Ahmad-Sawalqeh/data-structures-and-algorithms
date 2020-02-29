# quickSort

## Pseudocode
```
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```

### Sample Array

input array => [8,4,23,42,16,15]<br>

### Efficency
* Time: Omega(n log(n))
* Space: O(log (n))

### Trace

1. pass 1:
```
[8, 4, 23, 42, 16, 15]
                   pivot
partion:
left => [8, 4] // less than pivot

swap:
left => [4, 8]
```

2. pass 2:
```
partion:
right => [23, 42, 16] // greater than pivot

swap:
right => [23, 42, 16]
```

3. pass 3:
```
partion:
right => [23, 42, 16] // greater than pivot

swap:
right => [23, 16, 42]
```

4. pass 4:
```
partion:
right => [23, 42, 16] // greater than pivot

swap:
right => [16, 23, 42]
```

5. pass 5:
```
left => [4, 8]

right => [16, 23, 42]
```

6. pass 6:
```
result => [4, 8, 16, 23, 42]
```

`returned array = [4, 8, 15, 16, 23, 42]`
