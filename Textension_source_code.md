---
layout: page
---
<p>XSPACING = 0.0
YSPACING = 0.2</p>

<p>def spacing(x=0.0, y=0.2):</p>

<pre><code>"""Sets text spacing for a text matrix block.

The x parameter sets the letter spacing in percent.
The y parameter sets the line spacing in percent.
These percentages are based on the current font size.

"""

global XSPACING, YSPACING
XSPACING = x
YSPACING = y
</code></pre>

XNUDGE = 0.0
YNUDGE = 0.0
BNUDGE = False
NGROWTH = 1.0
NINVERT = False

def nudge(x=0.0, y=0.0, baseline=True, growth=1.0, invert=False):

<pre><code>"""Sets a horizontal and vertical nudge factor.

Nudge is an incrementor for the text spacing,
meaning that when you nudge a text block from the left,
letterspacing will increase at the right of the text block;
the harder you nudge, the more it increases:
double the defined letterspacing at the right edge for
a horizontal nudge of 1.0 (100%).

With "from the left" we mean that the center of gravity,
defined with center() is somewhere to the left of the text block.

The baseline argument specifies whether or not to ignore
a straight baseline. When set to false and nudging text vertically,
lines of text will seem to fall (or rise) the further they are
from the center of gravity.

The growth argument specifies the nudge increment factor,
as characters move farther away from the centre.
Normal is 1.0, double is 2.0, ...

"""

global XNUDGE, YNUDGE, BNUDGE, NGROWTH, NINVERT
XNUDGE = x
YNUDGE = y
BNUDGE = not baseline
NGROWTH = growth
NINVERT = invert
</code></pre>

XSHIVER = 0.0
YSHIVER = 0.0
BSHIVER = True

def shiver(x=0.0, y=0.0, baseline=False):

<pre><code>"""Shivers individual characters.

A horizontal shiver of 1.0 adds or subtracts
a random number to the character's position
of up to the character's width.

In the same way,
a vertical shiver of 0.5 would add or subtract
a random number to the character's position from the baseline
of up to half the font size (fontsize * 0.5).

Setting the baseline to False creates wobbly text,
where each character starts of at the height of the previous
character instead of at the baseline.

"""

global XSHIVER, YSHIVER, BSHIVER
XSHIVER = x
YSHIVER = y
BSHIVER = not baseline
</code></pre>

XCENTER = 0.0
YCENTER = 0.0

def center(x=0.0, y=0.0):

<pre><code>"""Defines a center of gravity for a text block.

This powerful feature defines a point from which to nudge text. 
At the top left, characters' letterspacing and shiver will increase as
they are further to the right, and linespacing increases line
after line.

The gravity point is set relative: 
x=0.5 means halfway along the text width.

Nudging from the center of a text block, characters near the
edge have a bigger letterspacing and bigger shiver, and
the top lines and bottom lines have bigger linespacing and shiver.

"""

global XCENTER, YCENTER
XCENTER = x
YCENTER = y
</code></pre>

XTRESHOLD = 0.0
YTRESHOLD = 0.0
def treshold(x=0.0, y=0.0):

<pre><code>pass
</code></pre>

GRADIENT_FROM = color(0)
GRADIENT_TO = color(0)
def gradient(fr=color(0), to=color(0)):

<pre><code>global GRADIENT_FROM, GRADIENT_TO
GRADIENT_FROM = fr
GRADIENT_TO = to
</code></pre>

def matrix(word, x=0.0, y=0.0, w=None, h=None):

<pre><code>#Keep the position of each character
#in a word matrix of (character, dx, dy).

matrix = []
dx = 0
dy = 0

#We need a text width and height to work with,
#so if none is assigned, use the width of this word,
#which will yield approximate results.

if w == None: w = textwidth(word)
if h == None: h = w

#Imagine a letterspacing being nudged.
#We would expect the characters in the word
#to grow farther and farther apart.
#But when the center of gravity in a text block
#would be to the right of this word in the text,
#we would actually want the characters to come closer and closer
#as they near the center.
#The dh is the relative distance from the center,
#for the current character, depending on the text block width.

#Example:
#If you define a letterspacing of 0.1 on a 15pt font,
#1.5pt is added between characters.
#On a 200pt wide line with a gravity point at 0pt,
#the spacing of a character at position 200pt
#should be equal to letterspacing + (letterspacing * nudge),
#e.g. 3pt for a 1.0 (100%) nudge.

dh = (x - XCENTER*h) / (h + 0.00000001)
dv = (y - YCENTER*w) / (h + 0.00000001)

#Time to position each character in the word!

