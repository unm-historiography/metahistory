---
title: Code Samples
layout: default
date: 2019-09-23
---

*This page provides all the kinds of code snippets you might need. The gray boxes should show you exactly what code you need to use; copy and paste it into your own site pages and adjust the attributes as you need to.*

**• In all of the below examples, make sure you take extreme care with your quotation marks and other coding symbols!**

**• DO NOT use double quotation marks `"` in your titles or captions. Single quotation marks `'` are fine.**

**• Remember to use the [Markdown Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for Markdown syntax issues. And you can always double experiment with [Dillinger](http://dillinger.io).**


## Essay Metadata
All essays must have the following metadata at the top of the page, with the values customized to your own page. **Be sure you have the 3 hyphens `---` before and after your metadata on their own lines**. The top of your essay page should look like:

``` markdown
---
title: Mesa Vista Hall
author: Fred Gibbs
date: 2019-09-13
---
```


## Images
There is one basic way we will embed images in our essay files. Note that it is totally different from pure Markdown. This is because if we want to maintain consistency between images, like how the captions appear, we have to make sure we display all images exactly the same way.


### Standard Usage

{% include figure.html class="img-right" width="33%" caption="Mesa Vista Hall" image-url="../../assets/images/default.jpg" %}

Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.

---
To embed the image above, we use:
```
{%raw%}{% include figure.html
  class="img-right"
  width="33%"
  caption="Mesa Vista Hall"
  image-url="images/default.jpg"
%}{%endraw%}
```

### Use whatever width you want
You can alter the width of the image **as a percentage of our standard page width**. You can have them appear on the left, right, or center of the page.

### Half-width
{% include figure.html class="img-left" width="50%" image-url="../../assets/images/Augustine.jpg" caption="Obviously we need a 50% image somewhere with text wrapping around it."%}

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.

---

To achieve the above half-width image, use:
```
{%raw%}{% include figure.html
class="img-left"
width="50%"
caption="Obviously we need a 50% image somewhere."
image-url="images/Augustine.jpg"
%}{%endraw%}
```
---

### Side by side
{% include figure.html class="img-left" width="49%" image-url="../../assets/images/Herder.jpg" caption="Here's an image on the left."%}

{% include figure.html class="img-left" width="49%" image-url="../../assets/images/Johann.jpg" caption="Here's an image on the right."%}

---
To achieve two images side by side use (note the 49% width for each):
```
{%raw%}
{% include figure.html
class="img-left"
width="49%"
caption="Here's an image on the left."
image-url="images/Herder.jpg"
%}

{% include figure.html
class="img-left"
width="49%"
caption="Here's an image on the right."
image-url="images/Johann.jpg"
%}

{%endraw%}
```


### Full-width
{% include figure.html class="img-center" width="100%" caption="Make sure your image is large enough to be 100% width or it will look grainy."  
image-url="../../assets/images/Cleve-van_construction-tower-babel.jpg"
source-url="https://commons.wikimedia.org/wiki/File:Cleve-van_construction-tower-babel.jpg"
%}


To achieve the above full-width image, use:
{%raw%}
```
{% include figure.html
  class="img-center"
  width="100%"
  caption="Make sure your image is large enough to be 100% width or it will look grainy."
  image-url="../../assets/images/Cleve-van_construction-tower-babel.jpg"
  source-url="https://commons.wikimedia.org/wiki/File:Cleve-van_construction-tower-babel.jpg"
  %}
```
{%endraw%}

### Image sources
Because our work is not merely a class project but a publication (yay internet!), we need to make sure we have sufficient permissions to use the images that we do and provide a link back to the original. As a non-commercial education resource, the doctrine of fair use gives us a wide latitude for using images. But it's always best to use images for which the permissions are very clear.

### All image captions should have a link back to webpage of the original source.
See the above image for an example.

---

## Line breaks
If you need a new section but don't want a new heading (I'm not sure why you'd do this, but I want to keep things flexible), you can use the Markdown code for a horizontal rule, which is `---` (three dashes). It looks like the line before and after this paragraph.

---
## Footnotes
All good historical essays (as you're writing) show what their sources are, which helps readers know what actual research underlies the essay.

To get a footnote to show up, there are two steps:

1) put `[^SOMETEXT]` in your essay where you want the superscript number to appear, and change SOMETEXT to some unique signifier related to the content of the note. In your markdown file, your text will look like:

```
Here's a sample sentence with a footnote at the end.[^source] Here is yet another sentence.[^another-source]
```

2) put  `[^SOMETEXT]: Your footnote text` at the bottom of your essay.


```
[^source]: Your footnote text
[^another-source]: Text for another footnote.
```

Viewed as a webpage, the code above will render as:

Here's a sample sentence with a footnote at the end.[^source] Here is yet another sentence.[^another-source]  Note that the numbering happens automagically, so you don't need to think about that.

[^source]: Your footnote text
[^another-source]: Text for another footnote.

We don't need to footnote every statement, and because your paragraphs should be on the same topic, you can simply use a footnote reference for each paragraph if everything in it comes from the same source. But if you have a certain point you want to highlight, please cite it directly and as precisely as you can.




---

## Pull Quotes

As part of our effort to highlight our most important ideas---even in the context of relatively short essays---we want to use pull quotes.

### Standard usage
Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.

{% include aside.html class="pullquote" text="
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque." %}

Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.


To place a pull quote as above, we use:


```
{%raw%}{% include aside.html
  class="pullquote"
  text="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque."
  %}{%endraw%}
```


### Full-width quotes
If you are quoting from a historical source, you might want to say more than can fit in a normal pull quote format. For those cases, you can use a markdown blockquote to highlight a particularly juicy quotation.

> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque.

To achieve the above full width pull quote, just start your quote with a greater-than sign as shown below:
```
> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque.
```
