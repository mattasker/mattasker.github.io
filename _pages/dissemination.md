---
layout: page
permalink: /dissemination/
title: dissemination
nav: true
nav_order: 4
---

<div>

  {% assign sorted_presentations = site.data.dissemination | sort: "sort_date" | reverse %}
  {% assign current_year = "" %}

  {% for pres in sorted_presentations %}

    {% assign year = pres.sort_date | slice: 0, 4 %}

    {% if year != current_year %}
      <div style="margin-top:2.2rem; margin-bottom:0.6rem; border-bottom:1px solid #e5e5e5;">
        <h3 style="margin-bottom:0.3rem;">{{ year }}</h3>
      </div>
      {% assign current_year = year %}
    {% endif %}

    <div style="margin-bottom:1.2rem;">
      <div style="font-weight:600;">
        {{ pres.title }}
      </div>

      <div style="color:#666; font-size:0.95rem;">
        {% if pres.host %}{{ pres.host }} · {% endif %}
        {{ pres.location }} · {{ pres.date }}
      </div>
    </div>

  {% endfor %}

</div>
