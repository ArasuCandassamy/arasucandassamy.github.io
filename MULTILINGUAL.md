# Système Multilingue - Guide d'utilisation

Ce site utilise un système de basculement entre français et anglais.

## 🌍 Fonctionnalités

### Sélecteur de langue
- **Position** : Bouton fixe en haut à droite de chaque page
- **Indicateur visuel** : Drapeau et nom de la langue alternative
- **Sauvegarde** : La préférence de langue est sauvegardée dans le navigateur

### Structure des langues
```
/                 → Français (par défaut)
/cv/              → CV en français
/en/              → Anglais
/en/cv/           → CV en anglais
/en/about/        → À propos en anglais
```

## 🛠️ Configuration

### Fichiers de configuration
- `_data/languages.yml` : Configuration des langues et traductions
- `_includes/language-switcher.html` : Composant de basculement
- `_config.yml` : Configuration multilingue de base

### Variables disponibles
Dans les pages, utilisez `page.lang` pour accéder à la langue courante :
```liquid
{% if page.lang == "en" %}
  Content in English
{% else %}
  Contenu en français
{% endif %}
```

## 📝 Ajouter du contenu multilingue

### 1. Créer une nouvelle page
Pour une page française : `_pages/ma-page.md`
```yaml
---
layout: archive
title: "Titre"
permalink: /ma-page/
lang: fr
---
```

Pour la version anglaise : `en/my-page.md`
```yaml
---
layout: archive
title: "Title"
permalink: /en/my-page/
lang: en
---
```

### 2. Traductions
Ajoutez vos traductions dans `_data/languages.yml` :
```yaml
labels:
  fr:
    mon_label: "Mon texte en français"
  en:
    mon_label: "My text in English"
```

Utilisez dans vos pages :
```liquid
{{ site.data.languages.labels[page.lang].mon_label }}
```

## 🎨 Personnalisation

### Styles du sélecteur
Le sélecteur de langue est stylé pour s'adapter aux modes sombre/clair :
- Position fixe non intrusive
- Animation au survol
- Compatible avec le thème du site

### JavaScript
Le basculement utilise :
- `localStorage` pour sauvegarder la préférence
- Navigation automatique vers la version traduite
- Gestion des URLs avec préfixes de langue

## 🚀 Déploiement

GitHub Pages compilera automatiquement :
1. Les pages dans `/` comme version française
2. Les pages dans `/en/` comme version anglaise
3. Le sélecteur sera disponible sur toutes les pages

## 📋 TODO

- [ ] Ajouter d'autres pages en anglais (Publications, Teaching, etc.)
- [ ] Implémenter la navigation multilingue
- [ ] Ajouter des métadonnées hreflang pour le SEO
- [ ] Créer des redirections automatiques basées sur la langue du navigateur

## 🔧 Dépannage

Si le sélecteur ne s'affiche pas :
1. Vérifiez que `{% include language-switcher.html %}` est dans `_layouts/default.html`
2. Assurez-vous que `_data/languages.yml` existe
3. Relancez Jekyll après les modifications de `_config.yml`
