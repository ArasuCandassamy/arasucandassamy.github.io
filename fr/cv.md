---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
lang: fr
redirect_from:
  - /resume
  - /fr/cv/
---

{% include base_path %}

<style>
/* Clean and simple styles for details animations - Compatible with dark/light mode */
details > summary {
  list-style: none;
  cursor: pointer;
  position: relative;
  color: var(--global-text-color, #333);
}

details > summary::-webkit-details-marker {
  display: none;
}

details > summary::marker {
  display: none;
}

.triangle {
  display: inline-block;
  margin-left: 5px;
  transition: transform 0.3s ease;
  transform-origin: center;
}

details[open] .triangle {
  transform: rotate(90deg);
}

.slide-content {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s ease-out;
  background-color: var(--global-bg-color, #f9f9f9);
  border-left: 3px solid var(--global-border-color, #ddd);
  border-radius: 0 4px 4px 0;
  margin: 0.5em 0;
  color: var(--global-text-color, #333);
}

/* Light mode specific styles */
:root .slide-content {
  background-color: #f9f9f9;
  border-left-color: #ddd;
}

/* Dark mode specific styles */
html[data-theme="dark"] .slide-content {
  background-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.2);
}

details[open] .slide-content {
  max-height: 1000px; /* Large enough value */
  padding: 0.5em 1em;
}

details > summary:hover {
  background-color: var(--global-border-color, rgba(0, 0, 0, 0.05));
  border-radius: 3px;
  padding: 2px 4px;
  margin: -2px -4px;
  transition: background-color 0.2s ease;
}

/* Dark mode hover effect */
html[data-theme="dark"] details > summary:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>


Education
======
* **ENSTA Paris** – _Palaiseau, France (2023-2026)_
  * <strong>3<sup>e</sup> année</strong> : Programme d'Approfondissement en Physique Fondamentale à l'**École Polytechnique**
  * <details>
    <summary>
      <strong>2<sup>e</sup> année</strong> : Majeure en Mathématiques Appliquées 
      <span class="triangle">&#9654;</span>
    </summary>
    <div class="slide-content">
      <ul>
        <li><strong>Cours de majeure :</strong> Chaînes de Markov, Martingales à temps discret, Modélisation statistique, Recherche opérationnelle, Optimisation différentielle, Méthode des éléments finis, Analyse fonctionnelle, Calcul scientifique en C++, Projet de modélisation d'une galaxie.</li>
        <li><strong>Cours de mineure :</strong> Physique statistique, Physique des plasmas, Théorie spectrale des opérateurs auto-adjoints, Initiation au calcul haute performance, Automatique et commande des systèmes, Algèbre linéaire numérique.</li>
      </ul>
    </div>

   * <details>
      <summary>
        <strong>1<sup>e</sup> année</strong> : Tronc commun du cycle ingénieur ENSTA Paris 
        <span class="triangle">&#9654;</span>
      </summary>
      <div class="slide-content">
        <ul>
          <li><strong>Cours de mathématiques :</strong> Outils d'analyse d'EDP, Analyse complexe, Systèmes dynamiques, Optimisation, Probabilités et statistiques.</li>
          <li><strong>Cours de physique :</strong> Mécanique des milieux continus, Mécanique des fluides, Physique quantique, Physique statistique, Théorie des champs (non quantique), Physique des particules.</li>
          <li><strong>Cours d'informatique et projets :</strong> Algorithmique, Programmation en C et Matlab ; Projet de programmation : Méthode des éléments finis en Matlab ; Projet de programmation : Jeu d'échecs en C.</li>
        </ul>
      </div>


* **Classe préparatoire aux grandes écoles** - _Lycée Blaise Pascal, Orsay, France (2021-2023)_
  * **1e année** : MPSI (Mathématiques, Physique et Sciences de l'Ingénieur)
  * **2e année** : PSI (Physique et Sciences de l'Ingénieur)
  * Admissible à CentraleSupélec et aux Concours Communs Mines-Ponts - Admis à ENSTA Paris

Experience professionnelle
======
* **Stage de recherche** - _[Institut Max-Planck de Physique des Plasmas](https://www.ipp.mpg.de/), Garching, Allemagne (mai 2025 - août 2025)_
  * Stagiaire de recherche au sein du Département Numerical Methods In Plasma Physics.
  * Contribution au développement de [**Psydac**](https://github.com/pyccel/psydac), une bibliothèque Python d’éléments finis.
  * Élaboration de codes de test et expérimentation sur un supercalculateur.


* **Khôlleur de mathématiques et de physique** - _Lycée Blaise Pascal, Orsay, France (mai 2024 - Aujourd'hui)_
  * Interrogations orales d’étudiants en MPSI par groupes de trois.
  * Sélection d’exercices et de problèmes adaptés au niveau des élèves.
  * Suivi pédagogique en collaboration avec les professeurs de mathématiques et de sciences physiques.

* **Professeur particulier de mathématiques et physique** - _Paris, France (2020-Aujourd'hui)_
  * Cours particuliers de mathématiques et de sciences physiques pour des étudiants de niveau pré-bac.
  * Préparation aux différents examens et concours (baccalauréat de spécialité, concours pour les écoles d’ingénieurs post-bac).
  * Conseil et aide à l’orientation des élèves.

Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

<!-- 
  
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
  

  
Service and leadership
======
* Currently signed in to 43 different slack teams -->
<div class="cv-download-links">
  <a href="{{ base_path }}/files/cv.pdf" class="btn btn--primary">Télécharger le CV en PDF</a>
</div>

