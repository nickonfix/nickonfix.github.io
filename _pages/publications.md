---
layout: page
permalink: /publications/
title: Publications
description: journal articles, patents and preprints, sorted by year
years: [2026, 2025]
nav: true
nav_order: 2
---
<!-- _pages/publications.md -->

Complete list on [Google Scholar](https://scholar.google.com/citations?user=5gcQwrUAAAAJ&hl=en).

<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
