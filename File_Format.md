---
layout: page
---
<p>=============</p>

<ul>
<li><a href="http://graphml.graphdrawing.org/">GraphML</a></li>
<li><a href="http://www.apple.com/DTDs/PropertyList-1.0.dtd">plist</a></li>
</ul>

<h1>Example</h1>

<pre>
&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;graphml xmlns="http://graphml.graphdrawing.org/xmlns"  
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:plist="http://www.apple.com/DTDs/PropertyList-1.0.dtd"
    xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns
     http://graphml.graphdrawing.org/xmlns/1.0/graphml.xsd"&gt;
  &lt;graph id="net1" edgedefault="directed"&gt;
    &lt;node id="geoin1"&gt;
      &lt;data&gt;
        &lt;plist:key&gt;fileName&lt;/plist:key&gt;
        &lt;plist:string&gt;bill.png&lt;plist:string&gt;
      &lt;/data&gt;
    &lt;/node&gt;
    &lt;node id="transform1"&gt;
      &lt;data&gt;
        &lt;plist:key&gt;tx&lt;/plist:key&gt; 
        &lt;plist:real&gt;10.0&lt;/plist:real&gt; // support expressions?
      &lt;/data&gt;
    &lt;/node&gt;
    &lt;node id="copy1"/&gt;
    &lt;node id="wiggle1"/&gt;
    &lt;edge source="wiggle1" target="copy1"/&gt; // set source parameter?
    &lt;edge source="copy1" target="transform1"/&gt;
    &lt;edge source="transform1" target="geoin1"/&gt;
  &lt;/graph&gt;
&lt;/graphml&gt;
</pre>
