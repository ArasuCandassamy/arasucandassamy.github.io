---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

<link rel="stylesheet" href="{{ '/assets/css/cv-style.css' | relative_url }}">

{% include base_path %}

<script>
document.querySelectorAll("details").forEach((detail) => {
  const content = detail.querySelector(".slide-content");
  if (!content) return;

  content.style.overflow = "hidden";
  content.style.transition = "max-height 0.3s ease, opacity 0.3s ease";
  content.style.maxHeight = "0";
  content.style.opacity = "0";

  detail.addEventListener("toggle", () => {
    if (detail.open) {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.opacity = "1";
    } else {
      content.style.maxHeight = "0";
      content.style.opacity = "0";
    }
  });
});
</script>


<style>
details summary {
  cursor: pointer;
  font-weight: bold;
  margin-top: 0.5em;
}

details summary .triangle {
  display: inline-block;
  transform: rotate(0deg);
  transition: transform 0.2s ease;
  margin-left: 5px;
}

details[open] summary .triangle {
  transform: rotate(90deg);
}

.slide-content {
  padding: 0 1em;
  margin-top: 0.5em;
  background-color: #f9f9f9;
  border-left: 3px solid #ccc;
  border-radius: 4px;
  max-height: 0;
  overflow: hidden;
}
</style>


Education
======
<p><strong>ENSTA Paris</strong> – <em>Palaiseau, France (2023–2026)</em></p>

<ul>
  <li>
    <strong>3<sup>e</sup> année</strong> : Programme d'Approfondissement en Physique Fondamentale à l'<strong>École Polytechnique</strong>
  </li>

  <li>
    <details>
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
  </li>

  <li>
    <details>
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
    </details>
  </li>
</ul>


<script>
// Version simple et directe
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing details animations...');
    
    var allDetails = document.querySelectorAll('details');
    console.log('Found', allDetails.length, 'details elements');
    
    allDetails.forEach(function(details, index) {
        console.log('Processing details', index);
        
        var summary = details.querySelector('summary');
        var triangle = summary ? summary.querySelector('.triangle') : null;
        var content = details.querySelector('.slide-content');
        
        if (!summary) {
            console.log('No summary found for details', index);
            return;
        }
        
        console.log('Details', index, 'has triangle:', !!triangle, 'has content:', !!content);
        
        // Initialize state
        if (content) {
            content.style.maxHeight = details.hasAttribute('open') ? content.scrollHeight + "px" : "0px";
            console.log('Set initial maxHeight for details', index, ':', content.style.maxHeight);
        }
        
        if (triangle) {
            triangle.style.transform = details.hasAttribute('open') ? 'rotate(90deg)' : 'rotate(0deg)';
            console.log('Set initial triangle rotation for details', index, ':', triangle.style.transform);
        }
        
        // Add click handler
        summary.addEventListener('click', function(event) {
            event.preventDefault();
            console.log('Clicked on details', index);
            
            var isOpen = details.hasAttribute('open');
            console.log('Current state - isOpen:', isOpen);
            
            if (isOpen) {
                // Closing
                console.log('Closing details', index);
                if (content) {
                    content.style.maxHeight = "0px";
                    console.log('Set maxHeight to 0px');
                }
                if (triangle) {
                    triangle.style.transform = 'rotate(0deg)';
                    console.log('Set triangle to 0deg');
                }
                
                setTimeout(function() {
                    details.removeAttribute('open');
                    console.log('Removed open attribute for details', index);
                }, 600);
            } else {
                // Opening
                console.log('Opening details', index);
                details.setAttribute('open', '');
                
                // Force reflow
                details.offsetHeight;
                
                if (content) {
                    var newHeight = content.scrollHeight + "px";
                    content.style.maxHeight = newHeight;
                    console.log('Set maxHeight to', newHeight);
                }
                if (triangle) {
                    triangle.style.transform = 'rotate(90deg)';
                    console.log('Set triangle to 90deg');
                }
            }
        });
        
        console.log('Added click handler for details', index);
    });
    
    console.log('Details animations initialized successfully');
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

