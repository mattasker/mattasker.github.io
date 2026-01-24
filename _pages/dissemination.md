---
layout: page
permalink: /dissemination/
title: Dissemination
description: 
nav: true
nav_order: 4
---

<div class="presentations">

  {% assign sorted_presentations = site.data.dissemination | sort: "year" | reverse %}
  
  {% assign current_year = "" %}
  
  {% for pres in sorted_presentations %}
  
    {% if pres.year != current_year %}
    
      <div class="year-header">
        <h3>{{ pres.year }}</h3>
      </div>
      
      {% assign current_year = pres.year %}
    {% endif %}
    
    <div class="presentation">
      <h4 class="presentation-title">{{ pres.title }}</h4>
      <p class="presentation-details">
        {% if pres.event %}<strong>Event:</strong> {{ pres.event }} <br>{% endif %}
        <strong>Location:</strong> {{ pres.location }} <br>
        <strong>Date:</strong> {{ pres.date }}
      </p>
    </div>
  
  {% endfor %}

</div>
