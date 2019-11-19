---
layout: page
---
<h1>TECH-ART PAPER</h1>

<ul>
<li>Entry name: NodeBox</li>
<li>Entry type: software application for graphic designers</li>
</ul>

<h1>LANGUAGE INTERFACE</h1>

<p>Graphic design software, applications such as Adobe PhotoShop and Adobe Illustrator, commonly relies on the mouse as interaction tool. Designers can drag and drop images or text on the canvas, stretch things with the mouse, rotate elements, select predefined filters from menus, click action buttons. This is what we could call a manual approach to the graphic design process: users need their hands to design.</p>

<p>NodeBox offers a totally different approach. There are no menus with predefined filters, no buttons, and basically nothing to drag and drop. One part of the application's interface is the empty output canvas, the other part is a programming interface. Users can create programmed scripts that, when executed, create visual output. This way the design process becomes a semantic process. Designers or artists translate what they have inside their heads directly into another (programming) language which the computer understands: the strange manual click-and-drag go-between is eliminated.</p>

<p>Graphic design and art seek to communicate visually. Like any other language, design has a vocabulary, made up out of elements like images, fonts, colors, rectangles, and a grammar ruleset, things like composition and contrast, that define relations between those elements. Design as a system is a language. It is only natural that we can practice design with a tool that understands what we are saying, instead of relying on hand movements.</p>

<p>Consider a following hypothetical design briefing: "We want our brochures to look dynamic, something fresh, bright colors. But not playful, we're still a corporate business, so it has to look solid as well." Nowhere in this small briefing is there any mention of what the designer should do with his or her hands, nowhere the company stated that they wanted "the designer to select the blur filter from the effects-menu". It's all about "dynamic", "fresh", "bright", and "solid". In a best case scenario, we could hand the computer our text and images, enter the above keywords, and rely on his understanding of things like "dynamic" and "solid" to construct page layouts.</p>

<p>NodeBox strives to attain that goal. For this, the software needs to understand language, it needs to work with language.</p>

<p>Currently, NodeBox uses the Python programming language because of its simplicity that is understandable to non-programmers, like graphic design students. In the future, a new abstraction layer (see "Gravital" later on in this text) will be wrapped around the Python language, with common-sense words and sentences that resemble natural language.</p>

<h1>REPEATABILITY, AUTOMATION, BOUNDARIES</h1>

<p>The use of programming code to generate design has other major advantages as well. Using for-loops, the computer is able to very quickly place hundreds or even thousands of elements (like images or circles) on the canvas, something a designer could never do by hand. A chunk of code - a portion of the design recipe - can be repeated over and over, without any increase in workload. We leave labor and production to the computer, who is far better at it than humans are.</p>

<p>With programming code we are able to reuse or automate portions of our design recipe. Once we define what "page titles" look like (for example, they should be white in a black rectangle, set in the Dolly font) we can reuse that description over and over, apply it to each title automatically without having to select each separate title with the mouse, make it white, drag a black rectangle behind it. If we change the one description of what titles look like, any title in the layout automatically reflects the changes.</p>

<p>Furthermore, with programming code we can introduce a random factor, for example tell the computer that page titles should be colored somewhere between red and pink, but leave the actual decision up to the computer. This way, we can hand the computer a "fuzzy style description", and leave the exact details up to him.</p>

<p>These three factors combined, we have introduced the Monte Carlo way of working to graphic design. A designer can very quickly set up a vague description of the style, apply it to hundreds or thousands of variations, get a quick and easy way of seeing what the results will look like. The computers offers endless variants, the designer chooses which fits best.</p>

<h1>INTEGRATION WITH EXISTING SOFTWARE</h1>

<p>The NodeBox application is not a closed world; it interacts smoothly with other software. It can have Adobe Illustrator documents as input. It can have Adobe PhotoShop documents as input. It understands XML. It could access and read web pages.</p>

<p>NodeBox can export its creations as a PDF, that can be opened in Adobe Illustrator or Adobe Acrobat. PDF documents are the standard for print publishing, and NodeBox aims at being a professional application where print designers can create print documents that are press-ready.</p>

<p>NodeBox can handle animation, and save animations in the popular Quicktime movie format that can be displayed on web pages, or edited in the Apple Quicktime player.</p>

