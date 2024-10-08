const workExperiences = [
    {
    agency: "ITmind s.r.l.",
    location: "Lucca",
    title: "WEB & MOBILE DEVELOPER",
    },
    {
    agency: "Sinergystudio s.r.l.",
    location: "Pisa",
    title: "SOFTWARE DEVELOPER",
    },
    {
    agency: "Hibo s.r.l.",
    location: "Bologna",
    title: "WEB DEVELOPER",
    },
    {
    agency: "Ente Culturale Azul Teatro",
    location: "Lucca",
    title: "SOCIAL MEDIA MANAGER",
    }
];

// Function to render the experiences in both languages
function renderExperiences() {
    const container = document.getElementById('work-experiences');
    
    workExperiences.forEach(item => {
    const timelineDiv = document.createElement('div');
    timelineDiv.classList.add('timeline');
    
    const dateDiv = document.createElement('div');
    dateDiv.classList.add('date');
    dateDiv.textContent = item.agency;
    
    const lineDiv = document.createElement('div');
    lineDiv.classList.add('line');
    
    const titleH6 = document.createElement('h6');
    titleH6.classList.add('title', 'margins-title-timeline', 'pr-3');
    titleH6.style.fontSize = 'medium';
    titleH6.textContent = `${item.title}`;
    
    const locationP = document.createElement('p');
    locationP.classList.add('exeption', 'p-0');
    locationP.textContent = item.location;
    
    // Append elements
    timelineDiv.appendChild(dateDiv);
    timelineDiv.appendChild(lineDiv);
    timelineDiv.appendChild(titleH6);
    timelineDiv.appendChild(locationP);
    
    container.appendChild(timelineDiv);
    });
}

// Call the function to render the experiences
renderExperiences();