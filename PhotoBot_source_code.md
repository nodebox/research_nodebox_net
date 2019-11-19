---
layout: page
---
<p>from pyimaging.PIL import Image, ImageChops, ImageFilter, ImageEnhance, ImageOps, ImageDraw</p>

<p>NEAREST = Image.NEAREST
BICUBIC = Image.BICUBIC
BILINEAR = Image.BILINEAR
INTERPOLATION = BILINEAR</p>

<p>LAYERS = []
FLATTENED = None</p>

<p>NORMAL = "normal"
MULTIPLY = "multiply"
SCREEN = "screen"
OVERLAY = "overlay"
HUE = "hue"</p>

<p>HORIZONTAL = "horizontal"
VERTICAL = "vertical"</p>

<p>LINEAR = "linear"
RADIAL = "radial"
DIAMOND = "diamond"</p>

<p>class Layer:</p>

<pre><code>def __init__(self, img, x=0, y=0):

    self.img = img
    self.x = x
    self.y = y
    self.w = img.size[0]
    self.h = img.size[1]
    self.opacity = 1.0
    self.blend = NORMAL
</code></pre>

def canvas(w, h):

<pre><code>"""Creates a new canvas.

Creates the working area on which to blend layers.
The canvas background is transparent,
but a background color could be set using the fill() function.
Any previous canvas is discarded.

"""

global LAYERS, FLATTENED
img = Image.new("RGBA", (w,h), (255,255,255,0))
LAYERS = [Layer(img, 0, 0)]
FLATTENED = None
</code></pre>

def layer(file, x=0, y=0):

<pre><code>"""Creates a new layer from file.

Creates a new layer with the given image file.
The image is positioned on the canvas at x, y.
Layer manipulation commands like opacity() and multiply()
influence the last defined layer.

"""

global LAYERS
img = Image.open(file)
img = img.convert("RGBA")
LAYERS.append(Layer(img, x, y))
</code></pre>

def fill(rgb, x=0, y=0, w=None, h=None):

<pre><code>"""Creates a new fill layer.

Creates a new layer filled with the given rgb color.
For example, fill((255,0,0)) creates a red fill.
The layers fills the entire canvas by default.

""" 

global LAYERS
if w == None: w = LAYERS[0].w - x
if h == None: h = LAYERS[0].h - y
img = Image.new("RGBA", (w,h), rgb)
LAYERS.append(Layer(img, x, y))
</code></pre>

def bounds():

<pre><code>"""Returns the size of the current layer.

This is the width and height of the bounding box,
the invisible rectangle around the layer.

"""

global LAYERS
return LAYERS[-1].img.size
</code></pre>

def select(path):

<pre><code>"""Applies the polygonal lasso tool on a layer.

The path paramater is a list of points,
either [x1, y1, x2, y2, x3, y3, ...]
or [(x1,y1), (x2,y2), (x3,y3), ...]

The parts of the layer that fall outside
this polygonal area are cut.

"""

global LAYERS
layer = LAYERS[-1]

w, h = layer.img.size
mask = Image.new("L", (w,h), 0)
draw = ImageDraw.Draw(mask)
draw.polygon(path, fill=255)

mask = ImageChops.darker(mask, layer.img.split()[3])
layer.img.putalpha(mask)
</code></pre>

def gradient(style=LINEAR, w=1.0, h=1.0):

<pre><code>"""Creates a gradient layer.

Creates a gradient layer, that is usually used
together with the mask() function.

All the image functions work on gradients,
so they can easily be flipped, rotated, scaled, inverted,
made brighter or darker, ...

Styles for gradients are
LINEAR, RADIAL and DIAMOND.

"""

global LAYERS

from types import FloatType
w0, h0 = LAYERS[0].img.size
if type(w) == FloatType: w *= w0
if type(h) == FloatType: h *= h0

img = Image.new("L", (w,h), 255)
draw = ImageDraw.Draw(img)

if style == LINEAR:
    for i in range(int(w)):
        draw.rectangle((i, 0, i, h), fill=int(k))

if style == RADIAL:
    r = min(w,h)/2
    for i in range(int(r)):
        draw.ellipse((w/2-r+i, h/2-r+i, w/2+r-i, h/2+r-i), fill=int(k))

