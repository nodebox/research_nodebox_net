/* * CodePress regular expressions for JavaScript syntax highlighting */ // JavaScriptLanguage.syntax = [ 	{ input : /\"(.*?)(\"|<br>|<\/P>)/g, output : '<s>"$1$2</s>' }, // strings double quote	{ input : /\'(.*?)(\'|<br>|<\/P>)/g, output : '<s>\'$1$2</s>' }, // strings single quote	{ input : /(function\s+)([\w\.]*)/g, output : '$1<em>$2</em>' }, // functions	{ input : /\b(break|continue|do|for|new|this|void|case|default|else|function|return|typeof|while|if|label|switch|var|with|catch|boolean|int|try|false|throws|null|true|goto|in|print|is_int|int|float|str|list|len|range|choice|random|size|width|height|background|color|nofill|nostroke|fill|stroke|strokewidth|gradient|rect|oval|line|star|arrow|beginpath|moveto|lineto|curveto|closepath|endpath|drawpath|beginclip|endclip|translate|scale|rotate|push|pop|reset|image|speed|stop|_run)\b/g, output : '<b>$1</b>' }, // reserved words	{ input : /\b(alert|isNaN|parent|Array|parseFloat|parseInt|blur|clearTimeout|prompt|prototype|close|confirm|length|Date|location|Math|document|element|name|self|elements|setTimeout|navigator|status|String|escape|Number|submit|eval|Object|event|onblur|focus|onerror|onfocus|onclick|top|onload|toString|onunload|unescape|open|valueOf|window|onmouseover|min|max|abs|round|floor|ceil|pow|sqrt|exp|log|sin|cos|tan|asin|acos|atan|atan2|degrees|radians|PI|angle|distance|coordinates|reflect|Point|Color)\b/g, output : '<u>$1</u>' }, // special words	{ input : /([^:]|^)\/\/(.*?)(<br|<\/P)/g, output : '$1<i>//$2</i>$3' }, // comments //	{ input : /\/\*(.*?)\*\//g, output : '<i>/*$1*/</i>' }, // comments /* */]Language.snippets = [	{ input : 'dw', output : 'document.write(\'$0\');' },	{ input : 'getid', output : 'document.getElementById(\'$0\')' },	{ input : 'fun', output : 'function $0(){\n\t\n}' },	{ input : 'func', output : 'function $0(){\n\t\n}' }]Language.complete = [	{ input : '\'',output : '\'$0\'' },	{ input : '"', output : '"$0"' },	{ input : '(', output : '\($0\)' },	{ input : '[', output : '\[$0\]' },	{ input : '{', output : '{\n\t$0\n}' }		]Language.shortcuts = []