for char in word:

    #When an inverse nudge is defined,
    #swap the dh.

    if NINVERT: dh = abs(dh)

    #Apply letterspacing.
    #If a nudge is defined, letterspacing increases per character
    #when the word is to the right of the gravity center,
    #or decreases when to the left.

    dx += XSPACING * _ctx.fontsize
    dx += XSPACING * _ctx.fontsize * abs(dh) * XNUDGE * NGROWTH

    #Apply shivers to characters.
    #This means adding or subtracting an individual letterspacing,
    #up to the character width multiplied by x-shiver.
    #Shivers grow worse (or less) with nudging.

    dx += XSHIVER * textwidth(char) * random(-1.0, 1.0)
    dx += XSHIVER * textwidth(char) * random(-1.0, 1.0) * abs(dh) * XNUDGE * NGROWTH

    #When the baseline argument of shiver() is set to False,
    #don't reposition this character at the baseline,
    #but continue from the previous character's position.
    if not BSHIVER:
        dy = 0

    #Apply nudging to the baseline.
    #If the baseline argument of nudge() is set to False,
    #the baseline is ignored, in which the separate characters
    #in a word can be nugded up and down stairway-like.

    if BNUDGE:
        #dy += YSPACING * _ctx.fontsize * abs(dh) * NGROWTH
        dy += YSPACING * _ctx.fontsize * abs(dh) * dv * NGROWTH

    #Apply shivers to characters.
    #This means moving a character up and down the baseline,
    #up to the font size multiplied by y-shiver.
    #This is NOT disabled when the baseline argument of nudge() is True,
    #because a straight baseline is actually retained;
    #the characters are simply shivering.
    #Shivers grow worse (or less) with nudging.

    dy += YSHIVER* _ctx.fontsize * random(-1.0, 1.0) * abs(dh) * YNUDGE * NGROWTH

    #Append this character and its position to the matrix.

    matrix.append((char, dx, dy))

    #Move to the next character.
    #Move to the next column.

    dh = (x + dx - XCENTER*w) / (w + 0.00000001)

return matrix
</code></pre>

def block(string, x, y, w, debug=False, callback=None):

<pre><code>#Split the given string in words,
#which we can pass to characters() to retrieve
#position matrices.

words = string.split(" ")

dx = x
dy = y

#Guess the height of this text block.
#Pretty lame at the moment.

h = textheight(string, w) * 3

#In debug mode,
#display the center of gravity.

if debug:
    a = _ctx.fillcolor.a
    _ctx.fillcolor.a = 0.5
    oval(XCENTER*w+x-ow/2, YCENTER*h+y-oh/2, ow, oh)
    _ctx.fillcolor.a = a

#Time to position each word!

i = 0
while i &lt; len(words):

    if callback != None: callback(words[i])

    #Construct a matrix of the current word.
    #The height passed to the matrix is an arbitrary value,
    #we can only guess the actual height of a text block
    #until it has actually been drawn.

    m = matrix(words[i]+" ", dx, dy, w, h)

    #Retrieve the next character and its position, 
    #until the position of that character in the text block
    #exceeds the text block width.

    for j in range(len(m)):

        char, charx, chary = m[j]
        if dx - charx &gt; w - textwidth(char): break

    #If this word exceeds the text width, two things can happen.
    #There is only this word on the line, so it is chopped in pieces:
    #whatever fits this line is drawn on this line, 
    #the tail moves to the next line.

    #Or, if this is not the first word on the line,
    #move it to the next line.

    if j = len(m)-1:

        if dx == x:

            #Move the word tail to the next line.
            #This means inserting the tail as the next word
            #in the list of words to draw.

            tail = ""
            for char, charx, chary in m[j:]: tail += char
            words.insert(i+1, tail.strip(" "))

            #Draw whatever of this word fits
            #on this line.

            for char, charx, chary in m[:j]:
                text(char, dx+charx, dy+chary)

        else:

            #Move the word to the next line,
            #by inserting it as the next word to process, and...

            words.insert(i+1, words[i])

        #...moving to the next line,
        #The horizontal position moves to the left.

        dx = x

        #To calculate the vertical position of a line of text,
        #we need to take into account linespacing, nudging,
        #and as a consequence the gravity center as well.
        #The dv variable describes the line's relative offset
        #from the center, by which we can calculate nudging.
        #See comments on matrix() for more information.

        dv = (dy - YCENTER*h) / (h + 0.00000001)
        print dv
        if NINVERT: 
            dv = 1-abs(dv)
        dy += (1+YSPACING) * _ctx.fontsize
        dy += YSPACING * _ctx.fontsize * abs(dv) * YNUDGE * NGROWTH

    else:

        #The word fits the current line,
        #draw it, and advance to the next word.

        for char, charx, chary in m[:j+1]:
            ch(char)
            text(char, dx+charx, dy+chary)

        dx += charx + textwidth(char)

    i += 1
</code></pre>

spacing(0.0, -0.2)
nudge(0.0, 0.0, baseline=False, growth=8.0, invert=False)
shiver(0.0, 0.0, baseline=False)
center(1.0, 0.0)

dx = 10
dy = 50
w = 100


t  = "A text matrix is a normal paragraph text with a center of gravity. "
t += "Text in a matrix has a habit to move away from this center, "
t += "or to be drawn to this center. "
<h1>t += "The adhesive force can be made organic, or rigid, random, flowing, breaking, whatever. "</h1>

<h1>t += "Although the text matrix still contains some complex bugs, "</h1>

<h1>t += "it already yields interesting results, stuff you simply can't do anywhere else."</h1>

def ch(c):

<pre><code>#reset()
f = ("Disturbance", "Dolly-Roman", "Helvetica", "Times", "ConduitITC-Medium", "Courier")
font(choice(f)) 
fontsize(random(10,25))
#rotate(15)
</code></pre>

def word(w):

<pre><code>#if w == "matrix":
#    fontsize(20)
#    fill(1,0,0)
#else:
#    fill(1)
#    _ctx.fontsize = random(20)
f = ("Disturbance", "Dolly-Roman", "Times", "Courier")
font(choice(f))
#fontsize(random(18,32))
#_ctx.fontsize -= 1

if w == "text":
    fill(1,0,0)
else:
    fill(0,0,0)
</code></pre>

<h1>fill(0, 1, 1)</h1>

<h1>rect(0,0,WIDTH,HEIGHT)</h1>

<h1>fill(1,1,1)</h1>

block(t, dx, dy, w, debug=False, callback=word)
</pre>
