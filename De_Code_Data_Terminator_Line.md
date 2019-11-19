---
layout: page
---
<h1>De Code Data Terminator Line</h1>

<p>Wanneer je een programma schrijft, moet er ergens binnen het programma een lijn getrokken worden tussen de data en de code. Meerbepaald: welke dingen zet je vast (worden in code bepaald) en welke dingen laat je door de gebruiker invullen (de data).</p>

<p>Deze lijn kan op eender welk niveau getrokken worden.</p>

<h1>Voorbeeld</h1>

<ul>
<li>Niveau 1: Ik schrijf een adressenbestand waarbinnen een gebruiker gegevens kan invullen. Die gegevens zijn beperkt tot de invulvelden die ik opleg.</li>
<li>Niveau 2: Ik schrijf een databasepakket waar de gebruiker zelf tabellen kan aanmaken met velden in. Hij schrijft dan als het ware, in data, zijn eigen database-pakket. Eventueel kan hij zelf ook nog de vormgeving bepalen (ook in data)</li>
<li>Niveau 3: Ik schrijf een omgeving waarbinnen de gebruiker databasepakketten kan modelleren. Hij kan nu zelf bepalen hoe hij de gegevens, die uiteindelijk in het pakket moeten komen, wil opslaan, en welke keuzes hij aan zijn gebruikers overlaat.</li>
</ul>

<h1>Relevantie</h1>

<p>Waarom is dit belangrijk? Elk pakket heeft een set van  beslissingen die jij zelf neemt, en een set die de gebruiker kan nemen. De set van beslissingen van de gebruiker zijn altijd binnen een vooraf bepaalde ruimte. De grootte van die ruimte kan de gebruiker niet wijzigen: als je in heel je programma maar één slider hebt zitten waarmee de gebruiker een vlak tussen wit of zwart kan laten variëren, heb jij een heleboel beslissingen zelf gemaakt: de vorm, de grootte van het vlak, de positie van het vlak, het feit dat er maar één vlak is... De gebruiker heeft nog maar één ding dat hij kan beslissen: de grijswaarde van het vlak.</p>

<p>Dus: hoe minder keuze je de gebruiker laat, hoe uniformer de uitvoer zal zijn. Dit zorgt er wel voor dat je een dataset krijgt die je makkelijk kan analysern, aangezien er maar een paar parameters zijn die je kan voorconfigureren.</p>
