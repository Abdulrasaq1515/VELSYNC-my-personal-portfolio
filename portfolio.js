        const texts = [
            "Full-Stack Software Engineer",
            "Backend Specialist",
            "Clean Code Advocate",
            "System Architect",
            "Problem Solver"
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typedTextSpan = document.getElementById("typed-text");
        const typingSpeed = 100;
        const deletingSpeed = 50;
        const pauseTime = 2000;

        function type() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typedTextSpan.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typedTextSpan.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(type, pauseTime);
                return;
            }

            if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }

            const speed = isDeleting ? deletingSpeed : typingSpeed;
            setTimeout(type, speed);
        }

        document.addEventListener("DOMContentLoaded", function() {
            setTimeout(type, 1000);
        });

        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                particlesContainer.appendChild(particle);
            }
        } 


        createParticles();

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        const fadeInElements = document.querySelectorAll('.fade-in');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        fadeInElements.forEach(el => observer.observe(el));

        // Download Modal Functions
        function showDownloadModal() {
            document.getElementById('downloadModal').classList.add('show');
            document.body.style.overflow = 'hidden';
        }

        function closeDownloadModal() {
            document.getElementById('downloadModal').classList.remove('show');
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside
        document.getElementById('downloadModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeDownloadModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeDownloadModal();
            }
        });

        function downloadCV() {
            // CV content from your document
            const cvContent = `AJAPE RASAQ ISHOLA
            Lagos, Nigeria (Remote-Friendly) | rasaqajape@gmail.com | github.com/Abdulrasaq1515

            PROFESSIONAL SUMMARY
            Remote-ready Full-Stack Software Engineer with strong backend specialization and experience designing, building, and deploying production-grade systems. Proficient in clean architecture, service-layer design, secure REST APIs, and scalable database schemas using Java, Node.js, TypeScript, and modern web technologies. Demonstrated ownership mentality through multiple production-style projects, including a cloud-deployed Events Management System with automated database migrations, centralized error handling, and role-based access control. Comfortable collaborating with distributed teams, working asynchronously, and delivering maintainable systems suitable for global, remote-first organizations. Seeking Backend, Frontend, or Full-Stack roles.

            TECHNICAL SKILLS
            Languages: Java, TypeScript, JavaScript, Go, Python
            Backend: Spring Boot, Node.js, Express, REST APIs, JWT, Drizzle ORM
            Frontend & Mobile: React.js, Next.js, React Native, React Query, Redux Toolkit, HTML5, CSS3
            Databases: MySQL, PostgreSQL, MongoDB
            DevOps & Tools: Git, GitHub, Docker (fundamentals), Railway, Vercel, Postman
            Practices: Clean Architecture, Service Layer Pattern, Validation, Agile/Scrum, Async Collaboration

            SOFTWARE ENGINEERING EXPERIENCE

            Software Engineering Trainee — Semicolon (2024 – Present)
            • Build backend-focused systems using clean architecture and service-layer patterns.
            • Develop secure, well-validated REST APIs with centralized error handling.
            • Apply Test-Driven Development principles and Agile workflows in team settings.
            • Collaborate using Git-based workflows and clear technical documentation.

            Full-Stack Developer Intern — Velsync (2025)
            • Delivered full-stack web applications using modern JavaScript frameworks and backend services.
            • Implemented CRUD functionality, authentication flows, and database integrations.
            • Maintained public GitHub repositories and communicated progress asynchronously.

            SELECTED PROJECTS

            Events Management System — Full-Stack (Web)
            • Designed and deployed a production-grade system using Next.js, Node.js, MySQL, and Drizzle ORM.
            • Implemented service-layer architecture, Zod validation, and centralized error handling.
            • Designed normalized schemas with indexes, audit fields, and automated migrations.
            • Built user profile management with role-based access control and preferences.
            • Deployed backend and database on Railway; frontend on Vercel.

            Expense Tracking Mobile App — React Native
            • Developed a cross-platform mobile application for tracking personal expenses.
            • Built REST APIs with Node.js and MongoDB for secure data persistence.
            • Implemented Redux Toolkit for predictable state management across the app.
            • Designed scalable data models suitable for future feature expansion.

            Koinsave Transactional API — Backend (Java)
            • Built a transactional backend system using Java, Spring Boot, JPA, and JWT authentication.
            • Implemented wallet operations, transaction processing, and validation logic.
            • Designed database schemas with auditing and data integrity considerations.
            • Focused on reliability, security, and clean code practices.

            PRIOR PROFESSIONAL EXPERIENCE

            Procurement Officer — Crystal Specialist Hospital (2019 – 2024)
            • Managed procurement workflows, contracts, and vendor relationships in a regulated environment.
            • Improved process efficiency, documentation accuracy, and cross-functional collaboration.
            • Developed strong analytical, reporting, and stakeholder management skills transferable to remote engineering teams.

            EDUCATION
            Software Engineering (In View) — Semicolon
            B.Sc. Business Administration (2:1) — University of Lagos
            OND Business Administration — Kwara State Polytechnic`;

           const blob = new Blob([cvContent], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Rasaq_Ajape_Resume.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            
            setTimeout(() => {
                closeDownloadModal();
            }, 500);
        }

        function downloadCoverLetter() {
            const coverLetterContent = `AJAPE RASAQ ISHOLA
                rasaqajape@gmail.com | github.com/Abdulrasaq1515

            Dear Hiring Manager,

        I am writing to apply for Backend, Frontend, or Full-Stack Software Engineer roles within remote-friendly teams. I bring a strong backend foundation, full-stack delivery experience, and a production-oriented mindset developed through real-world, cloud-deployed systems.

        One of my key projects is a production-deployed Events Management System where I designed service-layer architecture, implemented centralized error handling and validation, and managed automated database migrations in a live environment. I have also built a transactional Java backend system (Koinsave) and a cross-platform expense tracking mobile application, demonstrating versatility across backend, web, and mobile platforms.

        I am currently advancing my skills through professional software engineering training at Semicolon while gaining hands-on experience as a Full-Stack Developer Intern at Velsync. My prior professional background has strengthened my communication, documentation, and process optimization skills—qualities that translate well to distributed, remote teams.

        I am motivated by opportunities to contribute to impactful products, collaborate across time zones, and continue growing as an engineer. I would welcome the opportunity to discuss how my skills and mindset align with your team's goals.

        Thank you for your time and consideration.

    Sincerely,
        Ajape Rasaq Ishola`;

            const blob = new Blob([coverLetterContent], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Rasaq_Ajape_Cover_Letter.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            
            setTimeout(() => {
                closeDownloadModal();
            }, 500);
        }
