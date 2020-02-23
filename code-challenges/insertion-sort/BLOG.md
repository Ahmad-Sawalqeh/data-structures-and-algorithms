# Insertion Sort

## Pseudocode
```
  InsertionSort(arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp
```

### Sample Array

input array => [8,4,23,42,16,15]<br>

### Efficency
* Time: O(n^2)
* Space: O(1)

### Trace

1. pass 1:
```
   j     i
[  8  ,  4  ,  23  ,  42  ,  16  ,  15  ]
   0     1     2      3      4      5

temp = 4; (arr[i] <=> arr[1])
while 0 >= 0 && 4 < 8 {//(arr[j])
  arr[1] = arr[0]
  j = -1
}
arr[0] = 4

result array => [4,8,23,42,16,15]
```

2. pass 2:
```
         j     i
[  8  ,  4  ,  23  ,  42  ,  16  ,  15  ]
   0     1     2      3      4      5

temp = 23; (arr[i] <=> arr[2])
while 1 >= 0 && 23 < 8 {//(arr[j])
  //condition false
}
arr[2] = 23

result array => [4,8,23,42,16,15]
```

3. pass 3:
```
               j      i
[  8  ,  4  ,  23  ,  42  ,  16  ,  15  ]
   0     1     2      3      4      5

temp = 42; (arr[i] <=> arr[3])
while 2 >= 0 && 42 < 23 {//(arr[j])
  //condition false
}
arr[3] = 42

result array => [4,8,23,42,16,15]
```

4. pass 4:
```
                      j      i
[  8  ,  4  ,  23  ,  42  ,  16  ,  15  ]
   0     1     2      3      4      5

temp = 16; (arr[i] <=> arr[4])
while 3 >= 0 && 16 < 42 {//(arr[j])
  arr[4] = arr[3]
  j = 2
}

result array => [4,8,23,42,42,15]
```

5. pass 5:
```
                      j      i
[  8  ,  4  ,  23  ,  42  ,  16  ,  15  ]
   0     1     2      3      4      5

temp = 16;
while 2 >= 0 && 16 < 23 {//(arr[j])
  arr[3] = arr[2]
  j = 1
}

result array => [4,8,23,23,42,15]
```

6. pass 6:
```
                      j      i
[  8  ,  4  ,  23  ,  42  ,  16  ,  15  ]
   0     1     2      3      4      5

temp = 16;
while 1 >= 0 && 16 < 8 {//(arr[j])
  //condition false
}
arr[2] = 16

result array => [4,8,16,23,42,15]
```

7. pass 7:
```
                             j      i
[  8  ,  4  ,  23  ,  42  ,  16  ,  15  ]
   0     1     2      3      4      5

temp = 15;
while 4 >= 0 && 15 < 42 {//(arr[j])
  arr[5] = arr[4]
  j = 3
}

result array => [4,8,16,23,42,42]
```

8. pass 8:
```
                             j      i
[  8  ,  4  ,  23  ,  42  ,  16  ,  15  ]
   0     1     2      3      4      5

temp = 15;
while 3 >= 0 && 15 < 23 {//(arr[j])
  arr[4] = arr[3]
  j = 2
}

result array => [4,8,16,23,23,42]
```

9. pass 9:
```
                             j      i
[  8  ,  4  ,  23  ,  42  ,  16  ,  15  ]
   0     1     2      3      4      5

temp = 15;
while 2 >= 0 && 15 < 16 {//(arr[j])
  arr[3] = arr[2]
  j = 1
}

result array => [4,8,16,16,23,42]
```

10. pass 10:
```
                             j      i
[  8  ,  4  ,  23  ,  42  ,  16  ,  15  ]
   0     1     2      3      4      5

temp = 15;
while 1 >= 0 && 15 < 8 {//(arr[j])
  // condition flase
}
arr[2] = 15

i = 6 (break for loop)

result array => [4,8,15,16,23,42]
```