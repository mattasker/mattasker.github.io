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
  
### {{ pres.year }}
{% assign current_year = pres.year %}
  {% endif %}
- **{{ pres.title }}** – {{ pres.event }}, {{ pres.location }}, {{ pres.date }}
{% endfor %}

</div>
