---
layout: page
---
<h1>Photoshop Scripting</h1>

<p>To script Photoshop (or any Mac OS X application that uses apple scripting) using Python, you need <a href="http://freespace.virgin.net/hamish.sanderson/appscript.html">appscript</a>. Appscript is a wrapper around Applescript and provides an (almost) intuitive OO-approach to scripting. You can compile it yourself, or use my <a href="http://nodebox.net/files/appscript-0.7.0-dist.tgz">precompiled package</a>. To install the precompiled package, unpack it in /Library/Python/2.3 . There should now be a couple of folders and files: <code>aem, appscript, HTMLTemplate.py and HTMLTemplate.pyc, LaunchServices, osaterminology and osax</code>.</p>

<hr />

<h1>Using it</h1>

<p><em>Very important</em>: appscript won't work with the regular command-line python, because it needs access to Mac OS X's window manager. Therefore, you should use <code>pythonw</code> instead of just <code>python</code>.</p>

<p>Once you've installed everything, try the following. Start an interactive python shell by typing <code>pythonw</code> on the command line. Then:</p>

<p><em>Import appscript</em></p>

<pre>
from appscript import app, k
</pre>

<p>(This opens Python as an application in the Dock)</p>

<p><em>Get a reference to the photoshop application</em></p>

<pre>
a = app('Adobe Photoshop CS.app')
</pre>

<p><em>Activate the application</em></p>

<pre>
a.activate()
</pre>

<p><em>Make a new document</em></p>

<pre>
doc = a.make(new=k.document, with_properties={k.width: 400, k.height: 100})
</pre>

<p><em>Open a document</em></p>

<pre>
from Carbon.File import FSSpec
a.open(FSSpec('~/Desktop/test.gif'))
doc = a.documents
</pre>

<p>FSSpec returns a reference to the file systems' file object. It's a pity you can't directly access the file object. The reference to the document is now "doc".</p>

<p><em>Make a new layer</em></p>

<pre>
newLayer = doc.make(new=k.art_layer)
</pre>

<p>Changing properties afterwards doesn't seem to work. So, I am not able to change the fill opacity once I've created the layer. Pretty annoying. </p>

<p><em>Rotate the canvas</em></p>

<pre>
a.rotate_canvas(newDocument, angle=5)
</pre>

<p><em>Change the mode</em></p>

<pre>
a.change_mode(doc, to=k.RGB)
</pre>

<p><em>Printing</em></p>

<pre>
a.print_(doc)
</pre>

<hr />

<h1>Documentation</h1>

<p>The full documentation can be found in the <a href="Photoshop_Scripting_Reference">Photoshop Scripting Reference</a>. You can compile the documentation yourself for Photshop, or any application that is apple-scriptable using the htmldoc module. Do the following:</p>

<pre>
from appscript.htmldoc import doc
doc('Adobe Photoshop CS.app', '~/Desktop/PhotoshopDoc.html')
</pre>

<p>If you compile the module yourself, you might get the following error (in version 0.7.0):</p>

<pre>
  File "/System/Library/Frameworks/Python.framework/Versions/2.3/lib/python2.3/
  site-packages/appscript/htmldoc/parser.py", line 145, in lambda
  return lambda code: typebycode.get(code) or 'AEType(%r)' % esc(code)
NameError: global name 'esc' is not defined
</pre>

<p>I don't know what this is, but I've just written an esc function that returns the given value, and it seems to work. If you're using the precompiled package, the fix is already made.</p>

<hr />

<h1>Still to find out</h1>

<ul>
<li>Using colors. I can't make a color using a.make(new=k.RGB_color), because that gives "in make new, duplicate, etc. class can't be an element of container".</li>
<li>Using a.filter(). See the FAQ.</li>
<li>Using a.fill(). This is what I have: a.fill(d.selection, with<em>contents=a.foreground</em>color) -- it returns "bad parameter data or unable to coerce the data supplied"</li>
</ul>

<hr />

<h1>Frequently Asked Questions</h1>

<p>Q: What is that strange 'k' parameter that I need to import? <br />
A: 'k' is defined in appscript.keywordwrapper and is a generic wrapper for application-specific type and enum names. This means that using k, you can access any class that the program defines. For Photoshop CS, this means the application, document, art_layer, channel, font, layer and other classes. Internally, it uses the <code><strong>getattr</strong></code> attribute to cover any possible parameter. </p>

<p>Q: Why can't I use a.filter() ? <br />
A: Apparently, appscript has this name reserved for its own use. This severly limits the usefullness of Python scripting. I'll try to find a way around this.</p>

<hr />

<h1>Troubleshooting</h1>

<p>Q: I get "RuntimeError: Can't send Apple events: no access to Window Manager." <br />
A: Python needs access to the window-manager. The regular version of Python can't provide this access, so you should use pythonw. Just type <code>pythonw</code> instead of <code>python</code> in front of your scripts.</p>

<p>Q: I get "Too many direct parameters". <br />
A: A function call can have zero or one parameters, but never more. Mostly, the first parameter is a reference to the document, selection, ... . The rest of the parameters are named, and you should look them up in the <a href="Photoshop_Scripting_Reference">Photoshop Scripting Reference</a>.</p>
