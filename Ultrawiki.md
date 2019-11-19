---
layout: page
---
<p>Ultrawiki is a modern, robust wiki written in PHP. It main characteristics is that it is fast.</p>

<p>It currently has some shortcomings. Those are detailed below. </p>

<h1>UltraWiki's new architecture</h1>

<p>When the popularity of a software package gets bigger, the requirements rise. Some of those have to do with numbers (many people editing, many pages), other have to do with security (people can't edit or view certain pages, but they can view all of the media files and even remove them). So it's time to revisit some of the core concepts of UltraWiki.</p>

<h1>Versioning</h1>

<p>Because on a wiki, people can change any page they have the rights to, they can also commit some changes that are unwanted, such as deleting large portions of text that they don't agree with. If the wiki has no change history, these changes are final. </p>

<p>Versioning is a natural way of keeping older revisions of a page, so that you never lose information. A merging system can show the differences between the versions (indicating lines that have been added, changed or removed). It's kind of a no-brainer really, and should have been in UltraWiki from day one. See the "Implementation" chapter for how we would solve this problem.</p>

<h1>Concurrency</h1>

<p>The problem is this: person A clicks the edit button on a certain page and starts to edit. In the meantime, person B also edits and then saves the same page. When person A clicks "save", all of person B's changes are overwritten as if they have never existed.</p>

<p>There are two ways to solve this problem, but they both involve locking the page.</p>

<h2>Pessimistic locking</h2>

<p>When person A starts editing the page, he locks the page first, and then unlocks it the moment he finishes the edit. This way, if person B wants to edit the page, he gets an error message saying that person A has locked the page, and that he has to wait until that person finishes editing.</p>

<p>Of course, when person A starts editing a page, then goes for a coffee, then lunch, and then -- oh look at the time -- heads home without finishing the edit, person B can wait indefinitely. </p>

<p>This approach is called pessimistic locking because you assume that whenever person A starts an edit, someone will always try to edit that same page. So you lock the page to make sure that no-one else can acces the page, even if that means that person B can wait forever. The reality is that this situation is more of an exception than a general rule, however. Why not let person B edit the page anyway and make the change, and inform person A when he finally saves that someone has changed his page, showing the changes? This brings us to optimistic locking.</p>

<h2>Optimistic locking</h2>

<p>With optimistic locking, the page is not locked as such on the server. In fact, anyone can make changes to any page. However, when they start an edit, the system remembers the version number on which they are doing their edit. When person B comes in and changes something, the version number is increased, so that when person A saves, the system detects that he was editing an older version of the page (as of now).</p>

<p>The trick in this system is to allow person A to gracefully incorporate his changes without having to redo them all. A screen that shows the differences between the older and newer version, together with the changes person A made, could help in reducing this conflict.</p>

<h1>Name clashes and hierarchical organization</h1>

<p>Once multiple people start editing, you'll note that they have different views on how things should be organized. Imagine a set of students that each have to an assignment on the topic of "space". Soon, one of the students will make a page called "Space" where he details his implementation. But what about all the other students involved in this topic? </p>

<p>Some of these problems can be solved by namespacing the pages. This can happen right now, without any changes, because it simply requires some strictness: If you just add your name in front of the Space page, such as "Bart Space" or "Wim Space", you avoid these name clashes. </p>

<p>Students don't do this by default however. Some of them just assume that no-one else will ever make a page on the topic of "Space Travel", because they taught of it first. In reality, lots of people might look towards space travel for their research, discovering that this page was already made.</p>

<p>We solve this problem in the same way your hard drive solves it: by adding directories. Now, all pages of Bart Hendrickx are in a folder called "Bart Hendrickx". The only assumption we have to make now is that there is just one "Bart Hendrickx". All of Bart's pages are stored inside of the "Bart Hendrickx" folder. This folder can have multiple subfolders as well, for example for all of his different projects.</p>

<h1>An implementation</h1>

<h2>File organization</h2>

<p>It is clear that the best way to solve this problem structurally is to change the way files are kept. The current version works like this:</p>

<pre>
data/
 +-- text/
 +-- media/
 +-- thumbs/
 +-- cache/
</pre>

<p>The new version takes the "page" as the central unit, and makes it into a folder. All of the resources for this page such as its text, but also its media elements and previous versions are kept in this folder. Child pages are subfolders in the current folder.</p>

<pre>
data/
 +-- Frederik_De_Bleser/
      +-- _meta.ini
      +-- _rev.ini
      +-- text.txt
      +-- text.1.txt
      +-- text.2.txt
      +-- head.jpg
      +-- text.html
      +-- Space/
           +-- ...
</pre>      

<p>Note:</p>

<ul>
<li>The cached version is kept in a "text.html" file, where "HTML" is the output format for this wiki. UltraWiki can have different output formats (XML, HTML), so different types of caches can be created.</li>
<li>The latest version is not numbered, but simply called "text.txt". </li>
<li>All meta-data is kept inside of the _meta.ini file. </li>
</ul>

<h2>What is versioned?</h2>

<p>Meta-data and media files are not versioned. For media files, this means that you can break a previous version by deleting on of its media files. Since access restrictions limit who can edit what page, this is a responsibility for the page maintainers.</p>

<p>Not versioning meta-data means that you can change the layout of a page, thereby changing how previous versions look. Since we assume that newer is always better, and older versions are only kept for archival purposes and to prevent malicious intent, this will not be a problem.</p>

<h2>_rev.ini example</h2>

<pre><code>  [1]
  author = fdb
  date = 2005-03-20 11:55:01
  log = Initial
  [2]
  author = tom
  date = 2005-03-21 13:45:45
  log = Corrected typo
</code></pre>

<h2>_meta.ini example</h2>

<pre><code>  [permissions]
  author = fdb
  group = teacher
  mode = 744

  [layout]
  layout = technical
</code></pre>

<h1>Ultrawiki as an object database</h1>

<p>This is an attempt to split the core functionality in Ultrawiki and divide up into several parts. This allows us not only to render wiki pages, but all kinds of content, even content that we haven't invented yet.</p>

<p>It does this by dividing the system up in a core, responsible for file management and security, and plugins that taggle the actual content. The core only knows about objects. An object has a name and a type. Based on that type, the core selects a plugin to render/edit/layout that object. Different actions are available depending on the type of object.</p>

<h1>Object types</h1>

<p>Each object has a type, which is indicated by its extension. For example, a wiki page has the .wiki extension (e.g. "welcome.wiki"). </p>

<h1>Folder structure</h1>

<p>Objects are stored as folders under the writable objects directory. Here is an example of a wiki object:</p>

<pre>
/data
  |
  |-- /welcome.wiki
         |
         +-- _metadata
         +-- content.txt
         +-- welcome.gif
</pre>

<p>The core only accesses the _metadata file, the rest is handled by the plugin.</p>

<h1>Metadata</h1>

<p>The core system has access to the objects' metadata through the _metadata file. This contains data about the object, such as who can access and edit it (permissions), how it will be displayed (layout) and so on. The plugin also has access to the metadata, and can edit and add properties. However, it should do so only through the core's API, and not by changing the file directly. Plugins are requested to provide a namespace for their settings (e.g. wiki.text2htmlconverter=markdown)</p>

<p>Here is an example of a metadata file for the welcome page:</p>

<pre>
# Core properties
core.title = Welcome!
core.creator = fdb
core.group = admin
core.mode = 777
core.layout = greenskin

# Wiki properties
wiki.markup = markdown
</pre>

<h1>Plugins</h1>

<p>The system works on the concept of plugins. Each plugin handles a certain type of object (again, given by its extension). So the WikiPlugin will handle objects of the "wiki" type, most notably by displaying their content. The plugin can gain quick access by the core to the objects' data and media folder, and has access to a cache folder. </p>

<p>The plugin works stateless, based on a couple of static methods. The core fires off events to the plugin for rendering the page. These events are:</p>

<ul>
<li><code>get_ready_to_process</code></li>
<li><code>before_read_object(object_name)</code></li>
<li><code>after_read_object(object_name, file_name, data)</code></li>
<li><code>read_file(file_name, data)</code></li>
<li><code>render(object_name, file_name, data, media_folder, cache_folder)</code>[should return data for the client]</li>
<li><code>edit(object_name, file_name, data, media_folder, cache_folder)</code> [should return edit view]</li>
</ul>

<p>Plugins inherit from the BasicPlugin class, but can also inherit from eachother, so that one plugin can post-process another plugins' output.</p>

<h1>The RenderedPage</h1>

<p>A plugins' render method returns a RenderedPage. This contains the following:</p>

<ul>
<li><code>status_code</code></li>
<li><code>page_title</code></li>
<li><code>page_content</code></li>
</ul>
