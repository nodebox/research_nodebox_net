---
layout: page
---
<p><em><span class="big_text">"A variable is a box with a label. The label is the name of the variable, for example, 'elephant'. The content of the box
can be different things: a number, '4', for example. Or it can
be a string, 'animal'. It can be many different things."</span></em></p>

<h1>Python for Kids</h1>

<p>This project aims to teach children how to use the computer to write their own programs. The target age is between 12 and 14. </p>

<hr />

<h1>Language Choice</h1>

<p>I chose Python because it is one of the cleanest languages I've seen, with a really good set of libraries behind it. </p>

<p>However, the language is only part of the equation. In addition to the language, we need an environment where kids can see immediate results. This environment, obviously, is NodeBox.</p>

<p><br /></p>

<p><img src="http://nodebox.net/code/static/media/robot1.jpg" /></p>

<p><br /></p>

<pre>
colormode(RGB, 255)
transform (CORNER)

def robot(links,boven):

    translate(links,boven)
    benen=100

    fill(194,162,272)

    rect(189,51,80,100)
    rect(83,150,300, 150)
    rect(143,300,70,benen)
    rect(274,300,69,benen)
    fill(255,0,0)
    oval(206,79,14,7)
    oval(237,79,14,7)

    tand=211

    for y in range(3):
        star(y*18+211,126,1.5,15,16)
        tand=tand+15

scale(0.5)
for x,y in grid(10,5,328,356):        
    reset()
    scale(0.5)
    robot(x,y)

print random (0,1000)
</pre>