if style == DIAMOND:
    r = max(w,h)
    for i in range(int(r)):
        draw.rectangle((x, y, w-x, h-y), outline=int(k))

img = img.convert("RGBA")
LAYERS.append(Layer(img, 0, 0))
</code></pre>

def mask():

<pre><code>"""Masks the previous layer with this layer.

Commits the current layer to the alpha channel of 
the previous layer. Primarily, mask() is useful when 
using gradient layers as masks on images below. 

For example:
layer("image.jpg")
gradient()
flip()
mask()

Adds a white-to-black linear gradient to
the alpha channel of image.jpg, 
making it evolve from opaque on 
the left to transparent on the right.

"""

global LAYERS    
if len(LAYERS) &lt; 2: return
mask = LAYERS[-1]
layer = LAYERS[-2]

alpha = mask.img.split()[3]
mask = mask.img.convert("L")
mask.save("testmask.png")
mask = ImageChops.darker(mask, alpha)

mask = ImageChops.darker(mask, layer.img.split()[3])
layer.img.putalpha(mask)

del LAYERS[-1]
</code></pre>

def duplicate():

<pre><code>"""Creates a copy of the current layer.

This copy then becomes the current layer,
so all subsequent actions are applied to
the duplicate.

"""

global LAYERS
layer = LAYERS[-1]

clone = Layer(layer.img.copy(), layer.x, layer.y)
clone.opacity = layer.opacity
clone.blend = layer.blend
LAYERS.append(clone)
</code></pre>

def opacity(a=100):

<pre><code>global LAYERS
LAYERS[-1].opacity = a * 0.01
</code></pre>

def multiply():

<pre><code>global LAYERS
LAYERS[-1].blend = MULTIPLY
</code></pre>

def screen():

<pre><code>global LAYERS
LAYERS[-1].blend = SCREEN
</code></pre>

def overlay():

<pre><code>global LAYERS
LAYERS[len(LAYERS)-1].blend = OVERLAY
</code></pre>

def _overlay(img1, img2):

<pre><code>"""Applies the overlay blend mode.

Overlays image img2 on image img1.
The overlay pixel combines multiply and screen:
it multiplies dark pixels values and screen light values.
Returns a composite image with the alpha channel retained.

"""

p1 = list(img1.getdata())
p2 = list(img2.getdata())

for i in range(len(p1)):

    p3 = ()
    for j in range(len(p1[i])):

        a = p1[i][j] / 255.0
        b = p2[i][j] / 255.0

        #When overlaying the alpha channels,
        #take the mean of both channels.

        if j == 3:
            d = (a+b)*0.5
        elif a &gt; 0.5: 
            d = a+b
        else: 
            d = a+b         
        p3 += (int(d*255),)

    p1[i] = p3

img = Image.new("RGBA", img1.size, 255)
img.putdata(p1)
return img
</code></pre>

def hue():

<pre><code>global LAYERS
LAYERS[len(LAYERS)-1].blend = HUE
</code></pre>

def _hue(img1, img2):

<pre><code>"""Applies the hue blend mode.

Hues image img1 with image img2.
The hue filter replaces the hues of pixels in img1
with the hues of pixels in img2.
Returns a composite image with the alpha channel retained.

"""

import colorsys

p1 = list(img1.getdata())
p2 = list(img2.getdata())
for i in range(len(p1)):

    r1, g1, b1, a1 = p1[i]
    r1 = r1 / 255.0
    g1 = g1 / 255.0
    b1 = b1 / 255.0

    h1, s1, v1 = colorsys.rgb_to_hsv(r1, g1, b1)

    r2, g2, b2, a2 = p2[i]
    r2 = r2 / 255.0
    g2 = g2 / 255.0
    b2 = b2 / 255.0
    h2, s2, v2 = colorsys.rgb_to_hsv(r2, g2, b2)

    r3, g3, b3 = colorsys.hsv_to_rgb(h2, s1, v1)

    r3 = int(r3*255)
    g3 = int(g3*255)
    b3 = int(b3*255)
    p1[i] = (r3, g3, b3, a1)

img = Image.new("RGBA", img1.size, 255)
img.putdata(p1)
return img
</code></pre>

def brightness(value=1.0):

<pre><code>"""Increases or decreases the brightness in a layer.

The given value is a percentage to increase
or decrease the image brightness,
for example 0.8 means brightness at 80%.

"""

