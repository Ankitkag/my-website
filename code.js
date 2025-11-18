
    // 1. Smooth Scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Fade-in on Scroll Animation
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.2, 
        rootMargin: "0px 0px -50px 0px" 
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target); 
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });


    // 3. MULTI-LINE TYPING EFFECT FIX
    // Isse aapki lambi line poori type hogi, chahe usme line break ho ya nahi.

    const typingElement = document.querySelector('.typing-effect');
    if (typingElement) {
        // Original text ko save kar liya
        const textToType = typingElement.textContent;
        typingElement.textContent = ''; // Element ko khali kar diya

        let charIndex = 0;
        const typingSpeed = 50; // Speed (milliseconds per character)

        function type() {
            if (charIndex < textToType.length) {
                // Har character ko ek-ek karke add kiya
                typingElement.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(type, typingSpeed);
            }
        }
        
        // Typing function ko shuru kiya
        setTimeout(type, 1000); // 1 second ka delay diya
    }
