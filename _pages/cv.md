---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

<link rel="stylesheet" href="{{ '/assets/css/cv-style.css' | relative_url }}">

<style>
details > summary {
  list-style: none;
}

details > summary::-webkit-details-marker {
  display: none;
}

details > summary::marker {
  display: none;
}
</style>

{% include base_path %}

Education
======
* **ENSTA Paris** – _Palaiseau, France (2023-2026)_
  * <strong> 3<sup>e</sup> année </strong> : Programme d'Approfondissement en Physique Fondamentale à l'**École Polytechnique**
  * <details>
      <summary>
        <strong>2<sup>e</sup> année</strong> : Majeure en Mathématiques Appliquées 
        <span class="triangle" style="display:inline-block; transition: transform 0.2s; font-size:1.0em;">&#9654;</span>
      </summary>
      <ul>
        <li><strong>Cours de majeure :</strong> Chaînes de Markov, Martingales à temps discret, Modélisation statistique, Recherche opérationnelle, Optimisation différentielle, Méthode des éléments finis, Analyse fonctionnelle, Calcul scientifique en C++, Projet de modélisation d'une galaxie.</li>
        <li><strong>Cours de mineure :</strong> Physique statistique, Physique des plasmas, Théorie spectrale des opérateurs auto-adjoints, Initiation au calcul haute performance, Automatique et commande des systèmes, Algèbre linéaire numérique.</li>
      </ul>
    </details>
  * <details>
      <summary>
        <strong>1<sup>e</sup> année</strong> : Tronc commun du cycle ingénieur ENSTA Paris 
        <span class="triangle" style="display:inline-block; transition: transform 0.2s; font-size:1.0em;">&#9654;</span>
      </summary>
      <ul>
        <li><strong>Cours de mathématiques :</strong> Outils d'analyse d'EDP, Analyse complexe, Systèmes dynamiques, Optimisation, Probabilités et statistiques.</li>
        <li><strong>Cours de physique :</strong> Mécanique des milieux continus, Mécanique des fluides, Physique quantique, Physique statistique, Théorie des champs (non quantique), Physique des particules.</li>
        <li><strong>Cours d'informatique et projets :</strong> Algorithmique, Programmation en C et Matlab ; Projet de programmation : Méthode des éléments finis en Matlab ; Projet de programmation : Jeu d'échecs en C.</li>
      </ul>
    </details>

<script>
document.querySelectorAll('details > summary').forEach(function(summary) {
  summary.addEventListener('click', function() {
    var triangle = this.querySelector('.triangle');
    setTimeout(function() {
      if (summary.parentElement.open) {
        triangle.style.transform = 'rotate(90deg)';
      } else {
        triangle.style.transform = 'rotate(0deg)';
      }
    }, 0);
  });
});
</script>

* **Classe préparatoire aux grandes écoles** - _Lycée Blaise Pascal, Orsay, France (2021-2023)_
  * **1e année** : MPSI (Mathématiques, Physique et Sciences de l'Ingénieur)
  * **2e année** : PSI (Physique et Sciences de l'Ingénieur)
  * Admissible à CentraleSupélec et aux Concours Communs Mines-Ponts - Admis à ENSTA Paris

Experience professionnelle
======

<!-- * Spring 2024: Academic Pages Collaborator
  * GitHub University
  * Duties includes: Updates and improvements to template
  * Supervisor: The Users

* Fall 2015: Research Assistant
  * GitHub University
  * Duties included: Merging pull requests
  * Supervisor: Professor Hub

* Summer 2015: Research Assistant
  * GitHub University
  * Duties included: Tagging issues
  * Supervisor: Professor Git
  
Skills
======
* Skill 1
* Skill 2
  * Sub-skill 2.1
  * Sub-skill 2.2
  * Sub-skill 2.3
* Skill 3

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Currently signed in to 43 different slack teams -->
