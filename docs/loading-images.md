---
title: Loading images
layout: default
date: 2021-11-17
---

This page provides a summary of how to display images on your essay pages. The gray boxes should show you exactly what code you need to use; copy and paste it into your own site pages and adjust the attributes as you need to.

**• In all of the below examples, make sure you take extreme care with your quotation marks and other coding symbols!**

**• If you want to use double quotation marks `"` in your titles or captions, you need to have a backslash `\` right before each one. Like: `caption="my caption is \"so\" good."`**

---
It is easy to embed images in our essay files, but you have to use the awkward code blocks and follow directions precisely. We do this to maintain consistency across essays in terms of how they display images and captions.

## Image Preparation

### Find Images
Because our work is not merely a class project but a publication (yay internet!), **we need to make sure we have sufficient permissions to use the images that we do** and provide a link back to the original. As a non-commercial education resource, the doctrine of fair use gives us a wide latitude for using images. But it's always best to use images for which the copyright and licensing permissions are very clear.

Here are some fun places to search that have a lot of historical images:

- [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)
- [Creative Commons](https://search.creativecommons.org/)
- [Library of Congress](http://www.loc.gov/pictures/)
- It is also useful to peruse particular museum collections, like the [British Museum](https://www.britishmuseum.org/collection), or [Metropolitan Museum of New York](https://www.metmuseum.org/art/collection/search#!#!%3FshowOnly=highlights%7CwithImage%7CopenAccess&offset=0&pageSize=0&sortBy=Relevance&sortOrder=asc&perPage=20&searchField=All), or the [Getty Museum](https://search.getty.edu/gateway/search?q=&cat=highlight&f=%22Open+Content+Images%22&rows=10&srt=a&dir=s&pg=1). Many large international institutions have incredible digital collections that are free to use, but each institution (large or small) has its own permissions and licensing requirements, so you need to see if you can use the image or how it should be credited.

Because you will need to copy the URL of where you got the image so that you paste in into your `source-url` parameter, make sure you're keeping track of the URL where you're images are from so you don't have to track them down later!

### Download and Rename Images
When you find an image you like, download it to your computer. Frequently, images you download will have long and weird filenames. You should rename the image so it has a more human-readable name that will make it easier to troubleshoot later. **Use only lowercase and hyphens (not underscores or spaces) in your filename!**

### Put Images into YOUR Repository
Once you have all your images downloaded, put them into YOUR fork of the metahistory repository in your own GitHub account. To do this, navigate to the  `images` folder, and then drag and drop your files onto your browser window.

It is much faster to drag and drop multiple files at once, since after you commit a file (of any kind), you end up at the repository home page (not where you were, like the images folder).

**Remember to click the green "Commit Changes" button to upload your images after you drag and drop them!**


## Image Code
As you have already seen, we use a small block of code to help us keep the display of images and captions consistent and flexible. You already have this code in what you grabbed from the sample essay, but below you'll find explanations of what to change.

### Edit parameters carefully (IMPORTANT!)
The parameters (class, width, caption) are self explanatory once you see the examples below, but note that:
- `image-url` is the ONLY the filename of the image, with appropriate extension (`.jpg`, `.png`, `.jpeg`, etc).
- `source-url` is the URL of wherever you got the image. This is so people can go see the original and how it's published.
- Make sure the image filename as it appears in the code block and your repository MATCH EXACTLY.
- If you want to use DOUBLE QUOTES in your caption, you need to have a backslash in front of them, like `caption="This is my \"quote\" in my caption."`


### Double check and commit your changes
As you modify the image code blocks, double check that you have:
- matching double quotation marks for all your parameters
- a PERFECT EXACT match between your image filename and what's in the `image-url` field.
- Use the green button to commit your changes as always.

### Check your work
Wait a few minutes, then reload/refresh your essay's webpage. Your images should appear. If they do not, either you need to wait a little longer or you made a mistake with the code. Better to wait a little more before experimenting with code changes, which might not be necessary.

### Troubleshooting
If you've waited more than 5 minutes and your image is still not appearing, you probably made a typo somewhere and you have to find it and fix it.
- Most common problem is a mismatch between image filename and what you put in the `image-url` field.
  - Relatedly, double check you filename extension---it might be `jpg` or `jpeg` or `png`. Make sure your code and the filename match EXACTLY.
- Double check your code for a missing quote or bracket.
- Make sure your files are in the `/essays/images` folder.


### Standard Usage
{% include figure.html class="right" width="33%"
caption="Mesa Vista Hall is **awesome**"
image-url="../../assets/images/default.jpg" %}

Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.

---
To embed the image above, we use:
```
{%raw%}{% include figure.html
  class="right"
  width="33%"
  caption="Mesa Vista Hall is **awesome**"
  image-url="default.jpg"
  source-url="https://nmdigital.unm.edu/digital/collection/ULPhotoImag/id/3516/"
%}{%endraw%}
```

### Use whatever width you want
You can alter the width of the image **as a percentage of our standard page width**. You can have them appear on the left, right, or center of the page.

### Half-width
{% include figure.html class="left" width="50%" image-url="../../assets/images/Augustine_Lateran.jpg" source-url="https://en.wikipedia.org/wiki/Augustine_of_Hippo#/media/File:Augustine_Lateran.jpg" caption="Obviously we need a 50% image somewhere with text wrapping around it."%}

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.

---

To achieve the above half-width image, use:
```
{%raw%}{% include figure.html
class="left"
width="50%"
caption="Obviously we need a 50% image somewhere."
image-url="Augustine_Lateran.jpg"
source-url="https://en.wikipedia.org/wiki/Augustine_of_Hippo#/media/File:Augustine_Lateran.jpg"
%}{%endraw%}
```
---

### Side by side
{% include figure.html class="left" width="49%" image-url="../../assets/images/Herder.jpg" caption="Here's an image on the left."%}

{% include figure.html class="left" width="49%" image-url="../../assets/images/Johann.jpg" caption="Here's an image on the right."%}

---
To achieve two images side by side use (note the 49% width for each):
```
{%raw%}
{% include figure.html
class="left"
width="49%"
caption="Here's an image on the left."
image-url="Herder.jpg"
source-url=""
%}

