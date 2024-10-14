fetch('myprojects.json')
  .then(response => response.json())
  .then(projects => {
    const projectsContainer = document.getElementById("projects-container");

    projects.forEach(project => {
      const projectCard = document.createElement("div");
      projectCard.classList.add("project-card");

      projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="technologies">Technologies: ${project.technologies.join(", ")}</div>
        <a href="${project.liveLink}" target="_blank">View Project</a>
        <a href="${project.repoLink}" target="_blank">View Repo</a>
      `;

      projectsContainer.appendChild(projectCard);
    });
  })
  .catch(error => console.error('Error fetching project data:', error));
