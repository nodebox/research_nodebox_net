---
layout: page
---
<h1>PyBox: direct visual interface into connecting python functions</h1>

<p>The idea: connect python functions that "do something" to other python functions. </p>

<p>Results of a function can be put into another function.</p>

<p>Functions are connected using <em>connections</em> that cache the data and know which parts need refreshing.</p>

<p>A <em>node</em> is a representation of the function, containing a link to the function and a display of all its parameters. Note that the function reference is just another parameter, but one that refreshes all other parameters.</p>

<p>Type-checking can be done automatically, once enough data is known about the parameter type. (This might be done using Python 2.4 decorators)</p>

<p>PyBox is an API for creating these networks of nodes. It is not a visual IDE for editing it. It needs to be a very strong API.</p>

<h2>Example: creating a node network</h2>

<p>Here is how to create a moderately complex network:</p>

<pre>
c = node(path.circle)
c.x = 50
c.y = 50
c.r = 80

cp = node(path.copy)
cp.path = c # The input of one node is the output of the other.
cp.copies = 5
cp.tx = 5

r = node(path.rect)
r.x = 100
r.y = 10
r.width = r.height = 80

m = node(path.merge)
m.paths = (c, r) # The input of one node can sometimes be a tuple (multi-input).

rd = node(path.render)
rd.path = m
rd.fname = "test.svg"

eval(rd) # Two possible ways of evaluating the network.
rd.do()
</pre>

<h2>Example: merge node</h2>

<p>Here is the code for the merge node:</p>

<pre>
def merge(paths):
    path = BezierPath()
    for p in paths:
        path.extend(p)
    return path
</pre>

<h1>Interfaces</h1>

<p>Creating interfaces for the nodes should be as straightforward as the nodes itself. To make this code easier, we provide manipulators and tools.</p>

<h2>Manipulators</h2>

<p>A manipulator is an object that takes care of all the mouseup-mousedown stuff. All you have to do is to indicate where to draw it, and what to do when it is dragged. It can be fully customized.</p>

<p>Here is the full code for an interface for a rectangle node:</p>

<pre>
import nodebox.ui as ui

class RectInterface:
    # The manipulator defines:
    # - Where its handle should be (x and y coordinates, given as strings so they can be re-evaluated)
    # - How big the handles should be (either just size or width/height coordinate)
    # - What should happen when the value changes (function parameter)
    # - Whether to draw the manipulator. This can be True (default), false (don't draw), or a custom function
    #    that takes a GraphicsContext, x, y, rx and ry. x and y are center coordinates.
    manipulator("x", "y", rect_topleft)
    manipulator("x+width", "y", rect_topright)
    manipulator("x+width", "y+height", rect_botright)
    manipulator("x", "y+height", rect_botleft)
    manipulator("x-width/2", "y-height/2", "width", "height", rect_center, draw=False)

    def rect_topleft(node, px, py, x, y):
        node.x = x
        node.width -= x - px
        node.y = y
        node.height -= y - py
    def rect_topright(node, px, py, x, y):
        node.width += x - px
        node.y = y
        node.height -= y - py
    def rect_botright(node, px, py, x, y):
        if ui.SHIFT_DOWN:
            dx  = x - px
            dy = y - py
            d = max(dx, dy)
            node.width += x - px
            node.height += y - py
        else:
            node.width += x - px
            node.height += y - py
    def rect_botleft(node, px, py, x, y):
        node.x = x
        node.width -= x - px
        node.height += y - py
    def rect_center(node, px, py, x, y):
        node.x += x - px
        node.y += y - py
</pre>

<p>Whenever a user drags a manipulator, the corresponding function is called (it is also called when the user is dragging and holds or releases a modifier key). The function receives the node to work on, the previous x and y position, and the new (current) x and y position. The previous positions are actually the ones at the beginning of the drag. (When the mouse was down). The node object will be equal to the node object when the drag started, and not to your manipulated node object. </p>

<p>You can access the state of certain keys to detect whether modifier keys are pressed. In this example, we constrain proportions when the shift key is down.</p>

<p>To move the rectangle, you can click anywhere on the rectangle and drag it. By setting the width and height of the manipulator to the width and height of the rectangle, the rectangle became one big handle. Setting draw to false makes sure that we can see the rectangle, and not the manipulator.</p>

<h2>Tools</h2>

<p>A tool is something that generates new content, or edits existing content. Tools don't have a node to work with, and have to find out for themselves if the user wanted to select a node, or create new content.</p>
