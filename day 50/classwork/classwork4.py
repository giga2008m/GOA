def sort_array(source_array):
   
    odd_numbers = [num for num in source_array if num % 2 != 0]
    
    odd_numbers.sort()
    result = []
    odd_index = 0
    for num in source_array:
        if num % 2 != 0:
            result.append(odd_numbers[odd_index])
            odd_index += 1
        else:
            result.append(num)
    
    return result
