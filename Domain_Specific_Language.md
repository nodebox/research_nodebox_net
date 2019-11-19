---
layout: page
---
<h1>GUI builders</h1>

<p><a href="http://martinfowler.com/articles/languageWorkbench.html#ASimpleExampleOfLanguageOrientedProgramming">http://martinfowler.com/articles/languageWorkbench.html#ASimpleExampleOfLanguageOrientedProgramming</a></p>

<p><a href="http://martinfowler.com/bliki/DomainSpecificLanguage.html">http://martinfowler.com/bliki/DomainSpecificLanguage.html</a></p>

<p>"the often dire state of communication between domain experts and programmers"</p>

<p>Most programmers don't think of spreadsheets as a programming environment. Yet many lay programmers create sophisticated systems using them. Spreadsheets are a fascinating programming environment that suggest characteristics for a lay programming tool might need:</p>

<p>Immediate feedback - including showing the results of example calculations right away.
Deep integration of tool and language
No textual source
No need to show all information all the time - formulae are only visible when you edit the cell containing them, otherwise the value is shown.
Spreadsheets are also very frustrating. Their lack of structure encourages experimentation, but often I feel a touch more structure could make certain problems much easier to deal with.</p>

<p>So when we think of the DSLs in a language workbench, we should be thinking less of the kinds of languages I've shown here - or of the graphical languages beloved by modelers. Instead we should be thinking of things like the next generation of spreadsheets.</p>

<hr />

<h1>Error handling</h1>

<p>One of the past problems with these kind of intelligent, or structured, editors is that they couldn't deal with incorrect input. Each bit of input needs to be correct before you move on. Such a requirement is a big usability problem. When programming you need to be able to switch around easily - even if that means leaving invalid information in place. The consequence of this, for a projecting editor, is that you need to be able to handle invalid information in your abstract representation. Indeed you want to be able to do this and still be able to function as much as possible. In this case one option would be to generate code from the plan, ignoring those temporal elements that are in error. This kind of robust behavior in the face of wanton invalidity is an important feature of language workbenches.
-- uit <a href="http://martinfowler.com/articles/mpsAgree.html">http://martinfowler.com/articles/mpsAgree.html</a></p>
