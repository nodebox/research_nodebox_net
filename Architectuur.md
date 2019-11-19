---
layout: page
---
<h1>Architecture</h1>

<p>The NodeBox 3 architecture is based around the <em>scene graph</em>: a canvas containing all elements that are on the scene. You create this graph by creating and manipulating nodes. Once the scene graph is created, you can export it to a range of formats.</p>

<p><br /></p>

<p><span class="media"><img src="/static/media/network-overview.gif" width="476" height="293" alt="" /></span>
</p>

<p><br /></p>

<hr />

<h1>Nodes</h1>

<p>Nodes are a pretty vague concept, because they can mean anything. Basically, we define a node as a functional unit that optionally takes some input, does some processing, and provides output. The output is always in the form of a scene graph (internally called the Canvas).</p>

<p>Conceptually, nodes that don't take any input are called <em>generator</em> nodes. Nodes that take input, process it, and output new data are called <em>filter</em> nodes.</p>

<hr />

<h2>Generator nodes</h2>

<p>Some basic generator nodes are the Rect, Oval and Text node. They don't take their input from another node, but rather from their internal parameters (which you can manipulate) such as the X and Y positions. Their output will be a new Canvas with a rectangle on it. </p>

<p>Note that there is a clear distinction between a node that generates a rectangle, and the actual rectangle itself. The node is something that does the processing and returns the actual rectangle, with all its parameters set. The node itself is not a rectangle: it is a processing unit that makes one.</p>

<hr />

<h2>Filter nodes</h2>

<p>Filter nodes have one or multiple inputs. They get some or all data from their inputs, do something with it, and return it back.</p>

<p>A good example is the Wiggle node. Once processed, it gets all paths on the input canvas (leaving the rest of the elements untouched) and applies a point filter to them, so that each point is on a slightly different spot.</p>

<p><br />
<span class="media"><img src="/static/media/architecture-wiggle.gif" width="500" height="240" alt="" /></span>

<br /><font size=-2><em>wiggle node in action</em></font>
<br /></p>

<hr />

<h2>Scripting</h2>

<p>The Python node is just like any other nodes, except that you can define whether it will be a scripting or generator node. In fact, you define the inputs and parameters of this node in the script node itself. Just like all other nodes, its task is to (optionally) take some input, process it, and return a new canvas.</p>

<hr />

<h2>Inputs</h2>

<p>A filter node has a predefined set of inputs. For example, the wiggle node we discussed has one input (appropriately called "in") that serves as the source canvas. While processing, the node clones the input canvas, does something with it and sets the out canvas.</p>

<p><em>Multi-inputs</em> are special inputs that are actually lists of inputs. An example of a node that uses a multi-input is the Merge node, which merges the output of many nodes together into one canvas.</p>

<hr />

<h2>Parameters</h2>

<p>Parameters are properties you can set on the node to influence its function. The text node, for example, has inputs for X and Y (to position the text), the text itself, a font and fontsize parameter, and so on. Parameters themselves have the following meta-data:</p>

<ul>
<li>A short name, used in scripts</li>
<li>A more descriptive name, shown to the user</li>
<li>A description about what this parameter does</li>
<li>A type indicating whether it is a number, text, color.</li>
<li>A default value</li>
<li>A minimum and maximum value for the parameter</li>
</ul>

<hr />

<h2>Types</h2>

<p>Each parameter has a type that indicates what kind of  data can be contained in the parameter. This is important so that users don't input text where there should be numbers. </p>

<p>NodeBox infers the user interface element from the type. For example, a numeric type will show the number-drag widget, a text type will show a text input box, and a color type will show the color chooser.</p>

<p>The valid types are:</p>

<ul>
<li>Integer numbers</li>
<li>Floating-point numbers</li>
<li>Booleans</li>
<li>Strings</li>
<li>Colors</li>
</ul>

<hr />

<h1>Node Networks</h1>

