---
layout: page
permalink: /dissemination/
title: Dissemination
nav: true
nav_order: 4
---

<div>

  {% assign talks = site.data.dissemination | sort: "sort_date" | reverse %}
  {% assign current_year = "" %}

  {% for pres in talks %}

    {% assign year = pres.sort_date | slice: 0, 4 %}

    {% if year != current_year %}
      <div>
        <h3>{{ year }}</h3>
      </div>
      {% assign current_year = year %}
    {% endif %}

    <div>

      <div>
        {{ pres.title }}
      </div>

      {% if pres.host %}
      <div>
        <em>{{ pres.host }}</em>
      </div>
      {% endif %}

      <div>
        {{ pres.location }} · {{ pres.date }}
      </div>

    </div>

  {% endfor %}

</div>