global LAYERS
layer = LAYERS[-1]     
b = ImageEnhance.Brightness(layer.img) 
layer.img = b.enhance(value)
</code></pre>

def contrast(value=1.0):

<pre><code>"""Increases or decreases the contrast in a layer.

The given value is a percentage to increase
or decrease the image contrast,
for example 1.2 means contrast at 120%.

"""

global LAYERS
layer = LAYERS[-1]
c = ImageEnhance.Contrast(layer.img) 
layer.img = c.enhance(value)
</code></pre>

def desaturate():

<pre><code>"""Desaturates a layer, making it grayscale.

Instantly removes all color information from the layer,
while maintaing its alpha channel.

"""

global LAYERS
layer = LAYERS[-1] 
alpha = layer.img.split()[3]
layer.img = layer.img.convert("L")
layer.img = layer.img.convert("RGBA")
layer.img.putalpha(alpha)
</code></pre>

def invert():

<pre><code>"""Inverts a layer.

"""

global LAYERS
layer = LAYERS[-1]
alpha = layer.img.split()[3]
layer.img = layer.img.convert("RGB")
layer.img = ImageOps.invert(layer.img)
layer.img = layer.img.convert("RGBA")
layer.img.putalpha(alpha)
</code></pre>

def translate(x, y):

<pre><code>"""Moves a layer to the given position.

The x and y parameters define where to move 
the top left corner of the layer,
measured from the top left of the canvas.

"""

global LAYERS
LAYERS[-1].x = x
LAYERS[-1].y = y
</code></pre>

def scale(w=1.0, h=1.0):

<pre><code>"""Resizes a layer to the given width and height.

When width w or height h is a floating-point number,
scales percentual, 
otherwise scales to the given size in pixels.

"""

global LAYERS
layer = LAYERS[-1]

from types import FloatType
w0, h0 = layer.img.size
if type(w) == FloatType: w *= w0
if type(h) == FloatType: h *= h0

layer.img = layer.img.resize((w,h), INTERPOLATION)
layer.w = w
layer.h = h
</code></pre>

def distort(quad):

<pre><code>global LAYERS
layer = LAYERS[-1]

layer.img = layer.img.transform(layer.img.size, Image.QUAD, quad, INTERPOLATION)
</code></pre>

def rotate(angle):

<pre><code>"""Rotates the current layer.

Rotates the current layer by given angle.
Positive numbers rotate counter-clockwise,
negative numbers rotate clockwise.

Rotate commands are executed instantly,
so many subsequent rotates will distort the image.

"""

global LAYERS
layer = LAYERS[-1]

#When a layer rotates, its corners will fall outside
#of its defined width and height.
#Thus, its bounding box needs to be expanded.

#Calculate the diagonal width, and angle from the layer center.
#This way we can use the layers's corners 
#to calculate the bounding box.

from math import sqrt, pow, sin, cos, degrees, radians, asin
w0, h0 = layer.img.size
d = sqrt(pow(w0,2) + pow(h0,2))

angle = angle % 360

w = max(w, sin(radians(d_angle - angle)) * d)
w = int(abs(w))

h = max(h, cos(radians(d_angle - angle)) * d)
h = int(abs(h))

dx = int((w-w0) / 2)
dy = int((h-h0) / 2)
d = int(d)

box = Image.new("RGBA", (d,d), (255,255,255,0))
box.paste(layer.img, ((d-w0)/2, (d-h0)/2))
box = box.rotate(angle, INTERPOLATION)
layer.img = box

#Since rotate changes the bounding box size,
#update the layers' width, height, and position,
#so it rotates from the center.

layer.x += (layer.w-w)/2
layer.y += (layer.h-h)/2
layer.w = w
layer.h = h
</code></pre>

def flip(axis=HORIZONTAL):

<pre><code>"""Flips the image, either HORIZONTAL or VERTICAL.

"""

global LAYERS
layer = LAYERS[-1]
if axis == HORIZONTAL:
    layer.img = layer.img.transpose(Image.FLIP_LEFT_RIGHT)
if axis == VERTICAL:
    layer.img = layer.img.transpose(Image.FLIP_TOP_BOTTOM)
</code></pre>

def blur():

<pre><code>"""Blurs an image.

"""

