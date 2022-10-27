
function SelectPortuguese() {
    FadeOut();
}

function SelectEnglish() {
    //Get texts
    let aboutMe = document.getElementsByClassName('about-me-title');
    let projects = document.getElementsByClassName('projects-title');
    let skills = document.getElementsByClassName('skills-title');
    let contact = document.getElementsByClassName('contact-title');
    let gameDevelopment = document.getElementsByClassName('game-development-title');
    let webDevelopment = document.getElementsByClassName('web-development-title');

    document.getElementById('about-me-title').innerHTML = `<a href="#about-me">About Me</a>`;
    document.getElementById('projects-title').innerHTML = `<a href="#projects">Projects</a>`;
    document.getElementById('skills-title').innerHTML = `<a href="#skills">Skills</a>`;
    document.getElementById('contact-title').innerHTML = `<a href="#footer">Contact</a>`;

    //Change titles language
    for(var i = 0; i < aboutMe.length; i++){
        aboutMe[i].innerHTML = "About Me";    
    }
    for(var i = 0; i < projects.length; i++){
        projects[i].innerHTML = "Projects";    
    }
    for(var i = 0; i < skills.length; i++){
        skills[i].innerHTML = "Skills";    
    }
    for(var i = 0; i < contact.length; i++){
        contact[i].innerHTML = "Contact";    
    }
    for(var i = 0; i < gameDevelopment.length; i++){
        gameDevelopment[i].innerHTML = "Game Development";    
    }
    for(var i = 0; i < webDevelopment.length; i++){
        webDevelopment[i].innerHTML = "Web Development";    
    }

    document.getElementsByClassName('about-me-description')[0].innerHTML = "In 2016 I developed a curiosity for programming. From that time on, I started to research and study on my own and learned about game development, web, servers and several other topics that caught my attention. In 2018, I started studying for college entrance exams with the aim of passing a medical school. After 2 years, my goal was completed, but I decided to follow an area in which I had more affinity. So, I started the Mechatronics Engineering course.";
    document.getElementsByClassName('about-me-description')[1].innerHTML = "I am currently qualifying my skills in a Software Engineering course abroad to enter the programming market once and for all. During these years, I developed an extreme facility in learning any type of concept or programming language. Writing code is as natural to me as reading a book.";

    document.getElementsByClassName('game-development-description')[0].innerHTML = "My most recent project focused on game design and computer science studies. In the project I called Rise of The Dying Sun, I decided to create a game where a silent character explores an empty solar system. For this, I programmed the physics of gravitational attraction of the planets using real physical formulas and concepts. This and other projects can be found on my GitHub.";
    document.getElementsByClassName('web-development-description')[0].innerHTML = "I am currently studying web development with the software engineering course at codecademy - located in New York. a practical example of these studies is this and several other sites that I have been creating with the purpose of learning. For development, I'm using HTML, CSS and Javascript. Along with that, I'm getting acquainted with various front-end and back-end tools.";

    FadeOut();
}

function FadeOut() {
    let element = document.getElementById('language');
    let op = 1;  
    let timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}