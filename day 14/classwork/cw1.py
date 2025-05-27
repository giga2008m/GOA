numbers=[]


for i in range(10):
    number=int(input("please enter a number:"))
    numbers.append(number)

for number in numbers:
    if number % 2 ==0:
        print((number,"is even"))
    else:
        print(number,"is odd")