<p>Imagine you built a great set of nodes, that collectively create this really great filter. You can input any kind of text, and out comes a nice-looking composition. Now imagine that you want other people to play with your node: they should be able to input some text, set some parameters, and get their own composition. Basically, you want to create your own node. Oh, and you want to make sure that they edit the right parameters (such as the text, and maybe a few more here and there).</p>

<p>NodeBox allows you to package your nodes into a <em>network</em>. A network is a collection of nodes, where you can specify what the inputs, parameters, and output will be.</p>

<hr />

<h2>Inlets en outlets</h2>

<p>Het principe van een node-netwerk is dat elke node in zich ook een netwerk verbergd, tot op een zeker elementair niveau. Dat wil zeggen dat zo'n netwerk-binnen-een-netwerk data moet binnenkrijgen van buitenaf, van buiten z'n eigen systeem. Dit wordt opgelost via inlets en outlets: kleine blokjes die enkel een type en een naam hebben. Je kan inlets en outlets verbinden aan respectievelijk de invoer- en uitvoer-parameters van nodes binnen je netwerk. Je kan een inlet aan zoveel parameters verbinden als je wil; een outlet kan echter maar één verbinding hebben.</p>

<p>Inlets en outlets zijn de invoer- en uitvoer-bolletjes die je ziet aan een node.</p>

<hr />

<h2>De script-node</h2>

<p>Wanneer nodes niet voldoende zijn, kan je de script-node gebruiken om bepaalde bewerkingen te doen. Script-nodes hebben de volgende eigenschappen:</p>

<ul>
<li>Een taal waarin het script geschreven is. Op het ogenblik is dit Python.</li>
<li>Een lijst van in- en uitvoer parameters. Die zijn vergelijkbaar met de inlets en outlets van een node netwerk, en bepalen over welke data het script beschikt, en wat er uit het netwerk zal komen.</li>
</ul>

<hr />

<h2>Expressies</h2>

<p>Het is niet steeds nodig van een script te gebruiken. Soms kan een bepaalde parameter ook een berekening zijn van de uitvoer van een bepaalde node binnen het netwerk: in dat geval kan je een expressie schrijven.</p>

<p>Expressies zijn formules van één lijn die je kan gebruiken overal waar je normaal een nummer of string zou intypen. Je kan naar andere parameters van nodes in het netwerk verwijzen door een pad te gebruiken, net zoals een file path. De structuur is als volgt:</p>

<p><code><font color="red"><naam van de node></font><font color="blue">/</font><font color="red"><naam van de parameter></font></code></p>

<p>Hier is een voorbeeld van zo'n expressie. Deze wordt gebruikt om de breedte van een cirkel steeds het dubbel te maken van de breedte van een bepaalde ovaal.</p>

<p><code><font color="red">oval1</font><font color="blue">/</font><font color="red">width</font> * 2</code></p>

<p>Je kan ook naar nodes buiten je netwerk verwijzen door absolute paden te gebruiken.</p>

<hr />

<h1>Operations</h1>

<p>Operaties zijn onderverdeeld in classes. Over het algemeen zijn ze als volgt vergelijken:</p>

<ul>
<li>IMOPs (Imaging Operations): Adobe Photoshop</li>
<li>VOPs (Vector Operations): Adobe Illustrator</li>
<li>COPs (Compositing Operations): Adobe Indesign</li>
</ul>

<hr />

<h2>IMOPs</h2>

<p>Image operations behandelen het laden en opslaan van beelden en alle soorten bewerkingen erop. </p>

<p>Image operations werken nauw samen met de <a href="http://java.sun.com/products/java-media/jai/">Java Advanced Imaging</a> technologie, die native implementaties heeft voor diverse routines en bijgevolg heel snel werkt. </p>

<p>Op mac heb je hiervoor de <a href="http://www.apple.com/downloads/macosx/apple/java3dandjavaadvancedimagingupdate.html">JAI Update</a> van Apple nodig, die niet standaard geïnstalleerd is. De Windows- en Unixversies vind je op de <a href="http://java.sun.com/products/java-media/jai/downloads/download-1_1_2.html">JAI Download pagina</a>.</p>

<hr />

<h2>VOPs</h2>

