# Merg Sort

## Pseudocode
```
 ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]

      Mergesort(left)

      Mergesort(right)

      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

### Sample Array

input array => [8,4,23,42,16,15]<br>

### Efficency
* Time: O(n^2)
* Space: O(1)

### Trace

1. pass 1:
```
ALGORITHM Mergesort([8,4,23,42,16,15])
    DECLARE n <-- 6
           
    if 6 > 1
      DECLARE mid <-- 3
      DECLARE left <-- [8, 4, 23]
      DECLARE right <-- [42, 16, 15]

      Mergesort(left)

      Mergesort(right)
```

2. pass 2:
```
ALGORITHM Mergesort([8,4,23,42,16,15])
    DECLARE n <-- 6
           
    if 6 > 1
      DECLARE mid <-- 1
      DECLARE left <-- [8]
      DECLARE right <-- [4, 23]

      Mergesort(left)

      Mergesort(right)
```

3. pass 3:
```
ALGORITHM Mergesort([8,4,23,42,16,15])
    DECLARE n <-- 6
           
    if 6 > 1
      DECLARE mid <-- 1
      DECLARE left <-- [4]
      DECLARE right <-- [23]

      Mergesort(left)

      Mergesort(right)
```

4. pass 4:
```
ALGORITHM Mergesort([8,4,23,42,16,15])
    DECLARE n <-- 6
           
    if 6 > 1
      DECLARE mid <-- 1
      DECLARE left <-- [4]
      DECLARE right <-- [23]

      Mergesort(left)

      Mergesort(right)

      Merge(left, right, arr)

result => [4, 8, 23]
```

5. pass 5:
```
ALGORITHM Mergesort([8,4,23,42,16,15])
    DECLARE n <-- 6
           
    if 6 > 1
      DECLARE mid <-- 1
      DECLARE left <-- [42]
      DECLARE right <-- [16, 15]

      Mergesort(left)

      Mergesort(right)
```

6. pass 6:
```
ALGORITHM Mergesort([8,4,23,42,16,15])
    DECLARE n <-- 6
           
    if 6 > 1
      DECLARE mid <-- 1
      DECLARE left <-- [16]
      DECLARE right <-- [15]

      Mergesort(left)

      Mergesort(right)
```

7. pass 7:
```
ALGORITHM Mergesort([8,4,23,42,16,15])
    DECLARE n <-- 6
           
    if 6 > 1
      DECLARE mid <-- 1
      DECLARE left <-- [16]
      DECLARE right <-- [15]

      Mergesort(left)

      Mergesort(right)

      Merge(left, right, arr)

result => [15, 15]
```

8. pass 8:
```
ALGORITHM Mergesort([8,4,23,42,16,15])
    DECLARE n <-- 6
           
    if 6 > 1
      DECLARE mid <-- 1
      DECLARE left <-- [16]
      DECLARE right <-- [15]

      Mergesort(left)

      Mergesort(right)

      Merge(left, right, arr)

result => [15, 16]
```

9. pass 9:
```
ALGORITHM Mergesort([8,4,23,42,16,15])
    DECLARE n <-- 6
           
    if 6 > 1
      DECLARE mid <-- 1
      DECLARE left <-- [16]
      DECLARE right <-- [15]

      Mergesort(left)

      Mergesort(right)

      Merge(left, right, arr)

result => [15, 16, 15]
```

10. pass 10:
```
ALGORITHM Mergesort([8,4,23,42,16,15])
    DECLARE n <-- 6
           
    if 6 > 1
      DECLARE mid <-- 1
      DECLARE left <-- [16]
      DECLARE right <-- [15]

      Mergesort(left)

      Mergesort(right)

      Merge(left, right, arr)

result => [15, 16, 42]
```

11. pass 11:
```
ALGORITHM Mergesort([8,4,23,42,16,15])
    DECLARE n <-- 6
           
    if 6 > 1
      DECLARE mid <-- 1
      DECLARE left <-- [16]
      DECLARE right <-- [15]

      Mergesort(left)

      Mergesort(right)

      Merge(left, right, arr)

result => [4, 8, 15, 16, 23, 15]
```

12. pass 12:
```
ALGORITHM Mergesort([8,4,23,42,16,15])
    DECLARE n <-- 6
           
    if 6 > 1
      DECLARE mid <-- 1
      DECLARE left <-- [16]
      DECLARE right <-- [15]

      Mergesort(left)

      Mergesort(right)

      Merge(left, right, arr)

result => [4, 8, 15, 16, 23, 42]
```

`returned array = [4, 8, 15, 16, 23, 42]`

