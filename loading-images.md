---
title: Code Samples
layout: default
date: 2019-09-23
---

*This page provides a summary of how to display images on your essay pages. The gray boxes should show you exactly what code you need to use; copy and paste it into your own site pages and adjust the attributes as you need to.*

**• In all of the below examples, make sure you take extreme care with your quotation marks and other coding symbols!**

**• DO NOT use double quotation marks `"` in your titles or captions. Single quotation marks `'` are fine.**

---
There is one basic way we will embed images in our essay files. Note that it is totally different how you would it with pure Markdown. This is because if we want to maintain consistency between images, like how the captions appear, we have to make sure we display all images exactly the same way. Using the small code blocks make this as easy as it can be.

## Image Preparation

### Find Images
Because our work is not merely a class project but a publication (yay internet!), we need to make sure we have sufficient permissions to use the images that we do and provide a link back to the original. As a non-commercial education resource, the doctrine of fair use gives us a wide latitude for using images. But it's always best to use images for which the copyright and licensing permissions are very clear.

[Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page) is a great place to start.

### Download and Rename Images
When you find an image you like, download it to your computer. Frequently, images you download will have long and weird filenames that make it difficult to use, even within our repository. You should rename the image so it has a more human readable name that will make it easier to find later. Use only lowercase and hyphens (not underscores or spaces) in your filename.

### Getting Images into our Repository
Bring up a browser window of our [intro-guide repository](https://github.com/unm-historiography/intro-guide). Click on the `essays` folder, then the `images` folder. Drag and drop the file(s) you downloaded and renamed in the previous step.

It is much faster to drag and drop multiple files at once, since after you commit a new image, you end up at the repository home page (not the images folder).


## Image Code
As mentioned, we use a small block of code to help us keep the display of images and captions consistent and flexible.

Again, all you need to do to get images on your essay page is to copy and paste the code from the gray box onto your page wherever you want the image to appear, and adjust the parameters (most importantly, to match your image filename and where you got the image).


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
  source-url="https://nmdigital.unm.edu/digital/collection/ULPhotoImag/id/3516/"
%}{%endraw%}
```

### Use whatever width you want
You can alter the width of the image **as a percentage of our standard page width**. You can have them appear on the left, right, or center of the page.

### Half-width
{% include figure.html class="img-left" width="50%" image-url="../../assets/images/Augustine_Lateran.jpg" source-url="https://en.wikipedia.org/wiki/Augustine_of_Hippo#/media/File:Augustine_Lateran.jpg" caption="Obviously we need a 50% image somewhere with text wrapping around it."%}

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.

---

To achieve the above half-width image, use:
```
{%raw%}{% include figure.html
class="img-left"
width="50%"
caption="Obviously we need a 50% image somewhere."
image-url="images/Augustine_Lateran"
source-url="https://en.wikipedia.org/wiki/Augustine_of_Hippo#/media/File:Augustine_Lateran.jpg"
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
source-url=""
%}

{% include figure.html
class="img-left"
width="49%"
caption="Here's an image on the right."
image-url="images/Johann.jpg"
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
  image-url="images/Cleve-van_construction-tower-babel.jpg"
  source-url="https://commons.wikimedia.org/wiki/File:Cleve-van_construction-tower-babel.jpg"
  %}
```
{%endraw%}



### All image captions should have a link back to webpage of the original source.
See the above image for an example.
