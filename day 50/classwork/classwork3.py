def alphabet_position(text):
    result = []
    text = text.lower()
    
    for char in text:
        if char.isalpha():
            position = ord(char) - 96
            result.append(str(position))
    
    return ' '.join(result)
