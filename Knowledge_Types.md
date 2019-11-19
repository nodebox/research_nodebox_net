---
layout: page
---
<h3>General properties</h3>

In addition to type-specific properties, all knowledge types share the following extra properties:
<ul>
<li>type: a global type variable that distinguishes between data types</li>
<li>author: the creator of the document</li>
<li>date: the date the object was created</li>
</ul>

<h3>Relation (<code>relation</code>)</h3>
<ul>
<li>concept1: the left-hand side concept of the relation</li>
<li>concept2: the right-hand side concept of the relation</li>
<li>relation: the relation between the two</li>
<li>weight: the weight of the relationship</li>
<li>category: a namespace for having different types of relations</li>
</ul>

<p>Possible relations are:</p>
<ul>
<li><strong>is-a</strong>: a concept having a more specific meaning than another, e.g. "chihuahua is-a dog" (<em>hyponym</em>)</li>
<li><strong>is-part-of</strong>: a concept that, when combined with other pieces, make up the whole, e.g. "sister is-part-of family" (<em>hyponym</em>)</li>
<li><strong>is-opposite-of</strong>: a concept that has the opposite meaning of another one, e.g. "black is-opposite-of white" (<em>antonym</em>)</li>
<li><strong>is-property-of</strong>: a concept that is entirely linked to another concept, e.g. "sharp is-property-of ice"</li>
<li><strong>is-related-to</strong>: a general relationship, for when other relationships are inappropriate, e.g. "dirty is-related-to rat"</li>
<li><strong>is-same-as</strong>: a concept that is equal to another concept, e.g. "bug is-same-as insect" (<em>synonym</em>)</li>
</ul>

<h3>Factor Analysis (<code>factoranalysis</code>)</h3>
<ul>
<li>concept: the concept that is to be analysised</li>
<li>perceptonyms: a list of words linked to the described concept</li>
</ul>

