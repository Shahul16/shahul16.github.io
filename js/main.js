/* ===================================================================
 * Luther 1.0.0 - Main JS
 *
 * ------------------------------------------------------------------- */

(function(html) {

    "use strict";

    html.className = html.className.replace(/\bno-js\b/g, '') + ' js ';



   /* Animations
    * -------------------------------------------------- */
    const hasAnime = typeof anime !== 'undefined';
    const tl = hasAnime ? anime.timeline( {
        easing: 'easeInOutCubic',
        duration: 800,
        autoplay: false
    })
    .add({
        targets: '#loader',
        opacity: 0,
        duration: 1000,
        begin: function(anim) {
            window.scrollTo(0, 0);
        }
    })
    .add({
        targets: '#preloader',
        opacity: 0,
        complete: function(anim) {
            document.querySelector("#preloader").style.visibility = "hidden";
            document.querySelector("#preloader").style.display = "none";
        }
    })
    .add({
        targets: '.s-header',
        translateY: [-100, 0],
        opacity: [0, 1]
    }, '-=200')
    .add({
        targets: [ '.s-intro .text-pretitle', '.s-intro .text-medium-title'],
        translateX: [100, 0],
        opacity: [0, 1],
        delay: anime.stagger(400)
    })
    .add({
        targets: '.circles span',
        keyframes: [
            {opacity: [0, .3]},
            {opacity: [.3, .1], delay: anime.stagger(100, {direction: 'reverse'})}
        ],
        delay: anime.stagger(100, {direction: 'reverse'})
    })
    .add({
        targets: '.intro-social li',
        translateX: [-50, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, {direction: 'reverse'})
    })
    .add({
        targets: '.intro-scrolldown',
        translateY: [100, 0],
        opacity: [0, 1]
    }, '-=800') : {
        play: function() {
            const preloader = document.querySelector('#preloader');
            if (preloader) {
                preloader.style.visibility = 'hidden';
                preloader.style.display = 'none';
            }
        }
    };



   /* Preloader
    * -------------------------------------------------- */
    const ssPreloader = function() {

        const preloader = document.querySelector('#preloader');
        if (!preloader) return;
        
        window.addEventListener('load', function() {
            document.querySelector('html').classList.remove('ss-preload');
            document.querySelector('html').classList.add('ss-loaded');

            document.querySelectorAll('.ss-animated').forEach(function(item){
                item.classList.remove('ss-animated');
            });

            tl.play();
        });

        // force page scroll position to top at page refresh
        // window.addEventListener('beforeunload' , function () {
        //     // window.scrollTo(0, 0);
        // });

    }; // end ssPreloader


   /* Mobile Menu
    * ---------------------------------------------------- */ 
    const ssMobileMenu = function() {

        const toggleButton = document.querySelector('.mobile-menu-toggle');
        const mainNavWrap = document.querySelector('.main-nav-wrap');
        const siteBody = document.querySelector("body");

        if (!(toggleButton && mainNavWrap)) return;

        toggleButton.addEventListener('click', function(event) {
            event.preventDefault();
            toggleButton.classList.toggle('is-clicked');
            siteBody.classList.toggle('menu-is-open');
        });

        mainNavWrap.querySelectorAll('.main-nav a').forEach(function(link) {
            link.addEventListener("click", function(event) {

                // at 800px and below
                if (window.matchMedia('(max-width: 800px)').matches) {
                    toggleButton.classList.toggle('is-clicked');
                    siteBody.classList.toggle('menu-is-open');
                }
            });
        });

        window.addEventListener('resize', function() {

            // above 800px
            if (window.matchMedia('(min-width: 801px)').matches) {
                if (siteBody.classList.contains('menu-is-open')) siteBody.classList.remove('menu-is-open');
                if (toggleButton.classList.contains("is-clicked")) toggleButton.classList.remove("is-clicked");
            }
        });

    }; // end ssMobileMenu


   /* Highlight active menu link on pagescroll
    * ------------------------------------------------------ */
    const ssScrollSpy = function() {

        const sections = document.querySelectorAll(".target-section");

        // Add an event listener listening for scroll
        window.addEventListener("scroll", navHighlight);

        function navHighlight() {
        
            // Get current scroll position
            let scrollY = window.pageYOffset;
        
            // Loop through sections to get height(including padding and border), 
            // top and ID values for each
            sections.forEach(function(current) {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 50;
                const sectionId = current.getAttribute("id");
            
               /* If our current scroll position enters the space where current section 
                * on screen is, add .current class to parent element(li) of the thecorresponding 
                * navigation link, else remove it. To know which link is active, we use 
                * sectionId variable we are getting while looping through sections as 
                * an selector
                */
                const navLink = document.querySelector('.main-nav a[href*="' + sectionId + '"]');
                if (!navLink || !navLink.parentNode) return;

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.parentNode.classList.add("current");
                } else {
                    navLink.parentNode.classList.remove("current");
                }
            });
        }

    }; // end ssScrollSpy


   /* Animate elements if in viewport
    * ------------------------------------------------------ */
    const ssViewAnimate = function() {

        const blocks = document.querySelectorAll("[data-animate-block]");

        window.addEventListener("scroll", viewportAnimation);

        function viewportAnimation() {

            let scrollY = window.pageYOffset;

            blocks.forEach(function(current) {

                const viewportHeight = window.innerHeight;
                const triggerTop = (current.offsetTop + (viewportHeight * .2)) - viewportHeight;
                const blockHeight = current.offsetHeight;
                const blockSpace = triggerTop + blockHeight;
                const inView = scrollY > triggerTop && scrollY <= blockSpace;
                const isAnimated = current.classList.contains("ss-animated");

                if (inView && (!isAnimated) && hasAnime) {
                    anime({
                        targets: current.querySelectorAll("[data-animate-el]"),
                        opacity: [0, 1],
                        translateY: [100, 0],
                        delay: anime.stagger(400, {start: 200}),
                        duration: 800,
                        easing: 'easeInOutCubic',
                        begin: function(anim) {
                            current.classList.add("ss-animated");
                        }
                    });
                }
            });
        }

    }; // end ssViewAnimate


   /* Swiper
    * ------------------------------------------------------ */ 
    const ssSwiper = function() {

        const swiperContainer = document.querySelector('.swiper-container');
        if (!(swiperContainer && typeof Swiper !== 'undefined')) return;

        const mySwiper = new Swiper('.swiper-container', {

            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                // when window width is > 400px
                401: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // when window width is > 800px
                801: {
                    slidesPerView: 2,
                    spaceBetween: 32
                },
                // when window width is > 1200px
                1201: {
                    slidesPerView: 2,
                    spaceBetween: 80
                }
            }
         });

    }; // end ssSwiper


   /* Lightbox
    * ------------------------------------------------------ */
    const ssLightbox = function() {

        const folioLinks = document.querySelectorAll('.folio-list__item-link');
        if (!(folioLinks.length && typeof basicLightbox !== 'undefined')) return;
        const modals = [];

        folioLinks.forEach(function(link) {
            let modalbox = link.getAttribute('href');
            const modalElement = document.querySelector(modalbox);
            if (!modalElement) return;
            let instance = basicLightbox.create(
                modalElement,
                {
                    onShow: function(instance) {
                        //detect Escape key press
                        document.addEventListener("keydown", function(event) {
                            event = event || window.event;
                            if (event.keyCode === 27) {
                                instance.close();
                            }
                        });
                    }
                }
            )
            modals.push(instance);
        });

        folioLinks.forEach(function(link, index) {
            link.addEventListener("click", function(event) {
                event.preventDefault();
                modals[index].show();
            });
        });

    };  // end ssLightbox


   /* Alert boxes
    * ------------------------------------------------------ */
    const ssAlertBoxes = function() {

        const boxes = document.querySelectorAll('.alert-box');
  
        boxes.forEach(function(box){

            box.addEventListener('click', function(event) {
                if (event.target.matches(".alert-box__close")) {
                    event.stopPropagation();
                    event.target.parentElement.classList.add("hideit");

                    setTimeout(function(){
                        box.style.display = "none";
                    }, 500)
                }    
            });

        })

    }; // end ssAlertBoxes


   /* Smoothscroll
    * ------------------------------------------------------ */
    const ssMoveTo = function(){

        const easeFunctions = {
            easeInQuad: function (t, b, c, d) {
                t /= d;
                return c * t * t + b;
            },
            easeOutQuad: function (t, b, c, d) {
                t /= d;
                return -c * t* (t - 2) + b;
            },
            easeInOutQuad: function (t, b, c, d) {
                t /= d/2;
                if (t < 1) return c/2*t*t + b;
                t--;
                return -c/2 * (t*(t-2) - 1) + b;
            },
            easeInOutCubic: function (t, b, c, d) {
                t /= d/2;
                if (t < 1) return c/2*t*t*t + b;
                t -= 2;
                return c/2*(t*t*t + 2) + b;
            }
        }

        const triggers = document.querySelectorAll('.smoothscroll');
        if (typeof MoveTo === 'undefined') return;
        
        const moveTo = new MoveTo({
            tolerance: 0,
            duration: 1200,
            easing: 'easeInOutCubic',
            container: window
        }, easeFunctions);

        triggers.forEach(function(trigger) {
            moveTo.registerTrigger(trigger);
        });

    }; // end ssMoveTo


   /* Chatbot
    * ------------------------------------------------------ */
    const ssChatbot = function() {

        const toggleButton = document.querySelector('#chatbot-toggle');
        const panel = document.querySelector('#chatbot-panel');
        const closeButton = document.querySelector('#chatbot-close');
        const form = document.querySelector('#chatbot-form');
        const input = document.querySelector('#chatbot-input');
        const messages = document.querySelector('#chatbot-messages');

        if (!(toggleButton && panel && closeButton && form && input && messages)) return;

        let initialized = false;
        let messageCount = 0;
        const MAX_MESSAGES = 50;

        const addMessage = function(text, sender) {
            if (messageCount >= MAX_MESSAGES) {
                messages.removeChild(messages.firstChild);
            }
            const bubble = document.createElement('div');
            bubble.className = sender === 'user' ? 'chatbot__bubble chatbot__bubble--user' : 'chatbot__bubble chatbot__bubble--bot';
            bubble.textContent = text;
            bubble.setAttribute('role', 'article');
            messages.appendChild(bubble);
            messageCount++;
            window.setTimeout(function() {
                bubble.classList.add('chatbot__bubble--visible');
                messages.scrollTop = messages.scrollHeight;
            }, 10);
        };

        const showTyping = function() {
            const dots = document.createElement('div');
            dots.className = 'chatbot__bubble chatbot__bubble--bot chatbot__typing';
            dots.setAttribute('aria-label', 'Assistant is typing');
            dots.innerHTML = '<span></span><span></span><span></span>';
            messages.appendChild(dots);
            messages.scrollTop = messages.scrollHeight;
            return dots;
        };

        const removeTyping = function(dots) {
            if (dots && dots.parentNode) {
                dots.parentNode.removeChild(dots);
            }
        };

        const botReplyLocal = function(message) {
            const query = message.toLowerCase().trim();
            const replies = {
                contact: [
                    'Reach Shahul at shahulofficial16@gmail.com or use the Contact section at the bottom of this page.',
                    'Email: shahulofficial16@gmail.com. LinkedIn: linkedin.com/in/shahul16. GitHub: github.com/Shahul16.'
                ],
                projects: [
                    'Check the Projects section for AI Helpdesk, Python Automation, Cloud Monitoring, ERP Analytics, and IT Ticket Workflow case studies.',
                    'Featured projects showcase systems improvement, automation, data visibility, and IT operations outcomes.'
                ],
                skills: [
                    'Core expertise: business analysis, IT infrastructure, ERP/WMS workflows, data analytics, and Python automation.',
                    'Focus area: improving operations through systems, process design, reporting, and automation.'
                ],
                resume: [
                    'Download CV/Resume from the About section. Shows full career timeline, education, and technical achievements.',
                    'Current role: IT Infrastructure & Systems Engineer at SMART INFINITECH. MBA in Systems & Operations Management.'
                ],
                location: [
                    'Based in Dubai, UAE. Open to UAE opportunities and remote positions globally.',
                    'Located in Dubai with focus on business analysis, systems improvement, automation, and IT infrastructure operations.'
                ]
            };

            if (query.includes('contact') || query.includes('email') || query.includes('phone')) {
                return replies.contact[messageCount % replies.contact.length];
            }
            if (query.includes('project') || query.includes('portfolio') || query.includes('work')) {
                return replies.projects[messageCount % replies.projects.length];
            }
            if (query.includes('skill') || query.includes('expertise') || query.includes('tech') || query.includes('experience')) {
                return replies.skills[messageCount % replies.skills.length];
            }
            if (query.includes('resume') || query.includes('cv')) {
                return replies.resume[messageCount % replies.resume.length];
            }
            if (query.includes('location') || query.includes('based') || query.includes('dubai')) {
                return replies.location[messageCount % replies.location.length];
            }

            return null;
        };

        const botReplyAPI = async function(message, callback) {
            try {
                const localReply = botReplyLocal(message);
                if (localReply) {
                    callback(localReply);
                    return;
                }

                const response = await fetch('https://api-inference.huggingface.co/models/deepset/roberta-base-squad2', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        inputs: {
                            'question': message,
                            'context': 'Shahul Hameed is a Technology Business Analyst based in the UAE with experience in IT infrastructure, ERP/WMS operations, analytics, and automation.'
                        }
                    })
                });

                if (!response.ok) {
                    callback('Thanks for asking. I found context about Shahul\'s work in systems, analytics, and operations improvement. Ask me about contact, skills, or projects for direct answers.');
                    return;
                }

                const data = await response.json();
                const reply = data.answer || 'Thanks for your interest! Feel free to ask about Shahul\'s skills, projects, or background.';
                callback(reply);
            } catch (error) {
                callback('Connecting... Feel free to ask about contact info, projects, skills, or location.');
            }
        };

        const openPanel = function() {
            panel.hidden = false;
            panel.classList.add('chatbot__panel--open');
            toggleButton.setAttribute('aria-expanded', 'true');

            if (!initialized) {
                addMessage('Hi! I\'m Hameed Assistant. Ask me about skills, projects, contact info, or CV.', 'bot');
                initialized = true;
            }

            window.setTimeout(function() {
                input.focus();
            }, 100);
        };

        const closePanel = function() {
            panel.classList.remove('chatbot__panel--open');
            window.setTimeout(function() {
                panel.hidden = true;
            }, 200);
            toggleButton.setAttribute('aria-expanded', 'false');
            toggleButton.focus();
        };

        toggleButton.addEventListener('click', function() {
            if (panel.hidden) {
                openPanel();
            } else {
                closePanel();
            }
        });

        closeButton.addEventListener('click', closePanel);

        input.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closePanel();
            }
        });

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const userMessage = input.value.trim();
            if (!userMessage || input.disabled) return;

            addMessage(userMessage, 'user');
            input.value = '';
            input.disabled = true;

            const typing = showTyping();
            botReplyAPI(userMessage, function(reply) {
                removeTyping(typing);
                addMessage(reply, 'bot');
                input.disabled = false;
                input.focus();
            });
        });
    }; // end ssChatbot


   /* Initialize
    * ------------------------------------------------------ */
    (function ssInit() {

        ssPreloader();
        ssMobileMenu();
        ssScrollSpy();
        ssViewAnimate();
        ssSwiper();
        ssLightbox();
        ssAlertBoxes();
        ssMoveTo();
        ssChatbot();

    })();

})(document.documentElement);