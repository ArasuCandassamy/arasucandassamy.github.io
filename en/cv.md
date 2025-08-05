---
layout: archive
title: "CV"
permalink: /en/cv/
author_profile: true
lang: en
redirect_from:
  - /en/resume
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
  * <strong>3<sup>rd</sup> year</strong>: Fundamental Physics Specialization Program at **École Polytechnique**
  * <details>
    <summary>
      <strong>2<sup>nd</sup> year</strong>: Major in Applied Mathematics 
      <span class="triangle">&#9654;</span>
    </summary>
    <div class="slide-content">
      <ul>
        <li><strong>Major courses:</strong> Markov Chains, Discrete-time Martingales, Statistical Modeling, Operations Research, Differential Optimization, Finite Element Method, Functional Analysis, Scientific Computing in C++, Galaxy Modeling Project.</li>
        <li><strong>Minor courses:</strong> Statistical Physics, Plasma Physics, Spectral Theory of Self-adjoint Operators, Introduction to High Performance Computing, Automatic Control and System Control, Numerical Linear Algebra.</li>
      </ul>
    </div>

   * <details>
      <summary>
        <strong>1<sup>st</sup> year</strong>: Common core of ENSTA Paris engineering program 
        <span class="triangle">&#9654;</span>
      </summary>
      <div class="slide-content">
        <ul>
          <li><strong>Mathematics courses:</strong> PDE Analysis Tools, Complex Analysis, Dynamical Systems, Optimization, Probability and Statistics.</li>
          <li><strong>Physics courses:</strong> Continuum Mechanics, Fluid Mechanics, Quantum Physics, Statistical Physics, (Non-quantum) Field Theory, Particle Physics.</li>
          <li><strong>Computer science courses and projects:</strong> Algorithms, Programming in C and Matlab; Programming Project: Finite Element Method in Matlab; Programming Project: Chess Game in C.</li>
        </ul>
      </div>

* **Preparatory classes for engineering schools** - _Lycée Blaise Pascal, Orsay, France (2021-2023)_
  * **1st year**: MPSI (Mathematics, Physics and Engineering Sciences)
  * **2nd year**: PSI (Physics and Engineering Sciences)
  * Eligible for CentraleSupélec and Mines-Ponts Common Entrance Exams - Admitted to ENSTA Paris

Professional Experience
======
* **Research Internship** - _[Max Planck Institute for Plasma Physics](https://www.ipp.mpg.de/), Garching, Germany (May 2025 - August 2025)_
  * Research intern in the Numerical Methods in Plasma Physics Department.
  * Contributing to the development of [**Psydac**](https://github.com/pyccel/psydac), a Python finite element library.
  * Development of test codes and experimentation on a supercomputer.

* **Mathematics and Physics Tutor** - _Lycée Blaise Pascal, Orsay, France (May 2024 - Present)_
  * Oral examinations of MPSI students in groups of three.
  * Selection of exercises and problems adapted to student level.
  * Educational follow-up in collaboration with mathematics and physics teachers.

* **Private Mathematics and Physics Teacher** - _Paris, France (2020-Present)_
  * Private lessons in mathematics and physics for pre-baccalaureate students.
  * Preparation for various exams and competitions (specialty baccalaureate, entrance exams for post-baccalaureate engineering schools).
  * Student guidance and career counseling.

Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

<div class="cv-download-links">
  <a href="{{ base_path }}/files/cv-en.pdf" class="btn btn--primary">Download CV as PDF</a>
</div>
