---
layout: page
---
<h1>Gravital</h1>

<p>A side-track of the research project is involved with the development of a graphic design language, based on the principle of semantic networks. In this language it would be possible to explain graphic design to a computer as if it were a five-year old.</p>

<p>Each problem in graphic design is unique. Each assignment requires that the graphic designer immerses himself or herself in the particular world of the client; be it building construction, health care, software design or grocery shopping.</p>

<p>Currently, whatever the problem is, we always fall back to the same set of tools, made with the graphic designer in mind. What if we set out to create a set of tools that were as unique as the problem? What if every assignment has its own toolbox?</p>

<p>This is what Gravital attempts. Gravital is an extensible language and platform that adapts to every problem domain. It is ideally suited for describing problems and solutions in their own language.</p>

<p>The principle of Gravital is based on Haskell and Lisp. It works as an environment in which a few basic language constructs are already available. You, as a designer, can begin inventing new concepts, relationships and entities that are needed for the problem at hand. You can even redefine existing language constructs: nothing is fixed.</p>

<p>The language focuses on the what, not on the how. You should never fall back to imperative programming logic: instead, you can build a language using a few basic mathematical rules, and a whole lot of compositions and aggregations. Language builds on language.</p>

<p>An example:</p>

<pre><code>a is-a big centered circle
b is-a red square
b is above a
</code></pre>

<p><span class="media"><img src="/static/media/gravital.gif" width="400" height="400" alt="" /></span>
</p>

<p>NodeBox generates a composition with a big circle of variable color at the center of the page, and a red square of variable size somewhere above it.</p>

<p>Of course, the current statements are open for interpretation: nowhere does it say what color the big circle should have, or what size a should have, or whether b should be directly above a. All those factors are things NodeBox will try out, to give you an idea of what is possible with the description you gave. The way he interprets the rules might result in some interesting ideas that you hadn't even thought of.</p>

<p><br /></p>

<hr />

<h1>Shallow parsing language to Gravital</h1>

<p>Even the mere theoretical existence of a Gravital poses a lot of paradoxal questions about language. Essentially, Gravital is nothing; it has no predefined set of tools to work with, tools are defined in Gravital itself; Gravital defines and expands Gravital.</p>

<p>An easy and valid example of this could be:</p>

<ul>
<li>blue is-a color(0,0,255)</li>
<li>the right color is-a prism query</li>
</ul>

<p>In both cases, we define new Gravital language constructs (<em>blue</em> and <em>right color</em>) to work with. They fall back on NodeBox commands like color() and the Prism colorfinder library which can be queried. Both things are known to NodeBox.</p>

<p>Now consider the following:</p>

<ul>
<li>a circle with the right color is at the right of the center</li>
<li>a is a circle</li>
</ul>

<p>What does <em>right</em> mean in this context? Is it a position or a justification (the question of what a justification is, is left in the middle (and left is used as in "leaving"))? What does <em>a</em> mean? <em>a</em> is <em>a</em>, or <em>a</em> is-a <em>circle</em>? The main problem here is the fuzziness in natural language... it is too complex for a solver algorithm to understand.</p>

<p>Most likely, Gravital should not be natural language at its core, but work with more concise and direct statements, like <em>is-a</em> instead of <em>is a</em> or <em>could be</em>. The latter two directives can then be handled by a shallow parser on top of Gravital, which would map it to <em>is-a</em>.</p>

<p>A shallow parser also solves the <em>right</em> problem(!). In observing the <em>a circle with the right color is at the right of the center</em>, the parser would know that <em>a circle</em> is an entity, that <em>the right color</em> is an entity with  <em>right</em> being an adjective (justification), and that <em>the right of the center</em> is an entity with <em>right</em> being a noun (position).</p>

<p>It would map the statement to:</p>

<ul>
<li>a is-a circle in right-color at-right</li>
</ul>

<p><br /></p>

<hr />

<h1>More mess and tautologies</h1>

<p>The first step of creating a Gravital is getting rid of all the mess. We want to be able to define Gravital in Gravital. This leads to a number of complex problems at the core:</p>

<ul>
<li>is-a is-a =</li>
</ul>

<p>says and means nothing, but is beautiful and valid Gravital.</p>

<p>Another example. Consider the fact that all Gravital output is drawn in NodeBox. This would lead to something like:</p>

<ul>
<li>visual output is nodebox</li>
<li>design is nodebox</li>
</ul>

<p>as opening statement, which narrows down the entire field of graphic design to NodeBox! But, if NodeBox would really be able to understand such statements, we wouldn't need any other wieldy graphic application, we would be able to just talk to NodeBox, tell it what we want in plain English, and have it design for us. Ergo, design would really BE NodeBox! We only need Gravital to work... but since it is an empty thing that defines itself, it already works, so now I have proven design is already NodeBox (give or take a few logical fallacies in this paragraph :)</p>

<p>Another example. Consider a briefing in which you are telling the computer that "Tom and Frederik work together on this page layout, and they both like red and white". The first conclusion for Gravital would be that <em>Tom and Frederik</em> together make up the drawing canvas:</p>

<ul>
<li>TomAndFrederik is-a page</li>
</ul>

<p>which is utter bogus (and even grammatically incorrect)! A good lemmatiser or stemmer could help in transforming the statement to "TomAndFrederik are-a page" which is even more fun.</p>

<p>The very idea of a Gravital is already art in itself, but quickly leads to treacherous linguistical pitfalls that need attention.</p>

<p><br /></p>

<hr />

<h1>Let's have some fun!</h1>

<ul>
<li>design is-a nodebox</li>
<li>tom and frederik is-a page</li>
<li>the right is always right</li>
<li>is a is a =</li>
<li>are-a is-a is-a</li>
<li>frederik is-a funny blue guy with-a white hat</li>
<li>beard is hairy grey</li>
<li>beard is-at top-of lucas</li>
<li>lucas is-a funny blue guy with-a red hat</li>
</ul>