<p>NodeBox is a full solution to the design process: it has bitmap (image) manipulation capabilities similar Adobe PhotoShop (through the PhotoBot library), vector curve functionality like Adobe Illustrator (through the Bezier and Cornu libraries), text and font handling like Adobe InDesign. Once the designer becomes familiar with Python code, and all of the myriad of libraries available for NodeBox, no other software package is needed for print publishing or movie creation.</p>

<h1>LANGUAGE, INTELLIGENCE AND CREATIVITY</h1>

<p>NodeBox is a professional tool for designers, but its original goal was to be an environment in which graphic design could be linked to natural language and artificial intelligence; an engine with a brain that understands what graphic design "is".</p>

<p>Three teachers at the St. Lucas School of Arts are currently involved in a research project dealing with design automation. When the school entered the Bachelor/Master plan, budgets became available for research, of which the Design Automation was the first accepted project. The research project has been active for a year now, releasing NodeBox, delving into different fields of computer intelligence, semantics, computational linguistics and cellular automata in an attempt to get the computer to understand the design language's grammar rules, to get the computer to become creative.</p>

<p>The research project's philosophy is based on Hofstadter's description of an ant hill: small pieces of code, ants, that operate in their own private field are developed. Each ant has potential capability to work together with other new ants. This way, things are kept comprehensible, focusing on small steps at a time, but later on they can all work together in an organic hive.</p>

<p>NodeBox, and its ability to address the multitude of Python code libraries, is an excellent tool for this task. Below are some examples that illustrate the full potential of NodeBox:</p>

<h2>Hopkins and OttoBot</h2>

<p>Some early experiments with language and design semantics included the Hopkins-generator, and OttoBot.</p>

<p>The Hopkins-generator, based on Mark Pilgrim's Kant Generator Pro, creates endless documents of text that resemble the art criticism in David Hopkins' After Modern Art book. Basically, the program understands that a text document is made up of paragraphs, that paragraphs are made up of sentences that are relationships between words. Furthermore, the program understands that, for example, the first paragraph starts with an introductory sentence explaining the theorem. An introductory sentence could start with "As we have observed" or "As we can clearly see" or... In this way, a grammatically correct David Hopkins text is generated from an abstract grammar description.</p>

<p>In September 2005, a lecture was held at the AtpyI conference in Helsinki on NodeBox. The presentation details entered for the lecture had been generated by a program similar to the Hopkins-generator and it succesfully passed the (Turing?) test: the lecture was accepted.</p>

<p>OttoBot works in a similar way, but generates NodeBox code rather than English language. OttoBot understands the NodeBox programming language, is able to write programs in it, and run them to generate visual output. The computer has become creative. The only thing it lacks is a sense of esthetics and style - it just writes code, doesn't know if it will look good or not. This leads us to the assumption that for a computer to become fully creative, it needs artistic knowledge and expertise, it needs to know the design rules.</p>

<h2>Flowerewolf</h2>

<p>Flowerewolf builds on WordNet to create experimental poetry on any possible subject. WordNet is a dictionary of synonyms related to other synonyms, developed at Princeton. Flowerewolf (the program came up with its own name, which is an incorporation of two words and even a palindrome) uses the knowledge and expertise in the WordNet database to get creative with the English language.</p>

<p>This NodeBox program can handle basic rules of poetry, like alliteration, consonation, antonation, eloquent (read: stiff upper-lip) speech, couplets, verse. Flowerewolf even developed its own visual style to match its quaint poems, a style ranging between dada and Paul Van Ostaijen.</p>

<p>Flowerewolf has an eccentric sense of humor and an acquired taste for eloquence. Like constructing musing poems on oilfish and describing them as mystical mackerels for example.</p>

<h2>Prism</h2>

<p>One of the libraries developed during this year is Prism, our first Hofstadter ant - which has already been credited in De Standaard newspaper and on the Radio2 radiostation. Prism matches a color palette to any given subject. It attempts to aid designers in finding the right colors for their design.</p>

