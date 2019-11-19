---
layout: page
---
<h1>Generative Strategies for Graphic Design</h1>

<p>We discuss a method for generating graphic design based on a "survival of the fittest approach". Paramount is the algorithm for fitness.</p>

<hr />

<h2>Reasons for choosing genetic algorithms</h2>

<p>In graphic design, there is no absolute, "right", solution for any given problem. There are always an infinite set of better and worse solutions.</p>

<p>Also, the algorithm mimics the way designers work, iteratively improving the solution (or solutions) based on feedback.</p>

<hr />

<h2>In short: the algorithm</h2>

<p>From Wikipedia:</p>

<pre>
  Choose initial population
  Repeat
    Evaluate the individual fitnesses of a certain proportion of the population
    Select pairs of best-ranking individuals to reproduce
    Apply crossover operator
    Apply mutation operator
Until terminating condition
</pre>

<p><br /></p>

<p><a href="http://nodebox.net/code/index.php/Evolution"><img src="http://nodebox.net/code/static/media/evolution-arena2.jpg" /></a></p>

<p><br /></p>

<hr />

<h2>Algorithm for fitness</h2>

<p>Central in the process is defining objective criteria for rating the design's survival rate. Factors as "prettiness" are important, as is "relevancy to the subject matter". </p>

<p>However, these factors are hard to evaluate in code. After all, the results are just a visual composition. We can, with some difficulty, asses factors as readibility or contrast, but those tell us nothing about the inherently subjective matter of "beauty". The differences between good and less good compositions are sometimes extremely subtle.</p>

<p>As of now, we propose to replace the evaluator with manual labor: real persons training the system on good and bad.</p>

<hr />

<h2>References</h2>

<ul>
<li><a href="http://www.spiderland.org/breve/">the breve simulation environment</a></li>
<li><a href="http://en.wikipedia.org/wiki/Genetic_algorithm">Genetic Algorithm article on Wikipedia</a></li>
</ul>
