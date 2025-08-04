// CV Details Animation Script
(function() {
    'use strict';
    
    function initializeDetailsAnimations() {
        // Add event listeners to all details elements
        document.querySelectorAll('details').forEach(function(details) {
            var summary = details.querySelector('summary');
            var triangle = summary ? summary.querySelector('.triangle') : null;
            var content = details.querySelector('.slide-content');
            
            // Initialize state only if content exists
            if (content) {
                if (details.open || details.hasAttribute('open')) {
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.style.maxHeight = "0px";
                }
            }
            
            // Initialize triangle rotation
            if (triangle) {
                triangle.style.transform = (details.open || details.hasAttribute('open')) ? 'rotate(90deg)' : 'rotate(0deg)';
            }
            
            // Handle click on summary to control the animation manually
            if (summary) {
                summary.addEventListener('click', function(event) {
                    event.preventDefault(); // Prevent default details behavior
                    
                    if (details.hasAttribute('open')) {
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
            }
        });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeDetailsAnimations);
    } else {
        initializeDetailsAnimations();
    }
    
    // Also initialize after a small delay to ensure all Jekyll processing is complete
    setTimeout(initializeDetailsAnimations, 100);
})();
