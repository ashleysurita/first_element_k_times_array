def firstKTimes(array: [int], k: int) -> int:
    if not array or not len(array) or not k:
        return -1
    
    count = {}
    for num in array:
        if num in count.keys():
            count[num]+=1
        else:
            count[num] = 1
        if count[num] == k:
            return num
    
    return -1

# Test Cases
print(firstKTimes([1, 2, 2, 3, 3], 2)) # 2
print(firstKTimes([1, 2, 2, 3, 3], 3)) # -1
print(firstKTimes([], 1)) # -1
