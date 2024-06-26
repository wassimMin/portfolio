document.addEventListener('DOMContentLoaded', ()=>{
    const projects = document.querySelectorAll('.project-card');
    let currentProjectIndex = 0;

    document.getElementById('prevBtn').addEventListener('click',()=>{
        projects[currentProjectIndex].classList.remove('active');
        currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
        projects[currentProjectIndex].classList.add('active');
    });
    document.getElementById('nextBtn').addEventListener('click',()=>{
        projects[currentProjectIndex].classList.remove('active');
        currentProjectIndex = (currentProjectIndex +1) % projects.length;
        projects[currentProjectIndex].classList.add('active')
    })
});

