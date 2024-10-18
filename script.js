document.addEventListener('DOMContentLoaded', function() {
    function showSection(sectionId) {
        const sections = document.querySelectorAll('section');        
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.remove('hidden');
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
                section.classList.add('hidden');
            }
        });
    }

    document.getElementById('homeLink').addEventListener('click', function () {
        showSection('homeSection');
    });

    document.getElementById('aboutMeLink').addEventListener('click', function () {
        showSection('aboutMeSection');
    });

    document.getElementById('mySkillsLink').addEventListener('click', function () {
        showSection('skillsSection');
    });

    document.getElementById('myProjectsLink').addEventListener('click', function () {
        const modal = document.getElementById('projectsModal');
        modal.style.display = 'block';
    });

    // Close modal functionality
    document.querySelector('.close').addEventListener('click', function() {
        const modal = document.getElementById('projectsModal');
        modal.style.display = 'none';
    });

    // Close modal when clicking outside of modal content
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('projectsModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