<p>Nog geen library gevonden. Werkt samen met java.awt.geom.GeneralPath .</p>

<hr />

<h2>COPs</h2>

<p>Het uiteindelijk samenstellen van beelden gebeurd op een java.awt.Graphics2D context. Hiermee kunnen we ook, via <a href="http://www.lowagie.com/iText/">iText</a>, PDFs exporteren.</p>

<hr />

<h1>Graphing</h1>

<p>The whole system is built around a Directed Acyclic Graph. We use <a href="http://www.cs.umd.edu/hcil/piccolo/">Piccolo</a> to visualise these structures.</p>

<hr />

<h1>File Format</h1>

<p><a href="File_Format">File Format</a></p>

<hr />

<h1>Scene Graph</h1>

<hr />

<h1>Plugins</h1>

<p>NodeBox features a robust plugin structure that incorporates versioning. Different versions of plugins can be used simultaneously depending on the versioning requirements of the requesting node. </p>

<p>The architecture is modelled after the <a href="http://docs.rubygems.org/">RubyGems</a> model. Each plugin has a specification file (called the <em>gemspec</em> in RubyGems) that configures the metadata for the plugin. These are:</p>

<p><strong>Important ones</strong></p>

<ul>
<li><em>name</em>: The name of the plugin</li>
<li><em>version</em>: The version of this plugin</li>
<li><em>platform</em>: The target platform. Since we are using Java/Python code, plugins should generally be cross-platform. However, some plugins can contain binary code for a specific setup ("binary plugins"), in which the case the target platform should be set.</li>
<li><em>files</em>: The list of files in this plugin</li>
<li><em>required_nodebox_version</em>: The version of NodeBox required to host this plugin. Note that you can use the <em>versioning syntax</em> described below
<ul>
<li><em>required_plugins</em>: A list of other required plugins and their versions</li>
</ul></li>
</ul>

<p><strong>Additional ones</strong></p>

<ul>
<li><em>author</em>: Author of the project</li>
<li><em>homepage</em>: URL of the project</li>
<li><em>summary</em>: A short description of this plugin</li>
<li><em>date</em>: The datet/time this plugin was created</li>
</ul>

<hr />

<h2>Plugin versioning</h2>

<p>When nodes are using certain plugins, it is important that they specify which version of the plugin to use. Generally, they don't target a specific version, but a version that is known to work, presuming that all future versions of the plugin will work as well. This can be defined in the versioning syntax.</p>

<p>For example, suppose you have the following releases …</p>

<ul>
<li>Version 2.1.0: Baseline</li>
<li>Version 2.2.0: Introduced some new (backward compatible) features.</li>
<li>Version 2.2.1: Removed some bugs</li>
<li>Version 2.2.2: Streamlined your code</li>
<li>Version 2.3.0: More new features (but still backwards compatible).</li>
<li>Version 3.0.0: Reworked the interface. Code written to verion 2.x <em>might</em> not work.</li>
</ul>

<p>Your clients have validated that version 2.2.0 works with their nodes, but version 2.1.0 doesn't have a feature they need. You would specify the require line as follows:</p>

<pre>require_gem 'library', '>=2.2.0'</pre>

<p>This is an <em>optimistic</em> version constraint. The client assumes here that changes introduced in version 3.0 will not break compatibility with the 2.0 API. There is no assurance that this is going to be the case, but they are willing to take a guess.</p>

<p>Other clients of your plugins are not so optimistic. They expect that new versions of the plugin will break their nodes, so they want to guard against accidentaly using the new plugins. They can use a <em>pessimistic</em> version constraint to explicity exclude version 3.0 from there requirements.</p>

<pre>require_gem 'library', '>=2.2.0', '<3.0'</pre>

<p>However, you can also use the specific operator <code>~></code> (read: approximately greater than):</p>

<pre>require_gem 'library', '~>2.2'</pre>

<p>Here, the version number is specified with two digits. This line means we can use the plugin starting from version 2.2.0 all the way up until 2.9.9, but not 3.0 (so we drop the last specified digit and increment that all the way up).</p>
