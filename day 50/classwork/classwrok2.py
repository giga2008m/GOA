def solve(arr):
    for num in arr:
        if -num not in arr:
            return num
