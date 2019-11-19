---
layout: page
---
<h1>Bayesian Filtering</h1>

<p>Bayesian filtering is a classification method for defining categories for documents. It has gained large attention as an efficient way to filter spam.</p>

<p>As a machine learning technique, it requires training to work. In the beginning, a large corpus of good messages (<em>ham</em>) and bad messages (<em>spam</em>) are fed into the engine. The system counts the occurences of words in the good and bad corpus.</p>

<p>After a while, it learns the probability that a certain word will appear in a good or bad mail message. For example, the word "nigeria" will appear much more in spam messages than in ham messages. This is the essence of the technique.</p>

<p>Our Bayesian filtering attempt tries to classify documents as well, either as good design (<em>ham</em>) or bad design(<em>spam</em>). We hope the computer will learn to recognize good design. Once he knows what good design is, he can just generate thousands of designs, until one passes his own spam filter.</p>

<h2>First attempt: value filtering</h2>

<p>We wrote our own classification program that determines itself what good design is. In our program, everything above the blue line is good, and everything below it is bad:</p>

<p><span class="media"><img src="/static/media/bayesian-01.png" width="499" height="499" alt="" /></span>
</p>

<p>The basic idea is that the values are the core of the algorithm, and they need fine-tuning.</p>

<p>Each rectangle is written as a program in itself, and classified as good or bad (depending on its position). Then, a parser counts the occurrences of the four values of the rectangle function: x, y, width and height. It doesn't filter on which parameter is which: it just counts numbers.</p>

<p>The number distribution is as follows: </p>

<p><span class="media"><img src="/static/media/ham01.png" width="517" height="426" alt="" /></span>

<em>Ham number distribution</em></p>

<p><span class="media"><img src="/static/media/spam01.png" width="523" height="432" alt="" /></span>

<em>Spam number distribution</em></p>

<p>The ham numbers show a (noisy) preference for the upper values, while the spam numbers have no preference at all. Not too good.</p>

<h2>Context-sensitive classification</h2>

<p>Our next attempt tries to give context to each number: make seperate maps for each occurence of a number in the string, and compare them. This has the problem that all the programs should look exactly the same.</p>