<p>Prism retrieves colors for apple (which would result in soft greens, yellows and reds) with the same ease as retrieving colors for jealousy (which would result in bright yellows and sickly greens). Because Prism is a computer program, it makes no difference between both concepts: the two of them are just words it runs through its filters. It doesn't even understand the words. This works entirely different with humans: humans know apples are green and red, obviously, because we can see them. More importantly, we have bound apples to countless of well-known associations like Snowwhite and Little-Red-Ridinghood, or nature.</p>

<p>We tend to rule out the less obvious options, like yellow apples. A computer program has no direct knowledge of Snowwhite, or that the fairytale is related to apples - therefore it tends to think out of the box, examining all possible options with equal interest. Pink apples have an equal chance of winning than do green apples. This often results in illogical results, like a pink panther instead of a black panther. Color theory is however not rocket science, but a connotative process of binding the right colors to all concepts that surround a given subject, not just the object by itself. Therefore, illogical results are allowed, and can be viewed as creative solutions. A computer program coming up with a panther being pink is actually picking up on the memes and trying to be creative and witty, which is a positive side-effect.</p>

<p>Prism has no fixed database of words linked to colors, but rather uses the internet as its data mine. It builds on Google (using the NodeBox code package with the same name) and regards the internet as an infinite database of fuzzy and subjective knowledge, filled with information that is very hard to grasp for any computer algorithm. Prism doesn't actually understand what it's doing when it cross-indexes green to apple on the internet - again, these are just words. Rather, it puts its trust in the collective effort of millions of people around the world all filling the internet with data. It is my assumption that any large or infinite system of data tends to evolve to natural order and entropy. Bluntly stated: there will likely be more webpage texts on the internet that contain the words green and apple close together, than there will be webpages with the words pink and apple close together. Therefore, humans most likely think of apples being green. Therefore, Prism assumes that apples must be green.</p>

<p>A second problem Prism tackles is the question of exactly what shade of a color to apply. There is dark green, and there is light green. For this, Prism has a language to HSB library called Shades that matches formal parameters like dark and bright to hue/saturation/brightness color values.</p>

<p>Prism has a small secondary library which filters out the key words of a piece of text, and uses those words to construct color palettes. This way, Prism can match colors to any piece of text.</p>

<p>Prism has an estimated hit rate of 70% of getting it right. </p>

<p>A joint project with CNTS, the research center of the Department of Linguistics of the University of Antwerp (UA) in Antwerp, Belgium, will likely be started in the near future to refine the hit percentage of algorithms such as Prism.</p>

<h2>Data Visualisation</h2>

<p>A side-track of the research project is the visualisation of large or infinite data structures. Again, because of NodeBox's ability to visually output code, its proficiency with XML, it is an excellent tool for the job.</p>

<p>One example is a visual tree of data stored in ConceptNet, a common-sense knowledge database developed at MIT. These graphs have proven very useful as an aid for graphic design students to unravel their design concepts: a ConceptNet visualisation shows the "feel" of a given word, its "habits", its connotations to other words, and more. It can juxtapose two words and display what they have in common.</p>

<h2>Vector math</h2>

<p>A side-track of the research project is interested in spline math. Graphic design applications such as Adobe Illustrator and Adobe InDesign rely heavily on vector art (for example, fonts are vectors as well).</p>

<p>NodeBox is continually improving its spline functionality, for example implementing Bezier spline math (thanks to Professor F. De Smedt at the Vrije Universiteit Brussel) which users can use to create fluid vector paths from points, manipulate text to make it appear "hairy" or "stitched together", and so on.</p>

<p>NodeBox has a library for Cornu splines as well, which create elegant spiral curves based on an algorithm by Raph Levien.</p>

<h2>Gravital</h2>

<p>A side-track of the research project is involved with the development of a graphic design language, based on the principle of semantic networks. In this language it would be possible to explain graphic design to a computer as if it were a five-year old.</p>

<p>Each problem in graphic design is unique. Each assignment requires that the graphic designer immerses himself or herself in the particular world of the client; be it building construction, health care, software design or grocery shopping.</p>

<p>Currently, whatever the problem is, we always fall back to the same set of tools, made with the graphic designer in mind. What if we set out to create a set of tools that were as unique as the problem? What if every assignment has its own toolbox?</p>

<p>This is what Gravital attempts. Gravital is an extensible language and platform that adapts to every problem domain. It is ideally suited for describing problems and solutions in their own language.</p>

