---
layout: default
title: An Introduction to Historiography
subtitle: Selected essays on the history of history
date: 2016-12-02 00:00:00
---

<hr>

{% for section in site.data.nav-sections.sections %}

{% assign pages = site.pages | sort: 'order' %}


<div class="cards">

{% for item in pages %}
  {% if item.toc-section == section.name and item.home-display != false %}
  <a href="{{site.baseurl}}{{item.url}}">
  <div class="row">
    <div class="col-md-8">
      <h2>{{ item.title }}</h2>
      <p> {{ item.toc-blurb }} </p>
    </div>
    <img class="col-md-4 d-sm-none d-md-block" src="essays/images/{{item.toc-image}}" alt="Essay image"/>
  </div>
  </a>
  <hr>
  {% endif %}
{% endfor %}

</div>

{% endfor %}
