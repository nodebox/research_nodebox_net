---
layout: page
---
<p>Het NodeBox platform vormt de basis waarop NodeBox en z'n toepassingen worden geschreven.</p>

<p>De huidige versie van NodeBox heeft ernstige tekortkomingen qua snelheid, vooral voor interactieve toepassingen. Dit vereist serieuze aanpassingen in de architectuur. Daarom is het interessant van alle mogelijkheden eens te bekijken.</p>

<h1>Vereisten</h1>

<ul>
<li>Python code editor met syntax coloring en "the throttle"</li>
<li>Grafische mogelijkheden:
<ul>
<li>Primitives (rect, oval)</li>
<li>Paths</li>
<li>Text</li>
<li>Color (graytones, RGB, HSB, CMYK)</li>
<li>Clipping</li>
</ul></li>
<li>Animatie</li>
<li>Interactiviteit</li>
<li>Export naar PDF en QuickTime</li>
</ul>

<p>Daarnaast een aantal <em>want-to-haves</em>:</p>

<ul>
<li>Cross-platform renderer</li>
<li>Cross-platform editor</li>
</ul>

<h1>Oplossingen</h1>

<p>De volgende oplossingen werden voorgesteld:</p>

<h2>Cocoa + PyObjC + Python (Business as Usual)</h2>

<p>Verderzetting van de bestaande NodeBox.</p>

<ul>
<li>(+) We kunnen alle bestaande code houden</li>
<li>(+) We kunnen steunen op Mac OS technologieëen als Core Graphics en Core Animation</li>
<li>(-) Draait enkel op Mac OS X, dus geen server versie mogelijk</li>
</ul>

<h2>Java + Jython</h2>

<p>Verderzetting van wat momenteel "NodeBox 2" is in puur Java</p>

<ul>
<li>(+) We kunnen de bestaande, substantiële codebase van NodeBox 2 gebruiken</li>
<li>(+) Cross-platform, dus een Windows-versie (wordt nu al gebruikt) en een server versie (<a href="http://nodebox.net/screencasts/nobs/">bekijk de screencast</a>)</li>
<li>(-) Jython is verouderd t.o.v. Python en slecht onderhouden</li>
<li>(-) Lijkt niet op een native applicatie op Mac OS X</li>
<li>(-) Geen ondersteuning voor Mac OS technologieëen</li>
</ul>

<h2>Processing + Jython</h2>

<ul>
<li>(+) We bouwen verder op een heel successvol open-source project</li>
<li>(-) Tekstmogelijkheden ontbreken</li>
<li>(-) Jython is verouderd t.o.v. Python en slecht onderhouden</li>
</ul>

<h2>OpenGL + Python</h2>

<ul>
<li>(+) Snelheid</li>
<li>(+) Veel flexibiliteit in de uitvoering</li>
<li>(+) Cross-platform editor en renderer</li>
<li>(+) Allerlei <a href="NodeBox_OpenGL_Effects">effecten</a> mogelijk</li>
<li>(-) We moeten heel veel code terug "uitvinden"</li>
<li>(-) Ziet er niet native uit op Mac OS X, maar kan er wel heel goed uitzien</li>
</ul>
