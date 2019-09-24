---
title: Code Samples
layout: default
date: 2019-09-23
---

*This page provides all the kinds of code snippets you might need, except for images, which are on the [loading images guide](loading-images). The gray boxes should show you exactly what code you need to use; copy and paste it into your own site pages and adjust the attributes as you need to.*

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

---

## Images
For information on images, please see the [Loading Images Guide](loading-images)


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