<p>The principle of Gravital is based on Haskell and Lisp. It works as an environment in which a few basic language constructs are already available. You, as a designer, can begin inventing new concepts, relationships and entities that are needed for the problem at hand. You can even redefine existing language constructs: nothing is fixed.</p>

<p>The language focuses on the what, not on the how. You should never fall back to imperative programming logic: instead, you can build a language using a few basic mathematical rules, and a whole lot of compositions and aggregations. Language builds on language.</p>

<p>An example:</p>

<ul>
<li>"a is a blue rectangle"</li>
<li>"a is at the center"</li>
<li>"b is a big circle"</li>
<li>"b is above a"</li>
</ul>

<p>NodeBox generates a composition with a blue rectangle of variable size at the center of the page, and a big circle of variable color somewhere above it.</p>

<p>Of course, the current statements are open for interpretation: nowhere does it say what color the big circle should have, or what size a should have, or whether b should be directly above a. All those factors are things NodeBox will try out, to give you an idea of what is possible with the description you gave. The way he interprets the rules might result in some interesting ideas that you hadn't even thought of.</p>

<h2>Natural Composition</h2>

<p>One of the hardest things to explain to a computer is composition in graphic design, because of its fuzziness and its complex nature involving multiple elements that all relate to each other.</p>

<p>Boids are elements that describe leaderless groups like flocks, herds or schools, according to the algorithm made in 1986 by Craig Reynolds. Boids have no mathematical equations describing their path: they move along individually, and as a group steering clear of each other and moving in the direction everyone else is going.</p>

<p>Mark Geard, speaker at the AtypI 2005 conference in Helsinki, describes something called "flow", the organic factor (ironically we could call this organisation) in typography and composition, which appeals to our subconscious, in contrast to predefefined and rigid technological design. Multiple attempts in our research to define composition in terms of strict grids support Geard's statement that composition (or anything else in design for that matter) requires a dosage of natural freedom: the grids didn't work, looked stale and uncomfortable.</p>

<p>Boids might be a way to describe natural compositions in graphic design.
Here is an example of curves drawn with a combination of the NodeBox Boids library and the Cornu spline library, a spiralling curve algorithm by Raph Levien.</p>

<h2>Photobjects</h2>

<p>Photobjects is a database of 100,000 images linked to NodeBox's PhotoBot library. This way, NodeBox can create compositions of bricolated images that visualise any given word or concept.</p>

<h1>NODEBOX NOW AND IN THE FUTURE</h1>

<p>Currently, NodeBox is freely downloadable at http://nodebox.net, and will continue to be available for free. NodeBox currently runs on the Mac OS X operating system.</p>

<p>A future release, NodeBox 3, will run on Windows as well, and will contain a graphic node/network interface.</p>

<h1>CREDITS</h1>

<p>NodeBox originated from DrawBot, an application developed by Just Van Rossum from the Dutch LettError company, which Frederik De Bleser expanded with stateful capabilities, text functionality, a faster graphing context, animation, multiple page export, Bezier functionality.</p>

<p>The concept of using programming code to generate graphic design is not an original concept in NodeBox, other variants are out there as well. The most known is Processing, a Java application developed by Casey Reas at MIT, which users can use to create animations and interaction in a website.</p>

<p>Instead of starting from scratch, NodeBox has taken over some concepts already present in Processing, because 1) they were good concepts and 2) it allows users that know NodeBox to switch to Processing easily, and vice versa. These concepts include the use of a state machine and the naming conventions of functions.</p>

<p>Main differences are NodeBox easy Python code, its ability to generate PDF print documents, and its goal to become an intelligent tool.</p>

<h1>REFERENCES</h1>

<ul>
<li>http://nodebox.net</li>
<li>http://research.nodebox.net</li>
<li>http://www.apple.com/downloads/macosx/math_science/nodebox.html</li>
<li>http://www.standaard.be/archief/dag/index.asp?snel=0&amp;datum=31/3/2005&amp;prev=gr9dngve</li>
<li>http://www.atypi.org/news<em>tool/news</em>html?from=http://www.atypi.org/07<em>Helsinki/10</em>news/index_html&amp;newsid=331</li>
<li>http://processing.org/</li>
<li>http://drawbot.com/</li>
</ul>
