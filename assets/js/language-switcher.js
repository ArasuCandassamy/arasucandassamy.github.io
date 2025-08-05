/**
 * Language Switcher for multilingual Jekyll site
 * Handles switching between French and English versions
 */
(function() {
  'use strict';
  
  // Page mappings between languages
  var pageMap = {
    // French to English
    fr_to_en: {
      '/': '/en/',
      '/cv/': '/en/cv/',
      '/about/': '/en/about/',
      '/teaching/': '/en/teaching/'
    },
    // English to French
    en_to_fr: {
      '/en/': '/',
      '/en/cv/': '/cv/',
      '/en/about/': '/about/',
      '/en/teaching/': '/teaching/'
    }
  };

  function toggleLanguage() {
    try {
      var currentPath = window.location.pathname;
      var newPath = '';
      
      // Determine current language and target path
      if (currentPath.startsWith('/en/')) {
        // Currently on English, switch to French
        newPath = pageMap.en_to_fr[currentPath] || currentPath.replace(/^\/en\//, '/');
        // Ensure we don't end up with empty path
        if (newPath === '') newPath = '/';
      } else {
        // Currently on French, switch to English
        newPath = pageMap.fr_to_en[currentPath] || '/en' + currentPath;
      }
      
      // Store language preference
      var newLang = currentPath.startsWith('/en/') ? 'fr' : 'en';
      try {
        localStorage.setItem('preferred-language', newLang);
      } catch(e) {
        // Ignore localStorage errors (private browsing, etc.)
        console.log('Could not save language preference:', e);
      }
      
      // Navigate to new language version
      console.log('Switching from', currentPath, 'to', newPath);
      window.location.href = newPath;
      
    } catch(error) {
      console.error('Language toggle error:', error);
      // Fallback: just reload the page
      window.location.reload();
    }
  }

  function initLanguageSwitcher() {
    var languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
      languageToggle.addEventListener('click', toggleLanguage);
      console.log('Language switcher initialized');
    } else {
      console.log('Language toggle button not found');
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
  } else {
    // DOM already loaded
    initLanguageSwitcher();
  }

  // Make toggleLanguage available globally for debugging
  window.toggleLanguage = toggleLanguage;

})();
