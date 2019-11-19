---
layout: page
---
<h1>NodeBox 3 Todo</h1>

<p>These are features that still need to be completed for NodeBox 3.</p>

<h1>Expressions</h1>

<p>Every parameter can have an expression value instead of a numeric or text value. </p>

<ul>
<li>Decide on and implement an expression language.</li>
<li>Integrate the expression engine in the interface (how do you switch from a regular number to an expression number?)</li>
<li>Create the expression editor interface</li>
</ul>

<h1>Scripting nodes</h1>

<p>Build a scripting node: a node that contains a script that is executed when the node is processed.</p>

<ul>
<li>Build a scripting editor (done)</li>
<li>Integrate a scripting language</li>
<li>Decide on and build the interface</li>
<li>Decide on how meta-data is represented (the script in the node vs. its parameters are on a different meta-level). The script will probably have a "setup" method that builds the interface, and a "cook" method that processes the node.</li>
</ul>

<h1>Network inlets</h1>

<p>Networks work as filters: they take input, process it, and render output. To connect the innards of the network to the outside world, we use inlets: small ports that connect to inputs on the network's nodes.</p>

<ul>
<li>Visually design inlets and their functionality</li>
<li>Create back-end code (the Inlet class)</li>
<li>Integrate them as an InletView</li>
</ul>

<h1>Node packaging</h1>

<p>Build a system for packaging up nodes. This means that collections of nodes are loosely coupled with NodeBox as versioned resources.
<a href="http://platonos.sourceforge.net/index.php?p=PluginEngine">Platonos</a> seems like a nice plugin system. <a href="http://forum.java.sun.com/thread.jspa?forumID=422&amp;threadID=457563">Read the discussion</a> by the creator.</p>

<ul>
<li>Decide on a plugin system and file structure.</li>
<li>Decide on the metadata for each node (version, category, etc.)</li>
<li>Build a loading infrastructure for these plugins</li>
<li>Update the backend so it accounts for versioned nodes, node classes that cannot be found or have the wrong version, etc.</li>
<li>Update the XML backend for saving/loading this additional data.</li>
</ul>

<h1>On-screen editors</h1>

<p>Build an infrastructure to support visual, on-screen editors for nodes. This means that each node can have a corresponding editor that takes of the GrobView when the node is selected, responding to mouseclicks and changing the parameters.</p>

<ul>
<li>Decide on a registry system so a class can register itself as editor for a specified type of node.</li>
<li>Integrate GrobView with an abstract OnScreenEditor interface so that the GrobView can pass on events .</li>
</ul>

<h1>Back-ends</h1>

<p><a href="http://matplotlib.sourceforge.net/backends.html#Agg">Matplotlib</a> has some interesting backends, most notably <a href="http://antigrain.com/">Anti-Grain Geometry</a>.</p>
