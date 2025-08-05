---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<style>
/* Clean and simple styles for details animations */
details > summary {
  list-style: none;
  cursor: pointer;
  position: relative;
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
  background-color: #f9f9f9;
  border-left: 3px solid #ddd;
  border-radius: 0 4px 4px 0;
  margin: 0.5em 0;
}

details[open] .slide-content {
  max-height: 1000px; /* Large enough value */
  padding: 0.5em 1em;
}

details > summary:hover {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  padding: 2px 4px;
  margin: -2px -4px;
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
    </details>

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


<script>
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to all details elements
    document.querySelectorAll('details').forEach(function(details) {
        var summary = details.querySelector('summary');
        var triangle = summary.querySelector('.triangle');
        var content = details.querySelector('.slide-content');
        
        // Initialize state only if content exists
        if (content) {
            if (details.open) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = "0px";
            }
        }
        
        // Initialize triangle rotation
        if (triangle) {
            triangle.style.transform = details.open ? 'rotate(90deg)' : 'rotate(0deg)';
        }
        
        // Handle click on summary to control the animation manually
        summary.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default details behavior
            
            if (details.open) {
                // Currently open, we want to close it with animation
                if (content) {
                    content.style.maxHeight = "0px";
                }
                if (triangle) {
                    triangle.style.transform = 'rotate(0deg)';
                }
                
                // Close the details after animation completes
                setTimeout(function() {
                    details.removeAttribute('open');
                }, 600); // Match the CSS transition duration
                
            } else {
                // Currently closed, we want to open it
                details.setAttribute('open', '');
                
                // Force a reflow to ensure the open state is applied
                details.offsetHeight;
                
                if (content) {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
                if (triangle) {
                    triangle.style.transform = 'rotate(90deg)';
                }
            }
        });
    });
});
</script>

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

