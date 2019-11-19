---
layout: page
---
<pre>
from DrawingPrimitives import *

def map(xml, x, y, w, h, radius=100, growth=1.5, handwritten=False):

    """Draws a network from an xml of relations.

    The xml has the following form:
    <xml>
    <rel a="from" b="to" />
    <rel a="from" b="to" />
    <rel a="from" b="to" weight="3" />
    ...
    </xml>

    If the supplied xml does not have a <xml></xml> wrapper, adds it.
    This is useful because then you can add <rel> tags from different
    sources, supply them to map() which will consider it to be 
    a single network.

    The size of a node varies according to the number of relations:
    it "swells" as it connects to more nodes.
    This can be influenced with the weight attribute as well.

    The radius parameter controls the distance between nodes.
    A small radius (like 20) often points out the main themes in a network.
    The growth parameter the size increment of each node,
    #according to their number of related nodes.
    The handwritten parameter decides whether to use handwriting or serif.

    """

    #Add <xml></xml> wrapper when missing.

    if xml.find("<xml>") == -1:
        xml = "<xml>" + xml + "</xml>"

    #Parse the xml to a relations list
    #of (key,value) tuples.

    from xml.dom import minidom
    xml = minidom.parseString(xml)
    relations = []
    for element in xml.documentElement.getElementsByTagName("rel"):
        a = element.attributes["a"].value
        b = element.attributes["b"].value
        a = a.encode("utf-8")
        b = b.encode("utf-8")

        relations.append((a,b))
        try: weight =  int(element.attributes["weight"].value)
        except: weight = 1
        for i in range(weight-1):
            relations.append((a,a))

    #Parse the relations into a dictionary of nodes.
    #Each node has an x, y and nodes key.
    #The nodes key references a list of node names related to this one.
    #The dictionary of nodes is indexed by unique node names.
    #These can be retrieved from the keys list
    #(use instead of nodes.keys(), as this list returns the keys unsorted).

    nodes = {}
    keys = []
    for key, value in relations:

        if not value in nodes.keys(): 
            nodes[value] = {"x":0, "y":0, "nodes":[]}

        nodes[key]["nodes"].append(value)

        if key not in keys: keys.append(key)
        if value not in keys: keys.append(value)

    #Some guessing:
    #the first element in the nodes dictionary,
    #and thus the first that was added to the network,
    #is probably the network root.
    #Draw it in the center of the network.

    nodes[keys[0]]["x"] = x+w/2
    nodes[keys[0]]["y"] = y+h/2

    if handwritten:
        import pixie
        pixie.keywords(keys[0])

    #Assign x and y positions to each node.
    #This is done after the construction of the nodes dictionary,
    #because this way a node's leaves can be assigned a position
    #somewhere near the node itself, which makes for a coherent network.
    #The distance between nodes is controlled by the radius parameter.

    for key in keys:

        if nodes[key]["x"] == 0:
            nodes[key]["x"] = x+random(h)
            nodes[key]["y"] = y+random(w)

        for n in nodes[key]["nodes"]:
            if nodes[n]["x"] <> x+w/2: #Don't rearrange the central node
                nodes[n]["x"] = nodes[key]["x"] + random(-radius, radius)
                nodes[n]["y"] = nodes[key]["y"] + random(-radius, radius)        

    #Draw the entire network (optionally using Pixie handwriting),
    #using the growth factor.
    #Network nodes grow larger according to the number of leaves they have,
    #multiplied by the growth.

    nw0 = _ctx.fontsize

    for key in keys:

        node = nodes[key]
        x = node["x"]
        y = node["y"]

        #The nw defines the width of this node.
        #The node width is influenced by growth.

        nw = nw0 + len(node["nodes"])*growth
        a = 1 - max(0.25, min(0.5, a))

        for n in node["nodes"]:

            dx = nodes[n]["x"]
            dy = nodes[n]["y"]

            #Switches to handwriting.
            #The pixie module is required for this.
            #You can play around with the parameters below
            #for different visual effects.

            if handwritten:
                pixie.line(x,y,dx,dy)
            else:
                stroke(0,0,0,a)
                strokewidth(0.5)        
                line(x, y, dx, dy)

        if handwritten:
            pixie.node(x,y, min(nw*0.8,30))
            pixie.paragraph(key, x+random(nw0), y, nw*100, pt=min(nw*0.75,30))
        else:
            fill(1)
            strokewidth(max(0.75, nw*0.1))
            oval(x-nw/2, y-nw/2, nw, nw)
            fill(0,0,0,a)
            fontsize(nw)
            print nw*0.75
            text(key, x+random(nw0), y, nw*20)

def download(url, x, y, w, h, radius=100, growth=1.5, handwritten=False):

    """Downloads and draws a network created with network.php

    The network.php input module generates network xml,
    but without the <xml></xml> wrapper.
    This keeps the code in network.php very basic.

    """

    from urllib import urlopen
    xml = urlopen(url).read()
    map(xml, x, y, w, h, radius, growth, handwritten)

</pre>
