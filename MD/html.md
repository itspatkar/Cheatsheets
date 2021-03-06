# HTML

**Important languages of web development :**
1. HTML - define the content of web pages.
2. CSS - define the layout/styling of web pages.
3. JavaScript - define the behavior of web pages.

<br>

### Table Of Content :
* [Formatting](#formatting)
* [Links](#links)
* [Lists](#lists)
* [Tables](#tables)
* [Images](#images)
* [Video](#video)
* [Audio](#audio)
* [Frames](#frames)
* [Forms](#forms)
* [HTML Entity](#html-entity)

<br>


## Formatting
| Info | Tags |
| --- | --- |
| comments | `<!-- comment -->` |
| heading | `<h1>` to `<h6>` |
| paragraph | `<p>` |
| line break | `<br>` |
| horizontal line | `<hr>` |
| bold text | `<b>` |
| important text| `<strong>` |
| italic text | `<i>` |
| emphasized text| `<em>` |
| marked text| `<mark>` |
| small text | `<small>` |
| deleted text | `<del>` |
| inserted text | `<ins>` |
| subscript text | `<sub>` |
| superscript text | `<sup>` |
| short quatation | `<q>` |
| blackquote | `<blockquote>` |
| abbreviation | `<abbr>` |
| bidirectional override | `<bdo dir="ltr">` |
| code | `<code>` |
| keyboard input | `<kbd>` |
| program output | `<samp>` |
| defines variable | `<var>` |
| preformatted | `<pre>` |
| Address | `<address>` |
| work title | `<cite>` |


## Links
```
<a href="url" target="_blank"> Link Text </a>
```
**target :** blanck\|self\|parent\|top

### Bookmarks :
```
<h2 id="C4">Chapter 4</h2>
<a href="#C4">Jump to Chapter 4</a>
```


## Lists
### Unordered :
```
<ul>
    <li>Items</li>
</ul>
```

### Ordered :
```
<ol type="value" start="20">
    <li>Items</li>
</ol>
```
- **value**=1\|a\|A\|I\|i
- **start** : start counting from 20

### Description Lists :
```
<dl>
    <dt>Term</dt>
    <dd>- description </dd>
    <dt>Term</dt>
    <dd>- description</dd>
</dl>
```


## Tables
```
<table>
    <thead>
        <tr>
            <th>Table Heading</th>
            <th>Table Heading</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Table Column</td>
            <td>Table Column</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Table Column</td>
            <td>Table Column</td>
        </tr>
    </tfoot>
</table>
```

- `colspan="value"` : span columns
- `rowspan="value"` : span rows

**Caption -**
- `<caption>text</caption>`
*The `<caption>` tag must be inserted immediately after the `<table>` tag.*


## Images
```
<img src="image.jpg" alt="Image Not Supported" width="104" height="142">
```

### Clickable Area :
```
<map name="workmap">
    <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
    <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
    <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm">
</map>
```

### Picture Gallery :
```
<picture>
    <source media="(min-width:650px)" srcset="img_pink_flowers.jpg">
    <source media="(min-width:465px)" srcset="img_white_flower.jpg">
    <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
</picture>
```
- **shape** : rect\|circle\|poly\|default


## Video
```
<video width="320" height="240" autoplay>
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogg" type="video/ogg">
    browser does not support video tag
</video>
```


## Audio
```
<audio controls>
    <source src="horse.ogg" type="audio/ogg">
    <source src="horse.mp3" type="audio/mpeg">
    Browser does not support audio element
</audio>
```


## Frames
```
<iframe src="URL" height="100px" width="100px"></iframe>
```

```
<iframe src="demo_iframe.html" name="iframe_a"></iframe>
<a href="https://www.w3schools.com" target="iframe_a">W3Schools.com</a>
```

```
<iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
```


## Forms
```
<form action="action.php" method="get/post" autocomplete="on/off">
    <label for="fname">Name</label>
    <input type="text" name="iname" value="john">
</form>
```

- **Input Type :** <br>
button\|checkbox\|color\|date\|datetime-local\|email\|file\|hidden\|image\|month\|number\|password\|radio\|range\|reset\|search\|submit\|text\|tel\|time\|url\|week
- **Form Attribute :** <br>
autofocus\|checked\|disabled\|readonly\|required\|multiple\|placeholder\|size\|value\|min\|max\|maxlength


### Button :
```
<button type="button" onclick="alert('Hello World!')">Click Me!</button>
```

### Fieldset :
```
<fieldset>
    <legend>Caption Name</legend>
</fieldset>
```

### Selection List :
```
<select id="cars" name="cars" size="3" multiple>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
    <option value="fiat" selected>Fiat</option>
</select>
```

### Data List :
```
<datalist id="browsers">
    <option value="Internet Explorer">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
</datalist>
```

### Textarea :
```
<textarea name="message" rows="10" cols="30">Text</textarea>
```


## HTML Entity
| Char | Entity |
| --- | --- |
| & | `&amp;` |
| * | `&lowast;` |
| ~ | `&sim;` |
| ^ | `&and;` |
| < | `&lt;` |
| > | `&gt;` |
| ?? | `&copy;` |
| ?? | `&reg;` |
| ??? | `&trade;` |
| ?? | `&times;` |
| ??? | `&bull;` |
| ??? | `&larr;` |
| ??? | `&rarr;` |
| ??? | `&uarr;` |
| ??? | `&darr;` |
| ?? | `&laquo;` |
| ?? | `&raquo;` |
| ??? | `&#9755;` |
| ??? | `&#9754;` |

**More? [Click Me](https://dev.w3.org/html5/html-author/charref)**


<br>

**[GO UP](https://github.com/itspatkar/Cheatsheets/blob/main/html.md#)**