{% include figure.html
class="left"
width="49%"
caption="Here's an image on the right."
image-url="Johann.jpg"
source-url=""
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
  image-url="Cleve-van_construction-tower-babel.jpg"
  source-url="https://commons.wikimedia.org/wiki/File:Cleve-van_construction-tower-babel.jpg"
  %}
```
{%endraw%}

---

### Slide carousel

<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">

    <div class="carousel-item active">
    <div class="carousel-caption d-none d-md-block">
      <h5>Mesa Vista Hall Construction</h5>
      <p>This place was on the fringe!</p>
    </div>
      <img class="d-block w-100" src="../essays/images/mvh-construction.jpg" alt="First slide">
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src="../essays/images/mvh-floorplan.jpg" alt="Second slide">
      <div class="carousel-caption d-none d-md-block">
        <h5>The original floorplan</h5>
        <p>This floorplan is clearer than anything you can find in MVH now</p>
      </div>
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src="../essays/images/mvh-history-stays.jpg" alt="Third slide">
      <div class="carousel-caption d-none d-md-block">
        <h5>History Stays</h5>
        <p>The History Department didn't want to move to the new Humanities building, so "some remodeling was arranged."</p>
      </div>
    </div>
  </div>

  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


{%raw%}
```
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">

    <div class="carousel-item active">
    <div class="carousel-caption d-none d-md-block">
      <h5>Mesa Vista Hall Construction</h5>
      <p>This place was on the fringe!</p>
    </div>
      <img class="d-block w-100" src="images/mvh-construction.jpg" alt="First slide">
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src="images/mvh-floorplan.jpg" alt="Second slide">
      <div class="carousel-caption d-none d-md-block">
        <h5>The original floorplan</h5>
        <p>This floorplan is clearer than anything you can find in MVH now</p>
      </div>
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src="images/mvh-history-stays.jpg" alt="Third slide">
      <div class="carousel-caption d-none d-md-block">
        <h5>History Stays</h5>
        <p>The History Department didn't want to move to the new Humanities building, so "some remodeling was arranged."</p>
      </div>
    </div>
  </div>

  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
```
{%endraw%}
