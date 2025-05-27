from turtle import *

#we want to make a house
#we want to paint a house

width(7)
speed(30)
color("purple")
forward(200)
left(90)

forward(200)
left(90)
 

forward(200)
left(90)

forward(200)
left(90)

forward(70)
color("yellow")
begin_fill()
left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(200,200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()





exitonclick()