global LAYERS
layer = LAYERS[-1]
layer.img = layer.img.filter(ImageFilter.BLUR)
</code></pre>

def flatten():

<pre><code>"""Flattens all layers according to their blend modes.

Merges all layers to the canvas,
using the blend mode and opacity defined for each layer.
Once flattened, the stack of layers is emptied except
for the canvas (bottom layer).

"""

global LAYERS, FLATTENED
canvas = LAYERS[0]
for i in range(len(LAYERS[1:])):

    layer = LAYERS[i+1]

    #Determine which portion of the canvas
    #needs to be updated with the overlaying layer.

    x = max(0, layer.x)
    y = max(0, layer.y)
    w = min(canvas.w, layer.x+layer.w)
    h = min(canvas.h, layer.y+layer.h)

    base = canvas.img.crop((x, y, w, h))
    blend = layer.img.crop((x, y, w, h))

    #Buffer layer blend modes:
    #the base below is a flattened version
    #of all the layers below this one,
    #on which to merge this blended layer.

    if layer.blend == NORMAL:
        buffer = blend
    if layer.blend == MULTIPLY:
        buffer = ImageChops.multiply(base, blend)
    if layer.blend == SCREEN:
        buffer = ImageChops.screen(base, blend)
    if layer.blend == OVERLAY:
        buffer = _overlay(base, blend)
    if layer.blend == HUE:
        buffer = _hue(base, blend)

    #Buffer a merge between the base and blend
    #according to the blend's alpha channel:
    #the base shines through where the blend is less opaque.

    #Merging the first layer to the transparent canvas
    #works slightly different than the other layers.

    #The alpha channel becomes a composite of
    #this layer and the base:
    #the base's (optional) tranparent background
    #is retained in arrays where the blend layer
    #is transparent as well.

    buffer.putalpha(alpha)

    #Apply the layer's opacity,
    #merging the buffer to the base with
    #the given layer opacity.

    base = Image.blend(base, buffer, layer.opacity)

    #Merge the base to the flattened canvas.

    x = max(0, layer.x)
    y = max(0, layer.y)
    canvas.img.paste(base, (x,y))

FLATTENED = canvas.img
LAYERS = [canvas]
return FLATTENED
</code></pre>

def export(filename, extension=".png"):

<pre><code>"""Exports the flattened canvas.

When the canvas is not flattened, flattens the canvas.
Exports to PNG by default,
retaining the alpha channel information.
Other possibilities are JPEG and GIF.

"""

global FLATTENED
if FLATTENED == None: flatten()
FLATTENED.save(filename + extension)
</code></pre>

def preferences(interpolation=BILINEAR):

<pre><code>"""Settings that influence image manipulation.

Currently, only defines the image interpolation,
which can be set to NEAREST, BICUBIC or BILINEAR.

"""

global INTERPOLATION
INTERPOLATION = interpolation
</code></pre>

canvas(200, 200)
<h1>fill((0,0,0,125))</h1>

layer("motor3.png", 0, 0)
scale(200,200)
<h1>w, h = bounds()</h1>

<h1>layer("motor4.png", 0, 0)</h1>

<h1>scale(200,200)</h1>

<h1>overlay()</h1>

<h1>scale(200,200)</h1>

<h1>distort((-200,-200, w+200,-200, w+200,h+200, -200,h+200))</h1>

<h1>layer("motor3.png", 0, 0)</h1>

<h1>mask()</h1>

<h1>gradient(LINEAR)</h1>

<h1>flip()</h1>

<h1>rotate(45)</h1>

<h1>invert()</h1>

<h1>brightness(0.5)</h1>

<h1>mask()</h1>

<h1>blur()</h1>

<h1>select([0,0, 50,0, 200,200, 0,0])</h1>

<h1>scale(100,100)</h1>

<h1>brightness(1.2)</h1>

<h1>contrast(1.6)</h1>

<h1>opacity(80)</h1>

<h1>rotate(45)</h1>

<h1>translate(0,100)</h1>

<h1>desaturate()</h1>

<h1>flip()</h1>

<h1>layer("motor3.png", -450, 50)</h1>

<h1>overlay()</h1>

<h1>fill((255,0,0))</h1>

<h1>opacity(50)</h1>

<h1>hue()</h1>

<h1>duplicate()</h1>

flatten()
export("test")
image("test.png", 0, 0)
</pre>
