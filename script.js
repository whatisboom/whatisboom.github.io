// Smooth scrolling navigation with active state tracking
(function() {
    'use strict';


    // Get all navigation links and sections
    const navLinks = document.querySelectorAll('.nav__links a[href^="#"]');
    const sections = document.querySelectorAll('section[id]');

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation highlighting
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + window.innerHeight / 3;
        const bottomOfPage = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10;

        let currentSection = '';

        // If we're at the bottom of the page, always highlight the last section (contact)
        if (bottomOfPage) {
            const lastSection = Array.from(sections).pop();
            currentSection = lastSection ? lastSection.getAttribute('id') : '';
        } else {
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });
        }

        // Update active state
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }

    // Throttled scroll handler for performance
    let isScrolling = false;
    function handleScroll() {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                updateActiveNavLink();
                isScrolling = false;
            });
            isScrolling = true;
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initialize active state on page load
    document.addEventListener('DOMContentLoaded', updateActiveNavLink);

    // Add fade-in animation for story sections
    function fadeInOnScroll() {
        const storyElements = document.querySelectorAll('.story-section, .through-line, .example');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        storyElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }

    // Initialize fade-in animations if user hasn't reduced motion
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.addEventListener('DOMContentLoaded', fadeInOnScroll);
    }

    // Mobile navigation improvements
    function improveMobileNavigation() {
        const nav = document.querySelector('.nav');
        let lastScrollY = window.scrollY;

        function handleMobileScroll() {
            const currentScrollY = window.scrollY;

            // Hide nav when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                nav.style.transform = 'translateY(-100%)';
            } else {
                nav.style.transform = 'translateY(0)';
            }

            lastScrollY = currentScrollY;
        }

        // Only apply mobile nav behavior on smaller screens
        if (window.innerWidth <= 768) {
            nav.style.transition = 'transform 0.3s ease';
            window.addEventListener('scroll', handleMobileScroll, { passive: true });
        }
    }

    // Initialize mobile improvements
    document.addEventListener('DOMContentLoaded', improveMobileNavigation);

    // Keyboard navigation support
    function addKeyboardSupport() {
        document.addEventListener('keydown', function(e) {
            // Support arrow keys for section navigation
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                e.preventDefault();

                const currentSection = getCurrentSection();
                const allSections = Array.from(sections);
                const currentIndex = allSections.findIndex(section => section.id === currentSection);

                let nextIndex;
                if (e.key === 'ArrowDown') {
                    nextIndex = Math.min(currentIndex + 1, allSections.length - 1);
                } else {
                    nextIndex = Math.max(currentIndex - 1, 0);
                }

                if (allSections[nextIndex]) {
                    const navHeight = document.querySelector('.nav').offsetHeight;
                    const targetPosition = allSections[nextIndex].offsetTop - navHeight - 20;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }

    function getCurrentSection() {
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        for (const section of sections) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                return section.getAttribute('id');
            }
        }

        return sections[0]?.getAttribute('id') || '';
    }

    // Initialize keyboard support
    document.addEventListener('DOMContentLoaded', addKeyboardSupport);

    // Email link tracking (for analytics)
    function trackEmailClicks() {
        const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

        emailLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Track email click if Google Analytics is available
                if (typeof _gaq !== 'undefined') {
                    _gaq.push(['_trackEvent', 'Contact', 'Email Click', this.href]);
                }
            });
        });
    }

    // Initialize email tracking
    document.addEventListener('DOMContentLoaded', trackEmailClicks);

})();