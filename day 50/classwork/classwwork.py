def sum_diagonals(matrix):
    size = len(matrix)
    sum = 0
    n = size - 1
    

    for i in range(size):
        sum += matrix[i][i]
        sum += matrix[i][n]
        n -= 1
        
    return sum
